from starlette.middleware.base import BaseHTTPMiddleware
from fastapi import Request

class RoleMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        return await call_next(request)
