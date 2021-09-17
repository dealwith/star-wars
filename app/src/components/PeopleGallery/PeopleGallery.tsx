import { IPeople } from "interfaces";
import { useEffect, useState } from "react";

import { PeopleServices } from "services";

import { PeopleGalleryItem } from "./PeopleGalleryItem";

import styles from './people-gallery.module.css'


export const PeopleGallery = () => {
	const [gallery, setGallery] = useState<IPeople[]>([]);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const people = await PeopleServices.getPeople();

				setGallery(people.data.results);
			};

			fetchData();
		} catch (err) {
			console.error(err);
		}
	}, []);

	const renderGallery = () => gallery.map(galleryItem => <PeopleGalleryItem {...galleryItem} />);

	const renderedGallery = renderGallery();

	return (
		<section className={styles.container}>
			{renderedGallery}
		</section>
	)
}
