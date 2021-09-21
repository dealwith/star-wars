import axios from 'axios';

import { IPeople, IPeopleRes } from '../interfaces';

class PeopleService {
  static getPeople() {
    return axios.get<IPeopleRes>('https://swapi.py4e.com/api/people/')
  }

  static getPeopleById(id: string) {
    return axios.get<IPeople>(`https://swapi.py4e.com/api/people/${id}`);
  }

  static getLimitedPeople(pageNumber: string) {
    return axios.get<any>(`https://swapi.py4e.com/api/people/?page=${pageNumber}`);
  }
}

export default PeopleService;
