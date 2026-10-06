from fastapi import FastAPI
from sqlalchemy import text
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine
from app.api.routes.contact import router as contact_router

from app.core.database import Base, engine
from app.models.contact import Contact

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="The Classical Restaurant API",
    description="Backend API for The Classical Restaurant",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://the-classical-restaurant.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router)

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "message": "The Classical Restaurant API is running",
    }


@app.get("/api/health/database")
def database_health_check():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "status": "ok",
        "message": "Database connection is working",
    }