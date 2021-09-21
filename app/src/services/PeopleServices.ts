import axios from 'axios';
import { API } from 'constants/api';

import { IPeople, IServerResponse } from 'interfaces';
import { IGetLimitedPeople } from './interfaces';

export class PeopleServices {
	static getPeople() {
		return axios.get<IServerResponse<IPeople[]>>(API.PEOPLE.ORIGIN);
	}

	static getPeopleById(id: string) {
		return axios.get<IServerResponse<IPeople>>(API.PEOPLE.EXACT(id));
	}

	static getLimitedPeople(pageNumber: number = 1) {
		return axios.get<IServerResponse<IGetLimitedPeople>>(API.PEOPLE.LIMIT_PAGE(pageNumber));
	}
}
