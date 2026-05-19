from pydantic import BaseModel
from typing import Dict, List

class StartAttemptResponse(BaseModel):
    attempt_id: int
    quiz_id: int
    question_order: List[int]
    option_order: Dict[str, List[str]]
    remaining_time_seconds: int
    quiz_code: str

class AnswerPayload(BaseModel):
    question_id: int
    selected_answers: List[str]

class SubmitPayload(BaseModel):
    answers: List[AnswerPayload]
