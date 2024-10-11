from fastapi import APIRouter, Depends, HTTPException
from app.schema.user_schema import UserCreate, UserOut, UserUpdate, UserLogin
from app.service import user_service
from app.utils.user_database import get_db
from os import getenv

router = APIRouter(
    prefix="/users",
    tags=["users"]
)

# secret = getenv('secret')
# algorithm = getenv('algorithm')

@router.post("/signup", response_model=UserOut)
async def create_user(user: UserCreate, db = Depends(get_db)):
    db_user = user_service.get_user_by_email(db, user.email_address)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already in use")
    return user_service.create_user(db, user)

@router.post("/login", response_model=UserOut)
async def user_login(user: UserLogin, db = Depends(get_db)):
    db_user = user_service.get_user_by_email(db, user.email_address)
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials!")
    
    salt = bcrypt.gensalt(rounds=15)
    hashed_password = bcrypt.hashpw(user.password, salt)
    if not bcrypt.checkpw(user.password, hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials!")
    
    payload = {
        "user_id": db_user.user_id,
        "email_address": db_user.email_address,
    }

    # create token
    # token = jwt.encode(payload, secret, algorithm)
    user = {
        "name": db_user.name,
        "email_address": db_user.email_address,
        "address": db_user.address,
        "phone_number": db_user.phone_number,
        'token': "kjsdfjcjnslk",
        'wallet': db_user.wallet,
        "stripe_customer_id": db_user.stripe_customer_id,
        "age": db_user.age,
    }
    
    return user

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
