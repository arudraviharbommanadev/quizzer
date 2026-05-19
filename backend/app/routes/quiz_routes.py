from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlalchemy.orm import Session
from app.schemas.quiz_schema import QuizCreate, QuizRead
from app.services.quiz_service import QuizService
from app.dependencies import get_db, admin_only

router = APIRouter(prefix='/quizzes', tags=['Quizzes'])

@router.post('/', response_model=QuizRead)
def create_quiz(payload: QuizCreate, db: Session = Depends(get_db), user=Depends(admin_only)):
    quiz = QuizService.create_quiz(db, user.id, payload)
    return quiz

@router.get('/', response_model=List[QuizRead])
def list_quizzes(db: Session = Depends(get_db), user=Depends(admin_only)):
    return QuizService.list_quizzes(db)

@router.get('/{quiz_id}', response_model=QuizRead)
def read_quiz(quiz_id: int, db: Session = Depends(get_db), user=Depends(admin_only)):
    quiz = QuizService.get_quiz(db, quiz_id)
    if not quiz:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Quiz not found')
    return quiz

@router.post('/{quiz_id}/deploy')
def deploy_quiz(quiz_id: int, db: Session = Depends(get_db), user=Depends(admin_only)):
    quiz = QuizService.activate_quiz(db, quiz_id)
    if not quiz:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Quiz not found')
    return {'status': 'deployed', 'quiz_id': quiz_id}
