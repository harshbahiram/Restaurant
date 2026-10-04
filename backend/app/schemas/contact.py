from datetime import datetime

from pydantic import BaseModel, EmailStr, ConfigDict


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)