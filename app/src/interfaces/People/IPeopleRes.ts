import { IPeople } from ".";

export interface IPeopleRes {
		count: number;
		next: string | null;
		previoues: string | null;
		results: IPeople[];

}
