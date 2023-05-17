import express from 'express';
import {
  createOneTodoController,
  getAllTodosController,
  getOneTodoController,
  updateOneTodoController,
  deleteOneTodoController,
} from '../controllers/todo.controller';

const router = express.Router();

router.post('/', createOneTodoController);
router.get('/', getAllTodosController);
router.get('/:todoId', getOneTodoController);
router.put('/:todoId', updateOneTodoController);
router.delete('/:todoId', deleteOneTodoController);

export { router };
