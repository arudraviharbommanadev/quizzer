# Complete Detailed Backend Architecture Prompt

*(Production-Level Backend Blueprint for Quiz Builder & Deployment Platform)*

---

# Project Overview

Build a scalable backend system for a multi-role online quiz platform using:

* Python
* FastAPI
* MySQL
* SQLAlchemy ORM
* JWT Authentication

The backend must support:

* Admin-based quiz creation
* Participant quiz attempts
* PDF/DOCX question extraction
* Randomized question and option ordering
* Timed quizzes
* Proctoring event tracking
* Auto-save responses
* Secure result calculation
* Excel export
* QR/link-based deployment
* Persistent attempt sessions

The backend should be production-ready, modular, scalable, and deployable without requiring major restructuring later.

---

# Overall Backend Architecture

```text id="njlwmc"
Client (React Frontend)
        ↓
FastAPI Backend
        ↓
Service Layer
        ↓
Business Logic
        ↓
SQLAlchemy ORM
        ↓
MySQL Database
```

---

# Core Backend Principles

The backend must:

* Never trust frontend answer validation
* Handle all scoring server-side
* Persist randomized mappings for every participant
* Prevent answer mismatch after randomization
* Support auto-save and recovery after refresh
* Prevent duplicate quiz attempts when configured
* Handle timers securely even if frontend is manipulated
* Store every participant action in structured form
* Generate downloadable Excel reports
* Scale cleanly for future AI/proctoring upgrades

---

# Backend Folder Structure

```text id="phivf8"
backend/
│
├── app/
│   │
│   ├── main.py
│   ├── config.py
│   ├── database.py
│   ├── dependencies.py
│   │
│   ├── auth/
│   │   ├── jwt_handler.py
│   │   ├── password_handler.py
│   │   ├── auth_routes.py
│   │   └── auth_utils.py
│   │
│   ├── models/
│   │   ├── user_model.py
│   │   ├── quiz_model.py
│   │   ├── question_model.py
│   │   ├── attempt_model.py
│   │   ├── answer_model.py
│   │   ├── violation_model.py
│   │   └── result_model.py
│   │
│   ├── schemas/
│   │   ├── auth_schema.py
│   │   ├── quiz_schema.py
│   │   ├── question_schema.py
│   │   ├── attempt_schema.py
│   │   ├── answer_schema.py
│   │   └── result_schema.py
│   │
│   ├── routes/
│   │   ├── auth_routes.py
│   │   ├── quiz_routes.py
│   │   ├── question_routes.py
│   │   ├── attempt_routes.py
│   │   ├── upload_routes.py
│   │   ├── result_routes.py
│   │   └── violation_routes.py
│   │
│   ├── services/
│   │   ├── auth_service.py
│   │   ├── quiz_service.py
│   │   ├── randomizer_service.py
│   │   ├── timer_service.py
│   │   ├── scoring_service.py
│   │   ├── upload_service.py
│   │   ├── parser_service.py
│   │   ├── result_service.py
│   │   ├── excel_service.py
│   │   └── proctor_service.py
│   │
│   ├── parsers/
│   │   ├── pdf_parser.py
│   │   ├── docx_parser.py
│   │   ├── text_parser.py
│   │   └── question_formatter.py
│   │
│   ├── middleware/
│   │   ├── auth_middleware.py
│   │   ├── role_middleware.py
│   │   └── logging_middleware.py
│   │
│   ├── utils/
│   │   ├── constants.py
│   │   ├── validators.py
│   │   ├── helpers.py
│   │   ├── timer_utils.py
│   │   └── response_handler.py
│   │
│   └── exports/
│       └── generated_excels/
│
├── requirements.txt
├── .env
├── Dockerfile
└── README.md
```

---

# Authentication System

The backend must support two roles:

## Admin

Can:

* create quizzes
* edit quizzes
* deploy quizzes
* export results

## Participant

Can:

