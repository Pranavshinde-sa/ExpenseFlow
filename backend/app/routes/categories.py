from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.oauth2 import get_current_user

from app.models.category import Category
from app.schemas.category import CategoryCreate

router = APIRouter(
    prefix="/categories",
    tags=["Categories"]
)


@router.post("/")
def create_category(
    category: CategoryCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    new_category = Category(
        name=category.name
    )

    db.add(new_category)
    db.commit()
    db.refresh(new_category)

    return new_category


@router.get("/")
def get_categories(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    categories = db.query(Category).all()

    return categories