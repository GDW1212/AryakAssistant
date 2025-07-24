from flask import request, redirect, jsonify, current_app, render_template
from flask_jwt_extended import create_access_token
import requests
from . import auth_bp
from .services import get_user_info, find_or_create_user

@auth_bp.route('/login')
def login_page():
    return render_template('login.html')

@auth_bp.route('/login/<provider>')
def social_login(provider):
    """소셜 플랫폼의 인가 코드를 받기 위해 리다이렉트합니다."""
    provider_name = provider.upper()
    client_id = current_app.config[f'{provider_name}_CLIENT_ID']
    redirect_uri = f"http://127.0.0.1:5000/oauth/{provider}"

    if provider_name == 'KAKAO':
        url = f"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}"
    elif provider_name == 'NAVER':
        url = f"https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&state=STATE_STRING"
    elif provider_name == 'GOOGLE':
        url = (
            f"https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20email%20profile"
            f"&response_type=code&client_id={client_id}&redirect_uri={redirect_uri}"
        )
    else:
        return jsonify(error="Unsupported provider"), 400
    return redirect(url)

@auth_bp.route('/oauth/<provider>')
def oauth_callback(provider):
    """콜백 처리 후 JWT 토큰을 발급합니다."""
    provider_name = provider.upper()
    code = request.args.get('code')
    
    if provider_name == 'KAKAO':
        token_url = "https://kauth.kakao.com/oauth/token"
        data = {'grant_type': 'authorization_code', 'client_id': current_app.config['KAKAO_CLIENT_ID'], 'redirect_uri': f"http://127.0.0.1:5000/oauth/kakao", 'code': code}
    elif provider_name == 'NAVER':
        token_url = "https://nid.naver.com/oauth2.0/token"
        data = {'grant_type': 'authorization_code', 'client_id': current_app.config['NAVER_CLIENT_ID'], 'client_secret': current_app.config['NAVER_CLIENT_SECRET'], 'code': code, 'state': 'STATE_STRING'}
    elif provider_name == 'GOOGLE':
        token_url = "https://oauth2.googleapis.com/token"
        data = {'grant_type': 'authorization_code', 'client_id': current_app.config['GOOGLE_CLIENT_ID'], 'client_secret': current_app.config['GOOGLE_CLIENT_SECRET'], 'redirect_uri': f"http://127.0.0.1:5000/oauth/google", 'code': code}
    else:
        return jsonify(error="Unsupported provider"), 400

    token_response = requests.post(token_url, data=data)
    access_token = token_response.json().get('access_token')

    if not access_token:
        return jsonify(error="Failed to get access token."), 400

    user_info = get_user_info(provider_name, access_token)
    if not user_info:
        return jsonify(error="Failed to get user info"), 400
    
    user = find_or_create_user(provider_name, user_info)
    jwt_token = create_access_token(identity=user.id)
    
    return jsonify(access_token=jwt_token)