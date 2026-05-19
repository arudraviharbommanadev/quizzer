# Quizzer Backend

This backend is built with FastAPI, SQLAlchemy, and MySQL for a multi-role quiz platform.

## Run locally

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Create a MySQL database and update `.env`.

3. Start the server:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
