import requests
from app.models import db, User, SocialAccount

def get_user_info(provider, token):
    """액세스 토큰을 이용해 소셜 플랫폼에서 사용자 정보를 가져옵니다."""
    headers = {'Authorization': f'Bearer {token}'}
    if provider == 'KAKAO':
        user_info_url = "https://kapi.kakao.com/v2/user/me"
        response = requests.get(user_info_url, headers=headers)
        user_data = response.json()
        kakao_account = user_data.get('kakao_account', {})
        profile = kakao_account.get('profile', {})
        return {
            'provider_id': str(user_data.get('id')),
            'email': kakao_account.get('email'),
            'nickname': profile.get('nickname'),
            'profile_image_url': profile.get('profile_image_url')
        }
    elif provider == 'NAVER':
        user_info_url = "https://openapi.naver.com/v1/nid/me"
        response = requests.get(user_info_url, headers=headers)
        user_data = response.json().get('response')
        return {
            'provider_id': user_data.get('id'),
            'email': user_data.get('email'),
            'nickname': user_data.get('nickname'),
            'profile_image_url': user_data.get('profile_image')
        }
    elif provider == 'GOOGLE':
        user_info_url = "https://www.googleapis.com/oauth2/v2/userinfo"
        response = requests.get(user_info_url, headers=headers)
        user_data = response.json()
        return {
            'provider_id': user_data.get('id'),
            'email': user_data.get('email'),
            'nickname': user_data.get('name'),
            'profile_image_url': user_data.get('picture')
        }
    return None

def find_or_create_user(provider, user_info):
    """사용자 정보로 DB에서 유저를 찾거나 새로 생성합니다."""
    social_account = SocialAccount.query.filter_by(
        provider=provider, 
        provider_id=user_info['provider_id']
    ).first()

    if social_account:
        return social_account.user

    user = None
    if user_info['email']:
        user = User.query.filter_by(email=user_info['email']).first()

    if not user:
        user = User(
            email=user_info.get('email'),
            nickname=user_info.get('nickname'),
            profile_image_url=user_info.get('profile_image_url')
        )
        db.session.add(user)
        db.session.flush()

    new_social_account = SocialAccount(
        user_id=user.id,
        provider=provider,
        provider_id=user_info['provider_id']
    )
    db.session.add(new_social_account)
    db.session.commit()
    return user