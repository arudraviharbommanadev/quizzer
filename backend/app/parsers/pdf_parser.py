import io
try:
    import pdfplumber
except ImportError:
    pdfplumber = None

from app.parsers.text_parser import parse_text

def parse_pdf(content: bytes):
    if pdfplumber is None:
        return []
    with pdfplumber.open(io.BytesIO(content)) as pdf:
        text = '\n'.join(page.extract_text() or '' for page in pdf.pages)
    return parse_text(text)
