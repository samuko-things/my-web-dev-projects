-- creates a tododb database
CREATE DATABASE tododb;

-- creates a todo table with schema
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(100)
);

-- delete the tododb database
DROP DATABASE tododb;