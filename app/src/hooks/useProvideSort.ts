import { useState } from "react"

export const useProvideSort = () => {
	const [isSortByName, setSortByName] = useState(false);
	const [isFirstlySortedByName, setIsFirstlySortedByName] = useState(false);
	const [isSortByAge, setSortByAge] = useState(false);
	const [isFirstlySortedByAge, setIsFirstlySortedByAge] = useState(false);

	const toggleSortByName = () => {
		setSortByName(!isSortByName);
		setIsFirstlySortedByName(true);
	};

	const toggleSortByAge = () => {
		setIsFirstlySortedByAge(true);
		setSortByAge(!isSortByAge);
	};

	return {
		isSortByAge,
		isSortByName,
		isFirstlySortedByName,
		isFirstlySortedByAge,
		toggleSortByAge,
		toggleSortByName,
	}
};
