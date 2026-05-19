from pydantic import BaseModel
from typing import List

class AnswerCreate(BaseModel):
    question_id: int
    selected_answers: List[str]

class AnswerRead(BaseModel):
    id: int
    question_id: int
    selected_answers: List[str]
    marks_obtained: int
    is_correct: bool

    class Config:
        orm_mode = True
