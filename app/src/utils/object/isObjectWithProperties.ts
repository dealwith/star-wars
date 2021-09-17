export const isObjectWithProperties = (object: Record<string, unknown>): boolean => {
	return typeof object === 'object'
		? !Array.isArray(object) && !!Object.keys(object).length
		: false;
};
