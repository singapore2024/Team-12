from app.schema.listing_schema import ListCreate, ListingUpdate
from bson.objectid import ObjectId

def get_next_listing_id(db):
    counter = db.counters.find_one_and_update(
        {"_id": "listing_id"},
        {"$inc": {"sequence_value": 1}},
        upsert=True,
        return_document=True
    )
    return counter["sequence_value"]

def create_listing(db, list: ListCreate):
    list_dict = list.dict()
    
    list_id = get_next_listing_id(db)
    
    list_dict["listing_id"] = list_id
    
    result = db.users.insert_one(list_dict)
    list_dict["_id"] = result.inserted_id
    return list_dict

def get_user_by_list_id(db, list_id: str):
    return db.users.find_one({"listing_id": list_id})

def get_user_by_email(db, email_address: str):
    return db.users.find_one({"email_address": email_address})

def update_listing(db, list_id: int, list_data: ListingUpdate):
    result = db.users.update_one(
        {"listing_id": list_id},
        {"$set": list_data.dict(exclude_unset=True)}
    )
    if result.matched_count:
        return get_user_by_list_id(db, list_id)
    return None

def delete_listing(db, list_id: str):
    result = db.users.delete_one({"listing_id": list_id})
    return result.deleted_count > 0