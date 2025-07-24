from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.BigInteger, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=True)
    nickname = db.Column(db.String(100), nullable=False)
    profile_image_url = db.Column(db.String(2048), nullable=True)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())
    social_accounts = db.relationship('SocialAccount', back_populates='user', cascade='all, delete-orphan')

class SocialAccount(db.Model):
    __tablename__ = 'social_accounts'
    id = db.Column(db.BigInteger, primary_key=True)
    user_id = db.Column(db.BigInteger, db.ForeignKey('users.id', ondelete='CASCADE'), nullable=False)
    provider = db.Column(db.String(50), nullable=False)
    provider_id = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    user = db.relationship('User', back_populates='social_accounts')
    __table_args__ = (db.UniqueConstraint('provider', 'provider_id', name='uq_provider_id'),)