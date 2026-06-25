CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,

    title VARCHAR(255) NOT NULL,

    amount DOUBLE PRECISION NOT NULL,

    transaction_type VARCHAR(20) NOT NULL,

    category_id INTEGER NOT NULL,

    user_id INTEGER NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_category
        FOREIGN KEY(category_id)
        REFERENCES categories(id),

    CONSTRAINT fk_user
        FOREIGN KEY(user_id)
        REFERENCES users(id)
);