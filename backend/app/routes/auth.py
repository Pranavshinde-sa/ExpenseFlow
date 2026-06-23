from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.schemas.user import UserCreate, UserLogin
from app.models.user import User
from app.core.dependencies import get_db
from app.core.security import hash_password
from app.core.security import verify_password

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):

    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User created successfully",
        "id": new_user.id
    }

@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    db_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not db_user:
        return {
            "message": "Invalid email or password"
        }

    if not verify_password(
        user.password,
        db_user.password
    ):
        return {
            "message": "Invalid email or password"
        }

    return {
        "message": "Login successful",
        "user_id": db_user.id
    }