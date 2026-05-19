from typing import Generator
from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from jose import JWTError
from app.database import SessionLocal
from app.auth.jwt_handler import verify_token
from app.models.user_model import User
from app.utils.constants import ROLE_ADMIN, ROLE_PARTICIPANT


def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def get_current_user(token_data: dict = Depends(verify_token), db: Session = Depends(get_db)) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail='Could not validate credentials',
        headers={'WWW-Authenticate': 'Bearer'},
    )
    if not token_data:
        raise credentials_exception
    email = token_data.get('sub')
    if email is None:
        raise credentials_exception
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise credentials_exception
    return user


def admin_only(user: User = Depends(get_current_user)) -> User:
    if user.role != ROLE_ADMIN:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Admin privileges required')
    return user


def participant_only(user: User = Depends(get_current_user)) -> User:
    if user.role != ROLE_PARTICIPANT:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Participant privileges required')
    return user
