from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import Base, engine
from app.routes.auth_routes import router as auth_router
from app.routes.quiz_routes import router as quiz_router
from app.routes.attempt_routes import router as attempt_router
from app.routes.upload_routes import router as upload_router
from app.routes.result_routes import router as result_router
from app.routes.violation_routes import router as violation_router
from app.middleware.logging_middleware import LoggingMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title='Quizzer Backend',
    version='1.0.0',
    docs_url='/docs',
    redoc_url='/redoc',
)

app.add_middleware(LoggingMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(auth_router)
app.include_router(quiz_router)
app.include_router(attempt_router)
app.include_router(upload_router)
app.include_router(result_router)
app.include_router(violation_router)
