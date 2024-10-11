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


class ListingBase(BaseModel):
    user_id: str
    name: str
    listing_id: str
    description: str
    image: str
    categories: str
    price: float
    quantity: int

    class Config:
        json_encoders = {ObjectId: str}
        allow_population_by_field_name = True
        arbitrary_types_allowed = True


class ListCreate(ListingBase):
    pass


class ListingUpdate(BaseModel):
    user_id: Optional[str]
    name: Optional[str]
    listing_id: Optional[str]
    description: Optional[str]
    image: Optional[str]
    categories: Optional[str]
    price: Optional[float]
    quantity: Optional[int]


class ListOut(ListingBase):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    listing_id: int

    class Config:
        orm_mode = True
        json_encoders = {ObjectId: str}
