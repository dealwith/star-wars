import { FunctionComponent } from 'react';

import { useProvideSort } from 'hooks';
import { SortContext } from 'context';

export const SortProvider: FunctionComponent = ({ children }) => {
	const sortValue = useProvideSort();

	return (
		<SortContext.Provider value={sortValue}>
			{children}
		</SortContext.Provider>
	);
};
