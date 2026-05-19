from pydantic import BaseModel

class ResultSummary(BaseModel):
    quiz_id: int
    participant_id: int
    score: int
    status: str

class ResultExport(BaseModel):
    id: int
    quiz_id: int
    participant_id: int
    score: int
    status: str

    class Config:
        orm_mode = True
