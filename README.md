# ExpenseFlow

A containerized three-tier expense tracking application (React, FastAPI, PostgreSQL), used as a hands-on project for Docker, Docker Compose, and CI/CD.

## About this project

The application code (frontend and backend) was built with AI assistance. My focus in this repository is the DevOps side: containerizing each service, running the full stack with Docker Compose, managing configuration through environment variables, and building a delivery pipeline around it.

## Architecture

```
Browser
   |
   v
Frontend (React + Vite)
   |  REST
   v
Backend (FastAPI + SQLAlchemy)
   |
   v
PostgreSQL (schema initialized from init/postgres)
```

All three services run together under Docker Compose and communicate over the Compose network.

## DevOps work in this repository

| Area | Status |
|---|---|
| Dockerfiles for frontend and backend | Done |
| PostgreSQL initialization scripts (`init/postgres`) | Done |
| Docker Compose for the full stack | Done |
| Configuration via environment variables (`.env.example`) | Done |
| GitHub Actions CI (build and test) | Planned |
| GitHub Actions CD (automated deployment) | Planned |
| Deployment on AWS EC2 | Planned |
| Nginx reverse proxy | Planned |

## Tech stack

- **Application:** React, React Router, Tailwind CSS, FastAPI, SQLAlchemy, Pydantic, JWT authentication, bcrypt (Passlib)
- **Database:** PostgreSQL
- **DevOps:** Docker, Docker Compose, Git, GitHub, GitHub Actions (planned), AWS EC2 (planned)

## Application features

- User registration and login with JWT authentication and protected routes
- Expense create, read, update, delete
- Category management
- Dashboard summary: total balance, income, expenses

## Repository structure

```
ExpenseFlow/
  backend/             FastAPI application and Dockerfile
  frontend/            React application and Dockerfile
  init/postgres/       Database initialization scripts
  docker-compose.yml   Runs frontend, backend and database together
  .env.example         Example configuration (copy to .env)
  README.md
```

## Run with Docker Compose

Prerequisites: Docker and Docker Compose.

```bash
git clone https://github.com/Pranavshinde-sa/ExpenseFlow.git
cd ExpenseFlow

cp .env.example .env
# Edit .env and set your own database credentials and SECRET_KEY

docker compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API docs (Swagger): http://localhost:8000/docs

Stop and remove the containers:

```bash
docker compose down
```

To also remove the database volume:

```bash
docker compose down -v
```

## Configuration

All configuration is passed through environment variables. Copy `.env.example` to `.env` and set your own values. Never commit `.env`.

```
DATABASE_URL=postgresql://username:password@db:5432/expenseflow
SECRET_KEY=change-me
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
VITE_API_URL=http://localhost:8000
```

## Run without Docker

Backend:

```bash
cd backend
uv sync
uv run uvicorn main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## API overview

| Method | Endpoint | Description |
|---|---|---|
| POST | /auth/signup | Register a user |
| POST | /auth/login | Log in and receive a JWT |
| GET | /dashboard/summary | Balance, income, expenses |
| GET/POST | /expenses | List or create expenses |
| PUT/DELETE | /expenses/{id} | Update or delete an expense |
| GET/POST | /categories | List or create categories |
| DELETE | /categories/{id} | Delete a category |

## Limitations and next steps

- No automated tests or CI pipeline yet; adding GitHub Actions to build images and run checks on every push is the next step.
- Not deployed yet; the plan is EC2 with Nginx in front, delivered through a CD workflow.

## Author

Pranav Shinde
GitHub: https://github.com/Pranavshinde-sa
LinkedIn: https://www.linkedin.com/in/pranavshinde3

