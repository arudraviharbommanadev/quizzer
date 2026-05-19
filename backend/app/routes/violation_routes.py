from fastapi import APIRouter, Depends, HTTPException, status
from app.services.proctor_service import ProctorService
from app.dependencies import get_db, participant_only

router = APIRouter(prefix='/violations', tags=['Violations'])

@router.post('/')
def log_violation(attempt_id: int, violation_type: str, db = Depends(get_db), user=Depends(participant_only)):
    violation = ProctorService.record_violation(db, attempt_id, violation_type)
    if not violation:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Attempt not found')
    return {'status': 'recorded'}
