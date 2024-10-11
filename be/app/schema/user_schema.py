from pydantic import BaseModel, Field
from typing import Optional
from bson import ObjectId
import uuid

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
    def __get_pydantic_json_schema__(cls, schema, handler):
        schema = handler(schema)
        schema.update(type="string")
        return schema


class UserBase(BaseModel):
    user_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
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
        populate_by_name = True
        from_attributes = True


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

    class Config:
        from_attributes = True
        json_encoders = {ObjectId: str}
