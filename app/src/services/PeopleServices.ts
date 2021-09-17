import axios from 'axios';

import { IPeopleRes } from 'interfaces';

export class PeopleServices {
	static getPeople(){
		return axios.get<IPeopleRes>('https://swapi.py4e.com/api/people/');
	}
}
