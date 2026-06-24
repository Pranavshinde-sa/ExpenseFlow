from pydantic import BaseModel


class ExpenseCreate(BaseModel):
    title: str
    amount: float
    transaction_type: str
    category_id: int


class ExpenseResponse(BaseModel):
    id: int
    title: str
    amount: float
    transaction_type: str
    category_id: int
    user_id: int

    class Config:
        from_attributes = True