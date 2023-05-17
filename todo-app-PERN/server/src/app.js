import express from 'express';
import cors from 'cors';
import {router as todoRouter} from './api/routes/todo.route'

const app = express();

app.use(express.json());
app.use(cors());

// routes //
app.use('/todo', todoRouter);

export { app };
