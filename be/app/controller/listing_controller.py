from fastapi import APIRouter, Depends, HTTPException
from app.schema.listing_schema import ListCreate, ListOut, ListingUpdateUpdate
from app.service import listing_service
from app.utils.listing_database import get_db

router = APIRouter(
    prefix="/listing",
    tags=["listing"]
)

@router.post("/", response_model=ListOut)
async def create_listing(listing: ListCreate, db = Depends(get_db)):
    db_user = listing_service.get_user_by_list(db, listing.email_address)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already in use")
    return listing_service.create_user(db, listing)

@router.get("/{list_id}", response_model=ListOut)
async def get_user(list_id: int, db = Depends(get_db)):
    user = listing_service.get_user(db, list_id)
    if not user:
        raise HTTPException(status_code=404, detail="Listing not found")
    return user

@router.put("/{user_id}", response_model=UserOut)
async def update_user(user_id: int, user_data: UserUpdate, db = Depends(get_db)):
    updated_user = user_service.update_user(db, user_id, user_data)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

@router.delete("/{user_id}")
async def delete_user(user_id: int, db = Depends(get_db)):
    success = user_service.delete_user(db, user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted successfully"}