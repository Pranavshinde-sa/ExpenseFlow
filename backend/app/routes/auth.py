from fastapi import APIRouter

from app.schemas.user import UserCreate, UserLogin

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/signup")
def signup(user: UserCreate):
    return {
        "message": "Signup successful",
        "user": user.email
    }


@router.post("/login")
def login(user: UserLogin):
    return {
        "message": "Login successful",
        "user": user.email
    }