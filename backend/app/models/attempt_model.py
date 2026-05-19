from datetime import datetime
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from app.database import Base

class Attempt(Base):
    __tablename__ = 'attempts'

    id = Column(Integer, primary_key=True, index=True)
    participant_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    quiz_id = Column(Integer, ForeignKey('quizzes.id'), nullable=False)
    started_at = Column(DateTime, default=datetime.utcnow)
    submitted_at = Column(DateTime, nullable=True)
    status = Column(String(80), default='in_progress')
    question_order_json = Column(Text, nullable=False)
    option_order_json = Column(Text, nullable=False)
    remaining_time_seconds = Column(Integer, default=0)
    score = Column(Integer, default=0)
    total_violations = Column(Integer, default=0)

    participant = relationship('User')
    quiz = relationship('Quiz')
    answers = relationship('Answer', back_populates='attempt', cascade='all, delete-orphan')