* join quizzes
* attempt quizzes
* submit answers

---

# Authentication Features

## Admin Authentication

Admins authenticate using:

* email
* password

Passwords must:

* never be stored directly
* always be bcrypt hashed

---

# JWT Authentication

Backend generates:

* access token
* refresh token

Every protected route must validate:

* token authenticity
* expiration
* user role

---

# Participant Join Flow

Participants may:

* register permanently
  OR
* join directly using quiz code

Collected participant data:

* roll number
* full name
* email

---

# Database Design

---

# users Table

Stores all platform users.

Fields:

* id
* name
* email
* hashed_password
* role
* created_at

---

# quizzes Table

Stores quiz metadata.

Fields:

* id
* title
* description
* created_by
* total_questions
* duration_minutes
* negative_marking_enabled
* randomize_questions
* randomize_options
* fullscreen_required
* auto_submit_enabled
* max_violations
* quiz_code
* is_active
* created_at

---

# questions Table

Stores every question.

Fields:

* id
* quiz_id
* question_text
* option_a
* option_b
* option_c
* option_d
* correct_answers_json
* question_type
* marks
* negative_marks
* question_timer
* created_at

---

# attempts Table

Very important table.

Each participant gets exactly one attempt session.

Stores:

* participant identity
* randomized mappings
* timer state
* submission state

Fields:

* id
* participant_id
* quiz_id
* started_at
* submitted_at
* status
* question_order_json
* option_order_json
* remaining_time_seconds
* score
* total_violations

---

# answers Table

Stores participant answers.

Fields:

* id
* attempt_id
* question_id
* selected_answers_json
* marks_obtained
* is_correct
* answered_at

---

# violations Table

Stores proctoring violations.

Fields:

* id
* attempt_id
* violation_type
* timestamp
* metadata_json

Violation examples:

* tab_switch
* fullscreen_exit
* copy_attempt
* paste_attempt

---

# Quiz Creation Logic

Admin can create quizzes using:

## Method 1 — Manual Creation

Admin manually enters:

* questions
* options
* answers
* marks
* timers

---

## Method 2 — PDF Upload

Admin uploads PDF.

Backend:

1. extracts text
2. detects questions
3. detects options
4. detects answers
5. converts into structured format
6. returns editable preview

---

## Method 3 — DOCX Upload

Same pipeline as PDF.

---

# Parsing Engine

The parser system must:

* identify question boundaries
* detect options
* detect answers
* support multi-correct questions
* ignore malformed blocks safely

---

# Example Supported Pattern

```text id="p6jlwm"
1. What is Python?
A. Snake
B. Programming Language
C. Browser
D. Operating System

Answer: B
```

---

# Randomization System

This is one of the most critical backend modules.

---

# Backend-Based Randomization

When participant starts quiz:

Backend:

1. fetches all questions
2. shuffles question order
3. shuffles option order
4. remaps correct answers
5. stores mappings permanently

Frontend NEVER performs actual randomization logic.

---

# Why Persistent Mapping Matters

Without persistence:

* refresh changes order
* answer mismatch occurs
* scoring becomes invalid
* cheating loopholes appear

---

# Example Stored Mapping

```json id="4p1yl0"
{
  "question_order": [8, 2, 5, 1],
  "option_order": {
    "8": ["C", "A", "D", "B"],
    "2": ["D", "A", "B", "C"]
  }
}
```

---

# Quiz Attempt Engine

When participant clicks “Start Quiz”:

Backend:

* validates quiz
* checks active state
* checks attempt eligibility
* creates attempt session
* initializes timer
* generates randomized order
* returns attempt payload

---

# Attempt Recovery

If participant refreshes:

* backend returns same randomized order
* same timer state
* previously saved answers

No participant should lose progress accidentally.

---

# Timer Engine

Backend must securely track timers.

Never trust frontend timers completely.

---

# Timer Types

## Quiz-Level Timer

