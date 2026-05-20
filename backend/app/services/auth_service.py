from sqlalchemy.orm import Session
from app.auth.password_handler import hash_password, verify_password
from app.auth.jwt_handler import create_access_token, create_refresh_token
from app.models.user_model import User
from app.schemas.auth_schema import LoginRequest

class AuthService:
    @staticmethod
    def authenticate_user(db: Session, payload: LoginRequest):
        user = db.query(User).filter(User.email == payload.email, User.role == 'admin').first()
        if not user or not verify_password(payload.password, user.hashed_password):
            return None
        access_token = create_access_token(user.email)
        refresh_token = create_refresh_token(user.email)
        return {
            'access_token': access_token,
            'refresh_token': refresh_token,
            'token_type': 'bearer',
            'user': {'id': user.id, 'name': user.name, 'email': user.email, 'role': user.role},
        }
