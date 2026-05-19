from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.services.result_service import ResultService
from app.dependencies import get_db, admin_only, participant_only

router = APIRouter(prefix='/results', tags=['Results'])

@router.get('/{quiz_id}', response_model=List[dict])
def quiz_results(quiz_id: int, db: Session = Depends(get_db), user=Depends(admin_only)):
    return ResultService.get_results_for_quiz(db, quiz_id)

@router.get('/attempt/{attempt_id}', response_model=dict)
def attempt_result(attempt_id: int, db: Session = Depends(get_db), user=Depends(participant_only)):
    result = ResultService.get_result_by_attempt(db, attempt_id, user.id)
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Result not found')
    return result
