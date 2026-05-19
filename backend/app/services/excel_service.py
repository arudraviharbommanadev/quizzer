import os
from openpyxl import Workbook
from app.utils.helpers import ensure_directory

class ExcelService:
    @staticmethod
    def export_results(data: list[dict], filename: str):
        output_dir = ensure_directory('backend/exports/generated_excels')
        filepath = os.path.join(output_dir, f'{filename}.xlsx')
        workbook = Workbook()
        sheet = workbook.active
        sheet.append(['Participant ID', 'Quiz ID', 'Score', 'Status'])
        for row in data:
            sheet.append([row.get('participant_id'), row.get('quiz_id'), row.get('score'), row.get('status')])
        workbook.save(filepath)
        return filepath
