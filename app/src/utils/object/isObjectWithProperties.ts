export const isObjectWithProperties = (object: {}): boolean => {
	return typeof object === 'object'
		? !Array.isArray(object) && !!Object.keys(object).length
		: false;
};
