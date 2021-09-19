import { IPeople } from "interfaces";
import { useEffect, useState } from "react";

import { PeopleServices } from "services";

import { PeopleGalleryItem } from "./PeopleGalleryItem";

import { useSort } from "hooks";

import styles from './people-gallery.module.css'
import { getHumanYearFromSWYear } from "./utils";

export const PeopleGallery = () => {
	const [gallery, setGallery] = useState<IPeople[]>([]);
	const { isSortByAge, isSortByName, isFirstlySortedByAge, isFirstlySortedByName } = useSort()

	useEffect(() => {
		try {
			const fetchData = async () => {
				const people = await PeopleServices.getPeople();

				setGallery(people.data.data);
			};

			fetchData();
		} catch (err) {
			console.error(err.message);
		}
	}, []);

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

	}, [isSortByAge, isSortByName, isFirstlySortedByAge, isFirstlySortedByName])

	return (
		<section className={styles.container}>
			{gallery.map(galleryItemData => <PeopleGalleryItem key={galleryItemData.url} {...galleryItemData} />)}
		</section>
	)
}
