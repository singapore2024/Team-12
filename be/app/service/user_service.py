from app.repository import user_repository
from app.schema.user_schema import UserCreate, UserUpdate, UserLogin

# Function to create a new user
def create_user(db, user: UserCreate):
    return user_repository.create_user(db, user)

# Function to retrieve a user by user_id
def get_user(db, user_id: int):
    return user_repository.get_user_by_user_id(db, user_id)

# Function to retrieve a user by email address
def get_user_by_email(db, email_address: str):
    return user_repository.get_user_by_email(db, email_address)

# Function to update a user by user_id
def update_user(db, user_id: int, user_data: UserUpdate):
    return user_repository.update_user(db, user_id, user_data)

# Function to delete a user by user_id
def delete_user(db, user_id: int):
    return user_repository.delete_user(db, user_id)
