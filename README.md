# 💰 ExpenseFlow

ExpenseFlow is a full-stack expense tracking application built with **React**, **FastAPI**, and **PostgreSQL**. It enables users to securely manage their personal finances through authentication, expense management, category management, and a dashboard summary.

---

## ✨ Features

### 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout
- Password Hashing using Passlib (bcrypt)

### 📊 Dashboard

- Total Balance
- Total Income
- Total Expenses

### 💸 Expense Management

- Create Expense
- View Expenses
- Update Expense
- Delete Expense

### 🏷️ Category Management

- Create Category
- View Categories
- Delete Category

### 🎨 User Experience

- Responsive UI
- Form Validation
- Success & Error Messages
- Modal Forms

---

# 🛠️ Tech Stack

## Frontend

- React
- React Router
- Tailwind CSS
- Fetch API

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- Passlib (bcrypt)
- JWT Authentication

## Database

- PostgreSQL

## Development Tools

- Git
- GitHub
- UV (Python Package Manager)

---

# 📁 Project Structure

```text
ExpenseFlow
│
├── backend/
│   ├── app/
│   ├── main.py
│   ├── pyproject.toml
│   ├── uv.lock
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── README.md
│
└── .gitignore
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/ExpenseFlow.git

cd ExpenseFlow
```

---

## Backend Setup

```bash
cd backend

uv sync

uv run uvicorn main:app --reload
```

Backend will be available at

```
http://localhost:8000
```

Swagger Documentation

```
http://localhost:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend will be available at

```
http://localhost:5173
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
DATABASE_URL=postgresql://username:password@localhost:5432/expenseflow

SECRET_KEY=your-secret-key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Frontend (.env)

```env
VITE_API_URL=http://localhost:8000
```

---

# 🚧 Upcoming Features

- Docker Compose
- PostgreSQL Initialization Scripts
- CI Pipeline (GitHub Actions)
- CD Pipeline (GitHub Actions)
- EC2 Deployment
- Nginx Reverse Proxy

---

# 📚 API Endpoints

## Authentication

```
POST /auth/signup

POST /auth/login
```

## Dashboard

```
GET /dashboard/summary
```

## Expenses

```
GET    /expenses

POST   /expenses

PUT    /expenses/{id}

DELETE /expenses/{id}
```

## Categories

```
GET    /categories

POST   /categories

DELETE /categories/{id}
```

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# 👨‍💻 Author

**Pranav Sinde**

GitHub: https://github.com/Pranavshinde-sa

LinkedIn: www.linkedin.com/in/pranavshinde3

