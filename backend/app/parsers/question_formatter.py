import re
from typing import Dict, List, Optional

OPTION_PATTERN = re.compile(r'^[A-D]\\.\\s*(.*)$', re.IGNORECASE)
ANSWER_PATTERN = re.compile(r'^Answer\\s*[:\\-]\\s*([A-D](?:,\\s*[A-D])*)', re.IGNORECASE)

def format_question_block(block: List[str]) -> Optional[Dict]:
    if not block:
        return None
    question_text = ''
    options = {}
    correct_answers = []
    for line in block:
        option_match = OPTION_PATTERN.match(line)
        answer_match = ANSWER_PATTERN.match(line)
        if option_match:
            key = line[0].upper()
            options[key] = option_match.group(1).strip()
        elif answer_match:
            values = answer_match.group(1)
            correct_answers = [value.strip().upper() for value in values.split(',')]
        elif not question_text:
            question_text = line
    if len(options) < 4 or not correct_answers:
        return None
    return {
        'question_text': question_text,
        'option_a': options.get('A', ''),
        'option_b': options.get('B', ''),
        'option_c': options.get('C', ''),
        'option_d': options.get('D', ''),
        'correct_answers': correct_answers,
        'question_type': 'multiple' if len(correct_answers) > 1 else 'single',
        'marks': 1,
        'negative_marks': 0,
        'question_timer': 0,
    }
