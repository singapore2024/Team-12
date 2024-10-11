from app.schema.user_schema import UserCreate, UserUpdate
from bson.objectid import ObjectId

def get_next_user_id(db):
    counter = db.counters.find_one_and_update(
        {"_id": "user_id"},
        {"$inc": {"sequence_value": 1}},
        upsert=True,
        return_document=True
    )
    return counter["sequence_value"]

def create_user(db, user: UserCreate):
    user_dict = user.dict()
    
    user_id = get_next_user_id(db)
    
    user_dict["user_id"] = user_id
    
    result = db.users.insert_one(user_dict)
    user_dict["_id"] = result.inserted_id
    return user_dict

def get_user_by_user_id(db, user_id: int):
    return db.users.find_one({"user_id": user_id})

def get_user_by_email(db, email_address: str):
    return db.users.find_one({"email_address": email_address})

def update_user(db, user_id: int, user_data: UserUpdate):
    result = db.users.update_one(
        {"user_id": user_id},
        {"$set": user_data.dict(exclude_unset=True)}
    )
    if result.matched_count:
        return get_user_by_user_id(db, user_id)
    return None

def delete_user(db, user_id: int):
    result = db.users.delete_one({"user_id": user_id})
    return result.deleted_count > 0
