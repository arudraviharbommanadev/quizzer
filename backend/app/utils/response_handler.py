from fastapi import HTTPException

def validation_error(detail: str):
    raise HTTPException(status_code=422, detail=detail)
