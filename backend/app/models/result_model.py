from datetime import datetime
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from app.database import Base

class Result(Base):
    __tablename__ = 'results'

    id = Column(Integer, primary_key=True, index=True)
    attempt_id = Column(Integer, ForeignKey('attempts.id'), nullable=False)
    quiz_id = Column(Integer, ForeignKey('quizzes.id'), nullable=False)
    participant_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    score = Column(Integer, default=0)
    status = Column(String(80), default='pending')
    created_at = Column(DateTime, default=datetime.utcnow)
