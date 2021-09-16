import { Router } from "express";
import PeopleController from "../controllers/PeopleController";

const peopleRouter = Router();

peopleRouter.get(`/sign-in`, PeopleController.get());

export default peopleRouter;