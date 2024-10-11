from app.repository import listing_repository
from app.schema.listing_schema import ListCreate, ListingUpdate

# Function to create a new user
def create_listing(db, list: ListCreate):
    return listing_repository.create_user(db, list)

# Function to retrieve a user by user_id
def get_listing(db, list_id: str):
    return listing_repository.get_user_by_list_id(db, list_id)

# Function to update a user by user_id
def update_listing(db, list_id: str, list_data: ListingUpdate):
    return listing_repository.update_user(db, list_id, list_data)

# Function to delete a user by user_id
def delete_listing(db, list_id: str):
    return listing_repository.delete_user(db, list_id)

