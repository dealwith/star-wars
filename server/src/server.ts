import express from 'express';
import { Request, Response } from 'express';

import peopleRouter from './routes/PeopleRoutes';
import { API } from './constants';

const app = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.use(API.PEOPLE_API, peopleRouter);

app.listen(PORT, () => {
  console.log(`Application started on: http://localhost:${PORT}`);
});
