from fastapi import FastAPI

from app.core.database import Base, engine

from app.models.user import User
from app.models.category import Category
from app.models.expense import Expense

from app.routes.auth import router as auth_router
from app.routes.users import router as user_router
from app.routes.categories import router as category_router



Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(category_router)

@app.get("/")
def root():
    return {
        "message": "ExpenseFlow API"
    }