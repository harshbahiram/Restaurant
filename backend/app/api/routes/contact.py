from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from app.core.limiter import limiter

from app.core.database import get_db
from app.models.contact import Contact
from app.schemas.contact import ContactCreate, ContactResponse

from app.services.email import send_contact_email

router = APIRouter(
    prefix="/api/contact",
    tags=["Contact"],
)

@router.post(
    "",
    response_model=ContactResponse,
    status_code=201,
)
@limiter.limit("5/minute")
def create_contact(
    request: Request,
    contact_data: ContactCreate,
    db: Session = Depends(get_db),
):
    contact = Contact(
        name=contact_data.name,
        email=contact_data.email,
        subject=contact_data.subject,
        message=contact_data.message,
    )

    db.add(contact)
    db.commit()
    db.refresh(contact)

    send_contact_email(
        name=contact.name,
        email=contact.email,
        subject=contact.subject,
        message=contact.message,
    )

    return contact