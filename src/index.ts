import express from 'express';
import routes from './routes/fileRouter';

const app = express();

const port = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
