import {psql} from './db.psql.connect';
import { app as app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await psql.connect();
    console.log(`connection to postgres database successful`);
    console.log(`server started at port ${port}`);
  } catch (error) {
    console.log('error connecting to postgresql');
    psql.end();
  }
  
});
