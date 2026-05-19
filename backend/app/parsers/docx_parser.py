import io
try:
    import docx
except ImportError:
    docx = None

from app.parsers.text_parser import parse_text

def parse_docx(content: bytes):
    if docx is None:
        return []
    document = docx.Document(io.BytesIO(content))
    text = '\n'.join(paragraph.text for paragraph in document.paragraphs)
    return parse_text(text)
