from datetime import datetime
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from app.database import Base

class Question(Base):
    __tablename__ = 'questions'

    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey('quizzes.id'), nullable=False)
    question_text = Column(Text, nullable=False)
    option_a = Column(String(260), nullable=False)
    option_b = Column(String(260), nullable=False)
    option_c = Column(String(260), nullable=False)
    option_d = Column(String(260), nullable=False)
    correct_answers_json = Column(Text, nullable=False)
    question_type = Column(String(80), default='single')
    marks = Column(Integer, default=1)
    negative_marks = Column(Integer, default=0)
    question_timer = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

    quiz = relationship('Quiz', back_populates='questions')
