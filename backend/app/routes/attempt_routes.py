from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.attempt_schema import StartAttemptResponse, AnswerPayload, SubmitPayload
from app.services.quiz_service import QuizService
from app.services.scoring_service import ScoringService
from app.models.attempt_model import Attempt
from app.models.answer_model import Answer
from app.dependencies import get_db, participant_only
from app.utils.constants import ATTEMPT_STATUS_IN_PROGRESS, ATTEMPT_STATUS_SUBMITTED
from app.utils.helpers import serialize_json
import json

router = APIRouter(prefix='/attempts', tags=['Attempts'])

@router.post('/start', response_model=StartAttemptResponse)
def start_attempt(quiz_code: str, db: Session = Depends(get_db), user=Depends(participant_only)):
    quiz = QuizService.find_quiz_by_code(db, quiz_code)
    if not quiz or not quiz.is_active:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Quiz not available')
    attempt = QuizService.create_attempt(db, user.id, quiz)
    return {
        'attempt_id': attempt.id,
        'quiz_id': quiz.id,
        'question_order': json.loads(attempt.question_order_json),
        'option_order': json.loads(attempt.option_order_json),
        'remaining_time_seconds': attempt.remaining_time_seconds,
        'quiz_code': quiz_code,
    }

@router.post('/{attempt_id}/autosave')
def autosave_answer(attempt_id: int, payload: AnswerPayload, db: Session = Depends(get_db), user=Depends(participant_only)):
    attempt = db.query(Attempt).filter(Attempt.id == attempt_id, Attempt.participant_id == user.id).first()
    if not attempt:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Attempt not found')
    answer = db.query(Answer).filter(Answer.attempt_id == attempt_id, Answer.question_id == payload.question_id).first()
    if answer:
        answer.selected_answers_json = serialize_json(payload.selected_answers)
    else:
        answer = Answer(
            attempt_id=attempt_id,
            question_id=payload.question_id,
            selected_answers_json=serialize_json(payload.selected_answers),
        )
        db.add(answer)
    db.commit()
    return {'status': 'saved'}

@router.post('/{attempt_id}/submit')
def submit_attempt(attempt_id: int, payload: SubmitPayload, db: Session = Depends(get_db), user=Depends(participant_only)):
    attempt = db.query(Attempt).filter(Attempt.id == attempt_id, Attempt.participant_id == user.id).first()
    if not attempt:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Attempt not found')
    score = ScoringService.calculate_score(db, attempt, payload.answers)
    attempt.score = score
    attempt.status = ATTEMPT_STATUS_SUBMITTED
    attempt.submitted_at = None
    db.commit()
    return {'attempt_id': attempt.id, 'score': score}
