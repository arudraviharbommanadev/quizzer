from pydantic import BaseModel

class QuestionResponse(BaseModel):
    id: int
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    question_type: str
    marks: int
    negative_marks: int
    question_timer: int

    class Config:
        orm_mode = True
