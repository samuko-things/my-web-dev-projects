import { response } from 'express';
import {
  createOneTodoService,
  getAllTodosService,
  getOneTodoService,
  updateOneTodoService,
  deleteOneTodoService,
} from '../services/todo.service';

const routeName = 'todo';
const item = `${routeName}-item`;

// create a todo
export const createOneTodoController = async (req, res) => {
  try {
    const doc = await createOneTodoService(req.body);
    const {todo_id, description} = doc.rows[0];
    const response = {
      message: `${item} created successfully!`,
      count: doc.rows.length,
      todo: {
        id: todo_id,
        description: description,
      },
    }
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      error: `${err}`,
    });
  }
};

// get all todos
export const getAllTodosController = async (req, res) => {
  try {
    const docs = await getAllTodosService();
    const response = {
      message: `${item}s read successfully!`,
      count: docs.rows.length,
      todo: docs.rows.map((doc) => {
        return {
          id: doc.todo_id,
          description: doc.description,
        };
      }),
    };
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      error: `${err}`,
    });
  }
}

// get one todo by id
export const getOneTodoController = async (req, res) =>{
  try {
    const {todoId} = req.params;
    const doc = await getOneTodoService(todoId);
    const {todo_id, description} = doc.rows[0];
    const response = {
      message: `${item} read successfully!`,
      count: doc.rows.length,
      todo: {
        id: todo_id,
        description: description,
      },
    };
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      error: `${err}`,
    });
  }
}

// update one todo by id
export const updateOneTodoController = async (req,res) => {
  try {
    const {todoId} = req.params;
    const doc = updateOneTodoService(todoId, req.body);
    // const {todo_id, description} = doc.rows[0];
    const response = {
      message: `${item} updated successfully!`,
      // count: doc.rows.length,
      // todo: {
      //   id: todo_id,
      //   description: description,
      // },
    };
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      error: `${err}`,
    });
  }
}

// delete one todo by id 
export const deleteOneTodoController = async (req,res) => {
  try {
    const {todoId} = req.params;
    const doc = deleteOneTodoService(todoId);
    // const {todo_id, description} = doc.rows[0];
    const response = {
      message: `${item} deleted successfully!`,
      // count: doc.rows.length,
      // todo: {
      //   id: todo_id,
      //   description: description,
      // },
    };
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      error: `${err}`,
    });
  }
}