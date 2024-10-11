# FastAPI template

## Setup 

Create virtual environement

```bash
python -m venv venv
```

Activate environment
```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run application

```bash
uvicorn app.main:app --reload
```

Access appoication at localhost:8000 and /docs for Swagger UI endpoints
