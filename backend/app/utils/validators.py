import re

EMAIL_PATTERN = re.compile(r'^\\S+@\\S+\\.\\S+$')

def is_valid_email(email: str) -> bool:
    return bool(EMAIL_PATTERN.match(email))
