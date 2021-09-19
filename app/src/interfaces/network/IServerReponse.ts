export interface IServerResponse<T> {
	status: string;
	message: string;
	data: T;
}
