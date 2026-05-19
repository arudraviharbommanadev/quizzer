from datetime import datetime
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from app.database import Base

class Quiz(Base):
    __tablename__ = 'quizzes'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(260), nullable=False)
    description = Column(Text, nullable=True)
    created_by = Column(Integer, ForeignKey('users.id'), nullable=False)
    total_questions = Column(Integer, default=0)
    duration_minutes = Column(Integer, default=15)
    negative_marking_enabled = Column(Boolean, default=False)
    randomize_questions = Column(Boolean, default=True)
    randomize_options = Column(Boolean, default=True)
    fullscreen_required = Column(Boolean, default=True)
    auto_submit_enabled = Column(Boolean, default=False)
    max_violations = Column(Integer, default=3)
    quiz_code = Column(String(80), nullable=False, unique=True)
    is_active = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    questions = relationship('Question', back_populates='quiz', cascade='all, delete-orphan')
