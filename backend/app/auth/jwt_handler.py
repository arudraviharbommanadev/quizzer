from datetime import datetime, timedelta
from jose import JWTError, jwt
from fastapi import Header, HTTPException, status
from app.config import settings


def create_access_token(subject: str) -> str:
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode = {'exp': expire, 'sub': subject}
    return jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def create_refresh_token(subject: str) -> str:
    expire = datetime.utcnow() + timedelta(days=7)
    to_encode = {'exp': expire, 'sub': subject, 'type': 'refresh'}
    return jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)


def decode_token(token: str) -> dict:
    return jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])


def verify_token(authorization: str = Header(...)) -> dict:
    scheme, _, token = authorization.partition(' ')
    if scheme.lower() != 'bearer' or not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid authentication header')
    try:
        return decode_token(token)
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Token validation failed')
