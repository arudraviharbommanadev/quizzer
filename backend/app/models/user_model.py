from datetime import datetime
from sqlalchemy import Column, DateTime, Integer, String, Text
from app.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(200), unique=True, nullable=False, index=True)
    hashed_password = Column(Text, nullable=False)
    role = Column(String(50), nullable=False, default='participant')
    created_at = Column(DateTime, default=datetime.utcnow)
