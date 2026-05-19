import os
from pydantic import BaseSettings


def get_env(name: str, default: str) -> str:
    return os.getenv(name, default)


class Settings(BaseSettings):
    MYSQL_HOST: str = get_env('MYSQL_HOST', '127.0.0.1')
    MYSQL_PORT: int = int(get_env('MYSQL_PORT', '3306'))
    MYSQL_USER: str = get_env('MYSQL_USER', 'root')
    MYSQL_PASSWORD: str = get_env('MYSQL_PASSWORD', 'secret')
    MYSQL_DATABASE: str = get_env('MYSQL_DATABASE', 'quizzer')
    JWT_SECRET_KEY: str = get_env('JWT_SECRET_KEY', 'supersecretkey')
    JWT_ALGORITHM: str = get_env('JWT_ALGORITHM', 'HS256')
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(get_env('ACCESS_TOKEN_EXPIRE_MINUTES', '60'))

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> str:
        return (
            f"mysql+pymysql://{self.MYSQL_USER}:{self.MYSQL_PASSWORD}@"
            f"{self.MYSQL_HOST}:{self.MYSQL_PORT}/{self.MYSQL_DATABASE}?charset=utf8mb4"
        )


settings = Settings()
