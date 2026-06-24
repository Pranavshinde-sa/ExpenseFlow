from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.core.oauth2 import get_current_user

from app.models.expense import Expense
from app.schemas.expense import ExpenseCreate

router = APIRouter(
    prefix="/expenses",
    tags=["Expenses"]
)


@router.post("/")
def create_expense(
    expense: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    new_expense = Expense(
        title=expense.title,
        amount=expense.amount,
        transaction_type=expense.transaction_type,
        category_id=expense.category_id,
        user_id=current_user.id
    )

    db.add(new_expense)
    db.commit()
    db.refresh(new_expense)

    return new_expense

@router.get("/")
def get_expenses(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):

    expenses = (
        db.query(Expense)
        .filter(
            Expense.user_id == current_user.id
        )
        .all()
    )

    return expenses