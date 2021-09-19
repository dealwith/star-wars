import axios from 'axios';

import { IPeople, IPeopleRes } from '../interfaces';

class PeopleService {
  static getPeople() {
    return axios.get<IPeopleRes>('https://swapi.py4e.com/api/people/')
  }

  static getPeopleById(id: string) {
    return axios.get<IPeople>(`https://swapi.py4e.com/api/people/${id}`);
  }
}

export default PeopleService;
