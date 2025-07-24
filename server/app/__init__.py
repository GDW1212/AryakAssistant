from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

from .config import Config
from .models import db
from .auth import auth_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # 확장 초기화
    db.init_app(app)
    Migrate(app, db)
    JWTManager(app)

    # 블루프린트 등록
    app.register_blueprint(auth_bp, url_prefix='/')

    # 앱 컨텍스트 내에서 테이블 자동 생성
    with app.app_context():
        db.create_all()

    return app