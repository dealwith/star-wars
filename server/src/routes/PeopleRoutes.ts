import { Router } from 'express';
import PeopleController from '../controllers/PeopleController';

const peopleRouter = Router();

peopleRouter.get(`/`, PeopleController.getPeople);
peopleRouter.get('/limit', PeopleController.getLimitedPeople);
peopleRouter.get(`/:id`, PeopleController.getPeopleById);

export default peopleRouter;
