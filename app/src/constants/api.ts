const BASIC_API = 'http://localhost:5000/api/v1';
const BASIC_PEOPLE_API = `${BASIC_API}/people`;

export const API = {
	PEOPLE: {
		ORIGIN: BASIC_PEOPLE_API,
		EXACT: (id: string) => `${BASIC_PEOPLE_API}/${id}`,
	}
};
