import { PeopleGalleryItem } from "components";
import { IPeople } from "interfaces";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PeopleServices } from "services";
import { isObjectWithProperties } from "utils";

import styles from './people-gallery-item-full-info.module.css';

type TParams = {
	id: string;
}

export const PeopleGalleryItemFullInfo = () => {
	const [people, setPeople] = useState<IPeople>()
	const { id } = useParams<TParams>();

	useEffect(() => {
		const fetchData = async () => {
			const peopleRes = await PeopleServices.getPeopleById(id);

			setPeople(peopleRes.data.data);
		}

		fetchData();
	}, [])

	return (
		<div className={styles.component}>
			{isObjectWithProperties(people)
				? <PeopleGalleryItem {...people} isFullInfo={true} />
				: <h2>Loading</h2>
			}
		</div>
	);
}
