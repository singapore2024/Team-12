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

        # Extract the response message from the API's response
        response_message = completion.choices[0].message['content']['text']
        return {"response": response_message}
    except Exception as e:
        # Return a 400 error if something goes wrong
        raise HTTPException(status_code=400, detail=f"Error: {str(e)}")

