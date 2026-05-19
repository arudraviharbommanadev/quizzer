import json
import os
import random
import string

def generate_quiz_code(length: int = 8) -> str:
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))


def serialize_json(data) -> str:
    return json.dumps(data)


def ensure_directory(path: str) -> str:
    os.makedirs(path, exist_ok=True)
    return path
