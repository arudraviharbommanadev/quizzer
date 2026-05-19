from app.services.parser_service import ParserService

class UploadService:
    @staticmethod
    def parse_file(filename: str, content: bytes):
        lower = filename.lower()
        if lower.endswith('.pdf'):
            return ParserService.parse_pdf(content)
        if lower.endswith('.docx'):
            return ParserService.parse_docx(content)
        if lower.endswith('.txt'):
            return ParserService.parse_text(content.decode('utf-8', errors='ignore'))
        return []
