from app.models.violation_model import Violation
from app.models.attempt_model import Attempt

class ProctorService:
    @staticmethod
    def record_violation(db, attempt_id: int, violation_type: str):
        attempt = db.query(Attempt).filter(Attempt.id == attempt_id).first()
        if not attempt:
            return None
        violation = Violation(attempt_id=attempt_id, violation_type=violation_type)
        db.add(violation)
        attempt.total_violations += 1
        db.commit()
        return violation
