# quizzer
#frontend
# Frontend Detailed Architecture (Production-Level)

You added an important feature:

✅ Randomized question order per participant
✅ Randomized options order per participant
✅ Same participant should always see same shuffled order during that attempt

That is the correct professional approach.

---

# Core Frontend Architecture

```text id="w9wghp"
React + Vite + Tailwind
        │
        ├── Public Routes
        │     ├── Login
        │     ├── Register
        │     └── Join Quiz
        │
        ├── Admin System
        │     ├── Quiz Builder
        │     ├── Question Upload
        │     ├── Deploy System
        │     ├── Analytics
        │     └── Result Export
        │
        ├── Participant System
        │     ├── Instructions
        │     ├── Attempt Quiz
        │     ├── Timer Engine
        │     ├── Randomizer Engine
        │     └── Submission
        │
        └── Security Layer
              ├── Fullscreen
              ├── Tab Detection
              ├── Clipboard Blocking
              └── Autosave
```

---

# IMPORTANT RANDOMIZATION DESIGN

This is VERY important.

Never randomize only in frontend blindly.

Correct flow:

```text id="7c5q3v"
Participant starts quiz
        ↓
Backend creates ATTEMPT SESSION
        ↓
Backend randomizes:
    - question order
    - option order
        ↓
Backend stores randomized mapping
        ↓
Frontend receives randomized set
        ↓
Participant sees unique order
```

---

# Why This Is Necessary

If frontend randomizes:

* refresh changes order
* answers mismatch
* cheating possible

Backend-based persistent randomization fixes all.

---

# Database Addition Needed

## quiz_attempts

```text id="z55gag"
attempt_id
participant_id
quiz_id
question_order_json
option_order_json
started_at
```

Example:

```json id="j88zw5"
{
  "question_order": [5, 2, 8, 1],
  "option_order": {
    "5": ["C", "A", "D", "B"],
    "2": ["B", "D", "A", "C"]
  }
}
```

Frontend only renders this order.

---

# Complete Frontend Module Explanation

# 1. Authentication Module

## Features

### Admin Login

* email/password

### Participant Join

* roll number
* name
* email

---

# Frontend Files

```text id="v0r6sm"
auth/
├── Login.jsx
├── Register.jsx
├── JoinQuiz.jsx
├── AuthContext.jsx
├── useAuth.js
└── ProtectedRoute.jsx
```

---

# 2. Admin Dashboard Module

## Dashboard Features

### Statistics

* total quizzes
* active quizzes
* total participants
* average score

### Recent Activity

* recent quizzes
* recent submissions

---

# Dashboard UI Sections

```text id="2q68za"
Sidebar
   ├── Dashboard
   ├── Create Quiz
   ├── Upload Questions
   ├── Deploy Quiz
   ├── Results
   └── Settings
```

---

# 3. Quiz Builder Module

This is the most important module.

---

# Quiz Creation Form

## Admin Inputs

| Field               | Type     |
| ------------------- | -------- |
| Quiz Title          | text     |
| Description         | textarea |
| Duration            | number   |
| Negative Marks      | checkbox |
| Randomize Questions | toggle   |
| Randomize Options   | toggle   |
| Fullscreen Required | toggle   |
| Auto Submit         | toggle   |

---

# Question Creation Types

## Single Correct

```text id="0t6b4w"
Question
A
B
C
D

Correct: B
```

---

## Multiple Correct

```text id="sx5m4q"
Question
A
B
C
D

Correct:
A
D
```

---

# Question Builder Components

```text id="vxk7l6"
QuestionForm.jsx
MCQOption.jsx
MultiSelectOption.jsx
QuestionPreview.jsx
```

---

# 4. PDF/DOC Upload System

---

# Upload Flow

```text id="c54dfo"
Admin Uploads File
       ↓
Frontend sends FormData
       ↓
Backend extracts text
       ↓
Backend returns parsed structure
       ↓
Frontend shows editable preview
       ↓
Admin confirms
       ↓
Questions saved
```

---

# Upload UI

```text id="skwl2w"
Drag & Drop Zone
OR
Browse File
```

Supported:

* PDF
* DOCX
* TXT

---

# 5. Quiz Attempt System

This is the most critical frontend.

---

# Attempt Page Layout

```text id="jlwm8v"
------------------------------------------------
| Timer | Question Navigator | Violations |
------------------------------------------------

Question Area

Options Area

Previous | Next | Submit
```

---

# Attempt Flow

