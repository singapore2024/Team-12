from pydantic import BaseModel, Field
from typing import Optional
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectId")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class UserBase(BaseModel):
    name: str
    email_address: str
    address: str
    phone_number: str
    password: str
    token: Optional[str] = None
    wallet: float
    stripe_customer_id: Optional[str] = None
    age: int

    class Config:
        json_encoders = {ObjectId: str}
        allow_population_by_field_name = True
        arbitrary_types_allowed = True


class UserCreate(UserBase):
    pass


class UserUpdate(BaseModel):
    name: Optional[str]
    address: Optional[str]
    phone_number: Optional[str]
    wallet: Optional[float]
    stripe_customer_id: Optional[str]
    age: Optional[int]


class UserOut(UserBase):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    user_id: int

    class Config:
        orm_mode = True
        json_encoders = {ObjectId: str}