Entire quiz has:

* fixed duration

Example:

* 30 minutes

---

## Question-Level Timer

Each question has:

* independent timer

Example:

* Question 1 → 30 sec
* Question 2 → 45 sec

---

# Timer Security

Backend validates:

* total elapsed time
* submission deadline
* expired sessions

Even if frontend timer manipulated:
backend must reject invalid submissions.

---

# Auto-Save System

Every answer interaction:

* saved instantly
* timestamped

Benefits:

* refresh recovery
* crash recovery
* accidental close recovery

---

# Scoring System

All scoring must happen server-side.

Never calculate final marks in frontend.

---

# Single Correct Logic

Participant gets:

* full marks if exact match
* negative marks if wrong

---

# Multiple Correct Logic

System may support:

* exact-match scoring
  OR
* partial marking later

Initial version:

* exact match only

---

# Result Calculation

Backend computes:

* total score
* correct count
* wrong count
* unanswered count
* percentage

Stored permanently.

---

# Proctoring Event System

Frontend sends violation events.

Backend stores:

* event type
* timestamp
* attempt reference

---

# Example Violations

* tab switch
* fullscreen exit
* multiple window blur
* right click
* copy attempt

---

# Violation Rules

Admin configurable:

* warning thresholds
* auto-submit threshold

Example:

* 3 violations → auto submit

---

# Quiz Deployment System

Each quiz generates:

* unique quiz code
* public participation link

Example:

```text id="tl9sz8"
/quiz/ABCD1234
```

---

# QR Code Integration

Backend generates QR-compatible deployment URL.

Frontend renders QR image.

---

# Result Dashboard APIs

Admin can:

* fetch all results
* sort by roll number
* filter by score
* search participant

---

# Excel Export System

Backend generates Excel using:

* pandas
* openpyxl

---

# Excel Output Requirements

Must include:

* roll number
* participant name
* email
* score
* submission time

Must be sorted:

* ascending roll number

---

# API Architecture

---

# Auth APIs

```text id="jlwmns"
POST /auth/register
POST /auth/login
POST /auth/refresh
GET /auth/me
```

---

# Quiz APIs

```text id="cljwr0"
POST /quiz/create
PUT /quiz/update/{id}
DELETE /quiz/delete/{id}
GET /quiz/{id}
GET /quiz/all
```

---

# Upload APIs

```text id="cf4d8h"
POST /upload/pdf
POST /upload/docx
POST /upload/text
```

---

# Attempt APIs

```text id="q6zjlwm"
POST /attempt/start
POST /attempt/save-answer
POST /attempt/submit
GET /attempt/recover/{id}
```

---

# Result APIs

```text id="4dbrwl"
GET /results/{quiz_id}
GET /results/export/{quiz_id}
```

---

# Proctor APIs

```text id="6z1hkh"
POST /violations/report
```

---

# Security Features

Backend must:

* validate every request
* sanitize uploaded content
* limit upload sizes
* prevent duplicate attempts
* enforce role-based access

---

# Deployment Requirements

Backend should support:

* Docker deployment
* Railway deployment
* Render deployment
* VPS deployment

---

# Required Python Libraries

```text id="qjlwm3"
fastapi
uvicorn
sqlalchemy
pymysql
python-jose
passlib
bcrypt
pydantic
python-multipart
pdfplumber
python-docx
pandas
openpyxl
qrcode
```

---

# Future Upgrade Compatibility

Backend structure should easily support:

* AI question parsing
* webcam monitoring
* face detection
* live analytics
* leaderboard systems
* section-wise quizzes
* coding questions
* adaptive testing

---

# Final Backend Goal

The backend should behave like a real professional assessment platform backend where:

* every participant receives unique randomized order
* scoring remains accurate
* answers remain persistent
* quiz attempts recover safely
* timers remain secure
* admins can deploy and analyze quizzes efficiently
* system remains scalable for future advanced features
