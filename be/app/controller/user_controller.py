from fastapi import APIRouter, Depends, HTTPException
from app.schema.user_schema import UserCreate, UserOut, UserUpdate
from app.service import user_service
from app.utils.user_database import get_db

router = APIRouter(
    prefix="/users",
    tags=["users"]
)



@router.post("/", response_model=UserOut)
async def create_user(user: UserCreate, db = Depends(get_db)):
    db_user = user_service.get_user_by_email(db, user.email_address)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already in use")
    return user_service.create_user(db, user)

@router.get("/{user_id}", response_model=UserOut)
async def get_user(user_id: int, db = Depends(get_db)):
    user = user_service.get_user(db, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
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
