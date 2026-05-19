import random
from typing import Dict, List
from app.models.question_model import Question

class RandomizerService:
    @staticmethod
    def build_question_order(question_ids: List[int], shuffle: bool) -> List[int]:
        order = list(question_ids)
        if shuffle:
            random.shuffle(order)
        return order

    @staticmethod
    def build_option_order(questions: list[Question], shuffle: bool) -> Dict[str, List[str]]:
        mapping = {}
        for question in questions:
            options = ['A', 'B', 'C', 'D']
            if shuffle:
                random.shuffle(options)
            mapping[str(question.id)] = options
        return mapping
