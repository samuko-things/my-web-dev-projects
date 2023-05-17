import dotenv from 'dotenv';
dotenv.config();

import {Pool} from 'pg'

export const psql = new Pool({
  user: 'postgres',
  password: '_pass_ward',
  host: 'localhost',
  port: 5432,
  database: 'tododb'
});
