import { Router } from 'express';
import PeopleController from '../controllers/PeopleController';

const peopleRouter = Router();

peopleRouter.get(`/`, PeopleController.getPeople);
peopleRouter.get(`/:id`, PeopleController.getPeopleById);

export default peopleRouter;
