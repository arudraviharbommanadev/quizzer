from pydantic import BaseModel
from typing import List, Optional

class QuestionPayload(BaseModel):
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    correct_answers: List[str]
    question_type: str = 'single'
    marks: int = 1
    negative_marks: int = 0
    question_timer: int = 0

class QuizCreate(BaseModel):
    title: str
    description: Optional[str] = None
    duration_minutes: int = 15
    negative_marking_enabled: bool = False
    randomize_questions: bool = True
    randomize_options: bool = True
    fullscreen_required: bool = True
    auto_submit_enabled: bool = False
    max_violations: int = 3
    questions: List[QuestionPayload]

class QuizRead(BaseModel):
    id: int
    title: str
    description: Optional[str]
    duration_minutes: int
    randomize_questions: bool
    randomize_options: bool
    fullscreen_required: bool
    auto_submit_enabled: bool
    max_violations: int
    quiz_code: str
    is_active: bool

    class Config:
        orm_mode = True
