import { Request, Response } from 'express';
import fs from 'fs';

import PeopleService from '../services/PeopleService';
import Util from '../utils/Util';

const util = new Util();

export default class PeopleController {
  static async getPeople(req: Request, res: Response) {
    try {
      const people = await PeopleService.getPeople();

      if (people.data.count > 0) {
        util.setSuccess(200, 'People retrieved', people.data.results);
      } else {
        util.setSuccess(200, 'No people found');
      }

      return util.send(res);
    } catch (err: any) {
      util.setError(400, err.message);
      return util.send(res);
    }
  }

  static async getPeopleById(req: Request, res: Response) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");

      return util.send(res);
    }

    try {
      const thePeopleRes = await PeopleService.getPeopleById(id);
      const thePeople = thePeopleRes?.data;

      if (!thePeople) {
        util.setSuccess(404, `Cannot find the people with the id ${id}`);
      } else {
        util.setSuccess(200, "Found people", thePeople);
      }

      return util.send(res);
    } catch (err: any) {
      util.setError(404, err.message);

      return util.send(res);
    }
  }
}
