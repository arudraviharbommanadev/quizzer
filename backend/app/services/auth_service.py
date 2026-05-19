from sqlalchemy.orm import Session
from app.auth.password_handler import hash_password, verify_password
from app.auth.jwt_handler import create_access_token
from app.models.user_model import User
from app.schemas.auth_schema import LoginRequest, UserCreate

class AuthService:
    @staticmethod
    def create_user(db: Session, payload: UserCreate) -> User:
        existing = db.query(User).filter(User.email == payload.email).first()
        if existing:
            return None
        user = User(
            name=payload.name,
            email=payload.email,
            hashed_password=hash_password(payload.password),
            role=payload.role,
        )
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    @staticmethod
    def authenticate_user(db: Session, payload: LoginRequest):
        user = db.query(User).filter(User.email == payload.email).first()
        if not user or not verify_password(payload.password, user.hashed_password):
            return None
        access_token = create_access_token(user.email)
        return {'access_token': access_token, 'token_type': 'bearer'}
