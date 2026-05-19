import json
from sqlalchemy.orm import Session
from app.models.answer_model import Answer
from app.models.question_model import Question
from app.models.attempt_model import Attempt

class ScoringService:
    @staticmethod
    def calculate_score(db: Session, attempt: Attempt, answers: list) -> int:
        total = 0
        for answer_payload in answers:
            question = db.query(Question).filter(Question.id == answer_payload.question_id).first()
            if not question:
                continue
            correct_answers = set(json.loads(question.correct_answers_json))
            submitted = set(answer_payload.selected_answers)
            is_correct = correct_answers == submitted
            marks = question.marks if is_correct else -question.negative_marks if question.negative_marks else 0
            total += marks
            record = db.query(Answer).filter(Answer.attempt_id == attempt.id, Answer.question_id == question.id).first()
            if record:
                record.selected_answers_json = json.dumps(answer_payload.selected_answers)
                record.is_correct = is_correct
                record.marks_obtained = marks
            else:
                record = Answer(
                    attempt_id=attempt.id,
                    question_id=question.id,
                    selected_answers_json=json.dumps(answer_payload.selected_answers),
                    is_correct=is_correct,
                    marks_obtained=marks,
                )
                db.add(record)
        db.commit()
        return total
