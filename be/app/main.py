from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.controller import user_controller

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers here
app.include_router(user_controller.router)

@app.get("/")
def read_root():
    return {"message": "This is our app!"}
