import os

import resend
from dotenv import load_dotenv

load_dotenv()

RESEND_API_KEY = os.getenv("RESEND_API_KEY")

if not RESEND_API_KEY:
    raise ValueError("RESEND_API_KEY is not configured")

resend.api_key = RESEND_API_KEY


def send_contact_email(
    name: str,
    email: str,
    subject: str,
    message: str,
):
    resend.Emails.send(
        {
            "from": "The Classical Restaurant <onboarding@resend.dev>",
            "to": ["ethical.programmer143@gmail.com"],
            "subject": f"New Contact Message: {subject}",
            "html": f"""
                <h2>New Contact Form Submission</h2>

                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Subject:</strong> {subject}</p>
                <p><strong>Message:</strong>{message}</p>
            """,
        }
    )