from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
import logging

logger = logging.getLogger('quizzer.backend')

class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        logger.info(f'Received {request.method} request to {request.url.path}')
        response = await call_next(request)
        logger.info(f'Responded with {response.status_code}')
        return response
