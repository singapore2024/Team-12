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


from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from groq import Groq
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Initialize the Groq client with the API key
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Create a FastAPI instance
app = FastAPI()

# Define a Pydantic model for the request body
class MessageRequest(BaseModel):
    message: str

# Define an endpoint for receiving user input and generating responses
@app.post("/get-plant-advice")
async def get_plant_advice(request: MessageRequest):
    try:
        # Create the chat completion request using Groq API
        completion = client.chat.completions.create(
            model="llama-3.2-11b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": request.message
                        }
                    ]
                }
            ],
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=False,
            stop=None,
        )
        # print(completion)
        # Extract the response message from the API's response
        response_message = completion.choices[0].message.content
        
        
        return {"response": response_message}
    except Exception as e:
        print(e)
        
@app.post("/get-plant-advice")
async def get_plant_advice(request: MessageRequest):
    try:
        # Create the chat completion request using Groq API
        completion = client.chat.completions.create(
            model="llama-3.2-11b-vision-preview",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": request.message
                        }
                    ]
                }
            ],
            temperature=1,
            max_tokens=1024,
            top_p=1,
            stream=False,
            stop=None,
        )

        # Correctly access the content of the response message
        # Use dot notation instead of square brackets
        response_message = completion.choices[0].message.content['text']
        return {"response": response_message}
    except Exception as e:
        print(e)
        # Return a 400 error if something goes wrong
        # raise HTTPException(status_code=400, detail=f"Error: {str(e)}")

# Run the FastAPI app using Uvicorn if this script is run directly
