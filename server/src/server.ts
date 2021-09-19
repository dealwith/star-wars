import express from 'express';
import { Request, Response } from 'express';

import peopleRouter from './routes/PeopleRoutes';
import { API } from './constants';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});

app.use(API.PEOPLE_API, peopleRouter);

app.listen(PORT, () => {
  console.log(`Application started on: http://localhost:${PORT}`);
});
