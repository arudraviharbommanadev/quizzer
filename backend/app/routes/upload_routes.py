from fastapi import APIRouter, Depends, File, UploadFile, HTTPException, status
from sqlalchemy.orm import Session
from app.services.upload_service import UploadService
from app.dependencies import get_db, admin_only

router = APIRouter(prefix='/upload', tags=['Upload'])

@router.post('/parse')
def parse_questions(file: UploadFile = File(...), db: Session = Depends(get_db), user=Depends(admin_only)):
    content = file.file.read()
    questions = UploadService.parse_file(file.filename, content)
    if not questions:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Unable to parse questions')
    return {'questions': questions}
