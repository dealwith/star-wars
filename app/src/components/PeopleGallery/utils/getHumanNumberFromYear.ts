export const getHumanYearFromSWYear = (year: string): string | number => {
	if (typeof year === 'string')
		return +year.replace(/bby/i, '');

	return year;
};
