import {psql} from '../../db.psql.connect';

// create one todo
export const createOneTodoService = async (requestBody) => {
  const {description} = requestBody;
  const query = await psql.query('INSERT INTO todo(description) VALUES($1) RETURNING *;', [description]);
  return query;
};

// get all todos
export const getAllTodosService = async () => {
  const query = await psql.query('SELECT * FROM todo ORDER BY todo_id ASC;');
  return query;
}

// get one todo by id
export const getOneTodoService = async (paramsId) => {
  const query = await psql.query('SELECT * FROM todo WHERE todo_id=$1;', [paramsId]);
  return query;
}

// update one todo by id
export const updateOneTodoService = async (paramsId, requestBody) => {
  const {description} = requestBody;
  const query = await psql.query('UPDATE todo SET description=$1 WHERE todo_id=$2 RETURNING *;', [description, paramsId]);
  return query;
}

// delete one todo by id
export const deleteOneTodoService = async (paramsId) => {
  const query = await psql.query('DELETE FROM todo WHERE todo_id=$1 RETURNING *;', [paramsId]);
  return query;
}