import { FunctionComponent, useEffect, useState } from "react";

import { IPeople } from "interfaces";

import { PeopleServices } from "services";
import { PAGINATION } from "constants/pagination";
import { getHumanYearFromSWYear } from "./utils";

import { Pagination } from "components";
import { PeopleGalleryItem } from "./PeopleGalleryItem";
import { useSort } from "hooks";

import { initialPaginationState } from 'components/App'

import styles from './people-gallery.module.css'

type TProps = {
	currentPage: typeof initialPaginationState.currentPage;
	totalPages: typeof initialPaginationState.totalPages;
	setPagination: React.Dispatch<React.SetStateAction<typeof initialPaginationState>>
}

export const PeopleGallery: FunctionComponent<TProps> = ({ currentPage, totalPages, setPagination }) => {
	const [gallery, setGallery] = useState<IPeople[]>([]);

	const {
		isSortByAge,
		isSortByName,
		isFirstlySortedByAge,
		isFirstlySortedByName
	} = useSort();

	useEffect(() => {
		try {
			const fetchData = async () => {
				const limitedPeopleRes = await PeopleServices.getLimitedPeople(currentPage);
				const serverData = limitedPeopleRes?.data?.data;

				const totalPages = Math.ceil(serverData?.count/PAGINATION.PAGE_SIZE);

				setGallery(serverData?.results);
				setPagination(state => ({ ...state, totalPages }));
			};

			fetchData();
		} catch (err) {
			console.error(err.message);
		}
	}, [currentPage]);

	useEffect(() => {
		let galleryData = gallery.slice();

		if (isFirstlySortedByAge) {
			if (isSortByAge) {
				galleryData.sort((a, b) => {
					const yearA = getHumanYearFromSWYear(a.birth_year);
					const yearB = getHumanYearFromSWYear(b.birth_year);

					if (yearA === 'unknown')
						return -1;

					if (yearA < yearB)
						return -1;

					if (yearA > yearB)
						return 1;

					return 0;
				});
				setGallery(galleryData)
			} else {
				galleryData.sort((a, b) => {
					const yearA = getHumanYearFromSWYear(a.birth_year);
					const yearB = getHumanYearFromSWYear(b.birth_year);

					if (yearA === 'unknown')
						return 1;

					if (yearA < yearB)
						return 1;

					if (yearA > yearB)
						return -1;

					return 0;
				});
				setGallery(galleryData)
			}
		}

		if (isFirstlySortedByName) {
			if (isSortByName) {
				galleryData.sort((a, b) => {
					if (a.name < b.name)
						return -1;

					if (a.name > b.name)
						return 1;

					return 0;
				});

				setGallery(galleryData)
			} else {
				galleryData.sort((a, b) => {
					if (a.name > b.name)
						return -1;

					if (a.name < b.name)
						return 1;

					return 0;
				});

				setGallery(galleryData)
			}
		}

	}, [isSortByAge, isSortByName, isFirstlySortedByAge, isFirstlySortedByName]);

	const handleNext = () => {
		if (currentPage === totalPages)
			return setPagination(state => ({...state, currentPage: initialPaginationState.currentPage}));

		setPagination(state => ({...state, currentPage: state.currentPage + 1}));
	};

	const handlePrev = () => {
		if (currentPage === 1)
			return setPagination(state => ({...state, currentPage: state.totalPages }));

		setPagination(state => ({...state, currentPage: state.currentPage - 1}));
	};

	const handlePageClick = (pageNumber: number) => {
		setPagination(state => ({...state, currentPage: pageNumber}));
	};


	return (
		<section>
			<div className={styles.container}>
				{gallery.map(galleryItemData => <PeopleGalleryItem key={galleryItemData.url} {...galleryItemData} />)}
			</div>
			<div className={styles.paginationContainer}>
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					handleNext={handleNext}
					handlePrev={handlePrev}
					handlePageClick={handlePageClick}
				/>
			</div>
		</section>
	);
};
