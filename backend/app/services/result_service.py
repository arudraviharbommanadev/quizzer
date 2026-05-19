from app.models.result_model import Result
from app.models.attempt_model import Attempt

class ResultService:
    @staticmethod
    def get_results_for_quiz(db, quiz_id: int):
        return db.query(Result).filter(Result.quiz_id == quiz_id).all()

    @staticmethod
    def get_result_by_attempt(db, attempt_id: int, participant_id: int):
        attempt = db.query(Attempt).filter(Attempt.id == attempt_id, Attempt.participant_id == participant_id).first()
        if not attempt:
            return None
        return {
            'quiz_id': attempt.quiz_id,
            'participant_id': participant_id,
            'score': attempt.score,
            'status': attempt.status,
        }