```text id="7bx3uv"
Fetch randomized attempt
        ↓
Render current question
        ↓
Start timer
        ↓
Autosave response
        ↓
Move next
        ↓
Final submit
```

---

# 6. Randomization Engine

## Question Randomization

Backend sends:

```json id="5hbd8j"
[
  {
    "question_id": 12
  },
  {
    "question_id": 7
  }
]
```

Participant A:

```text id="7r96nr"
12 → 7 → 2 → 5
```

Participant B:

```text id="dktr9o"
2 → 12 → 5 → 7
```

---

# Option Randomization

Original:

```text id="1m5clu"
A. Python
B. Snake
C. OS
D. Browser
```

Participant A sees:

```text id="l6hvgv"
A. Snake
B. Browser
C. Python
D. OS
```

Participant B sees different order.

---

# VERY IMPORTANT

Correct answer mapping must remain valid after shuffle.

Backend must internally remap correct answers.

---

# 7. Timer Engine

Two timer modes:

## Quiz-level Timer

```text id="zabph1"
30 mins entire quiz
```

---

## Question-level Timer

```text id="jlwmw4"
Q1 → 30 sec
Q2 → 45 sec
```

---

# Timer Features

* auto next
* auto submit
* persistent timer after refresh

---

# 8. Autosave System

Every interaction:

* save answer
* save timestamp

Debounced:

```text id="x2f7p9"
500ms save delay
```

---

# 9. Proctoring System

# Frontend Restrictions

## Disable

* copy
* paste
* right click
* text selection

---

# Detection

## Detect

* tab switching
* window blur
* fullscreen exit

---

# Violation System

```text id="f4y2dk"
Violation 1 → warning
Violation 2 → severe warning
Violation 3 → auto submit
```

---

# 10. Question Navigator

## Features

Question palette:

| Status     | Color  |
| ---------- | ------ |
| unanswered | gray   |
| answered   | green  |
| current    | blue   |
| flagged    | yellow |

---

# 11. Result System

## Admin Results Dashboard

| Roll | Name | Email | Score |
| ---- | ---- | ----- | ----- |

---

# Filters

* sort by roll
* highest marks
* submission time

---

# Excel Export

Frontend triggers:

```text id="8w6e6y"
GET /results/export/:quizId
```

Download:

```text id="gbo57g"
results.xlsx
```

---

# 12. QR Deployment System

Admin clicks:

```text id="3m74e8"
Generate QR
```

Frontend generates:

```text id="r0m9gc"
https://domain.com/quiz/abc123
```

QR displayed instantly.

---

# 13. Security Architecture

---

# Token Storage

Use:

```text id="lmstf2"
httpOnly cookies
```

If not:

```text id="yj5qpe"
localStorage + refresh token
```

---

# Protected Routes

```text id="jjlwm2"
Admin only
Participant only
Public routes
```

---

# 14. UI Design System

---

# Colors

| Purpose | Color  |
| ------- | ------ |
| Primary | Blue   |
| Success | Green  |
| Warning | Yellow |
| Danger  | Red    |

---

# Layout

* Clean dashboard
* Sticky timer
* Mobile responsive
* Fullscreen quiz mode

---

# 15. State Management

---

# Contexts

```text id="jlwmfd"
AuthContext
QuizContext
TimerContext
ProctorContext
```

---

# 16. API Layer Structure

```text id="3q4vb9"
api/
├── authApi.js
├── quizApi.js
├── attemptApi.js
├── resultApi.js
└── uploadApi.js
```

---

# 17. Deployment Ready Features

## Environment Variables

```text id="jq9mse"
VITE_API_BASE_URL=
```

---

# Build Ready

```bash id="jx43ua"
npm run build
```

---

# 18. Final Professional Features

Your frontend now supports:

✅ Multi-role system
✅ Quiz deployment
✅ PDF/DOC uploads
✅ Randomized questions/options
✅ Persistent answer mapping
✅ Timers
✅ Autosave
✅ Proctoring basics
✅ Excel export
✅ QR deployment
✅ Responsive UI
✅ Deploy-ready architecture

---

# MOST IMPORTANT IMPLEMENTATION RULE

## Randomization MUST BE:

| Feature                  | Place    |
| ------------------------ | -------- |
| question shuffle         | backend  |
| option shuffle           | backend  |
| rendering shuffled order | frontend |
| save participant mapping | backend  |

This avoids:

* answer mismatch
* refresh issues
* cheating loopholes
* scoring errors

Your architecture is now close to real professional assessment platforms.
