# config.py
from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    SECRET_KEY: str = "917b3deb7b28acf7214bb6682c85e4464557893998ec3a11dc0d5dc4bdba0c0b"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    DATABASE_URL: str = "sqlite:///./sql_app.db"
    SMTP_HOST: str = "smtp.gmail.com"
    SMTP_PORT: int = 587
    SMTP_USER: str = "ahmadimujtaba987@gmail.com"
    SMTP_PASSWORD: str = "dzrc ayjx ntej gpca"
    ADMIN_EMAIL: str = "ahmadimujtaba987@gmail.com"
    
    class Config:
        env_file = ".env"

@lru_cache()
def get_settings():
    return Settings()

settings = get_settings()