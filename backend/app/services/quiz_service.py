import json
from sqlalchemy.orm import Session
from app.models.quiz_model import Quiz
from app.models.question_model import Question
from app.models.attempt_model import Attempt
from app.services.randomizer_service import RandomizerService
from app.utils.helpers import generate_quiz_code

class QuizService:
    @staticmethod
    def create_quiz(db: Session, admin_id: int, payload):
        quiz_code = generate_quiz_code()
        quiz = Quiz(
            title=payload.title,
            description=payload.description,
            created_by=admin_id,
            total_questions=len(payload.questions),
            duration_minutes=payload.duration_minutes,
            negative_marking_enabled=payload.negative_marking_enabled,
            randomize_questions=payload.randomize_questions,
            randomize_options=payload.randomize_options,
            fullscreen_required=payload.fullscreen_required,
            auto_submit_enabled=payload.auto_submit_enabled,
            max_violations=payload.max_violations,
            quiz_code=quiz_code,
            is_active=False,
        )
        db.add(quiz)
        db.flush()
        for question_payload in payload.questions:
            question = Question(
                quiz_id=quiz.id,
                question_text=question_payload.question_text,
                option_a=question_payload.option_a,
                option_b=question_payload.option_b,
                option_c=question_payload.option_c,
                option_d=question_payload.option_d,
                correct_answers_json=json.dumps(question_payload.correct_answers),
                question_type=question_payload.question_type,
                marks=question_payload.marks,
                negative_marks=question_payload.negative_marks,
                question_timer=question_payload.question_timer,
            )
            db.add(question)
        db.commit()
        db.refresh(quiz)
        return quiz

    @staticmethod
    def list_quizzes(db: Session):
        return db.query(Quiz).all()

    @staticmethod
    def get_quiz(db: Session, quiz_id: int):
        return db.query(Quiz).filter(Quiz.id == quiz_id).first()

    @staticmethod
    def find_quiz_by_code(db: Session, quiz_code: str):
        return db.query(Quiz).filter(Quiz.quiz_code == quiz_code).first()

    @staticmethod
    def activate_quiz(db: Session, quiz_id: int):
        quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
        if not quiz:
            return None
        quiz.is_active = True
        db.commit()
        return quiz

    @staticmethod
    def create_attempt(db: Session, participant_id: int, quiz: Quiz):
        questions = db.query(Question).filter(Question.quiz_id == quiz.id).all()
        question_order = RandomizerService.build_question_order([q.id for q in questions], quiz.randomize_questions)
        option_order = RandomizerService.build_option_order(questions, quiz.randomize_options)
        attempt = Attempt(
            participant_id=participant_id,
            quiz_id=quiz.id,
            status='in_progress',
            question_order_json=json.dumps(question_order),
            option_order_json=json.dumps(option_order),
            remaining_time_seconds=quiz.duration_minutes * 60,
        )
        db.add(attempt)
        db.commit()
        db.refresh(attempt)
        return attempt
