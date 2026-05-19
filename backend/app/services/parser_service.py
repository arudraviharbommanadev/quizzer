from app.parsers.pdf_parser import parse_pdf
from app.parsers.docx_parser import parse_docx
from app.parsers.text_parser import parse_text

class ParserService:
    @staticmethod
    def parse_pdf(content: bytes):
        return parse_pdf(content)

    @staticmethod
    def parse_docx(content: bytes):
        return parse_docx(content)

    @staticmethod
    def parse_text(content: str):
        return parse_text(content)
