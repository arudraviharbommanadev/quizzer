import re
from typing import List
from app.parsers.question_formatter import format_question_block

def parse_text(content: str) -> List[dict]:
    lines = [line.strip() for line in content.splitlines() if line.strip()]
    questions = []
    block = []

    for line in lines:
        if re.match(r'^\\d+\\.', line):
            if block:
                question = format_question_block(block)
                if question:
                    questions.append(question)
                block = [line]
            else:
                block.append(line)
        else:
            block.append(line)

    if block:
        question = format_question_block(block)
        if question:
            questions.append(question)
    return questions
