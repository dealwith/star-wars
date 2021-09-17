import { CSSProperties, FunctionComponent, useMemo } from "react";
import { Link } from "react-router-dom";

import { IPeople } from "interfaces";
import { pickRandom } from "utils/array";
import { gradients } from "./utils";

import { Span } from 'components';

import styles from './people-gallery-item.module.css';
import { useHover } from "hooks";

export const PeopleGalleryItem: FunctionComponent<IPeople> = ({
	name,
	birth_year,
	height,
	eye_color,
	gender,
	url
}) => {
	const [ref, isHovered] = useHover<HTMLDivElement>();
	const background = useMemo(() => pickRandom(gradients), []);

	const regex = /#\w+/;
	const style: CSSProperties = {
		background,
		...(isHovered && {boxShadow: `${background.match(regex)[0]} 1px 2px 8px 4px`})
	};

	return (
		<Link to={url}>
			<div
				style={style}
				className={styles.container}
				ref={ref}
			>
				<Span>
					<Span isBold={true}>Name:</Span> {name}
				</Span>
				<Span>
					<Span isBold={true}>Birth year:</Span> {birth_year}
				</Span>
				<Span>
					<Span isBold={true}>Height:</Span> {height}
				</Span>
				<Span>
					<Span isBold={true}>Eye color:</Span> {eye_color}
				</Span>
				<Span>
					<Span isBold={true}>Gender:</Span> {gender}
				</Span>
			</div>
		</Link>
	)
}
