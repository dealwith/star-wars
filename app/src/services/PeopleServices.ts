import axios from 'axios';
import { API } from 'constants/api';

import { IPeople, IServerResponse, TPeopleRes } from 'interfaces';

export class PeopleServices {
	static getPeople() {
		return axios.get<TPeopleRes>(API.PEOPLE.ORIGIN);
	}

	static getPeopleById(id: string) {
		return axios.get<IServerResponse<IPeople>>(API.PEOPLE.EXACT(id));
	}
}
