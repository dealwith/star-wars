/**
 * Picks a random element from an array
 *
 * @param arr Input array
 * @returns Random element of an array
 */
export const pickRandom = (arr: string[]) => {
	const randomIdx = Math.floor(Math.random()*arr.length);

	return arr[randomIdx];
};
