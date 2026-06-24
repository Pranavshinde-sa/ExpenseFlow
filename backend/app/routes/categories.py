from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.oauth2 import get_current_user

from app.models.category import Category
from app.schemas.category import CategoryCreate
from fastapi import HTTPException

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

@router.delete("/{category_id}")
def delete_category(
    category_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    category = (
        db.query(Category)
        .filter(Category.id == category_id)
        .first()
    )

    if not category:
        raise HTTPException(
            status_code=404,
            detail="Category not found"
        )

    db.delete(category)
    db.commit()

    return {
        "message": "Category deleted successfully"
    }