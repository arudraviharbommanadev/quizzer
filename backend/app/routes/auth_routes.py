from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.auth_schema import LoginRequest, TokenResponse
from app.services.auth_service import AuthService
from app.dependencies import get_db

router = APIRouter(prefix='/auth', tags=['Authentication'])

@router.post('/login', response_model=TokenResponse)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    token_data = AuthService.authenticate_user(db, payload)
    if not token_data:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid credentials')
    return token_data
