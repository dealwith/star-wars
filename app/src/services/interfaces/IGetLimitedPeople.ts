import { IPeople } from "interfaces";

export interface IGetLimitedPeople {
	count: number;
	next: string;
	previous: string;
	results: IPeople[];
}
