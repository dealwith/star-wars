import { CSSProperties, FunctionComponent, useMemo } from "react";
import { Link } from "react-router-dom";

import { IPeople } from "interfaces";
import { pickRandom } from "utils/array";
import { gradients } from "./utils";
import { ROUTES } from "constants/index";

import { Span } from 'components';
import { useHover } from "hooks";

import styles from './people-gallery-item.module.css';
import classNames from "classnames";

interface IProps extends IPeople {
	isFullInfo?: boolean;
}

export const PeopleGalleryItem: FunctionComponent<IProps> = ({
	name,
	birth_year,
	height,
	eye_color,
	gender,
	url,
	isFullInfo,
	created,
	edited,
	mass,
	hair_color,
	skin_color
}) => {
	const [ref, isHovered] = useHover<HTMLDivElement>();
	const background = useMemo(() => pickRandom(gradients), []);

	const regex = /#\w+/;
	const style: CSSProperties = {
		background,
		...(isHovered && {boxShadow: `${background.match(regex)[0]} 1px 2px 8px 4px`})
	};

	const link = ROUTES.PEOPLE_ID(url?.slice(-2, -1));

	const getHumanDate = (time) => {
		const date = new Date(time);

		return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	}
	const linkClassName = classNames({[styles.linkContainer]: isFullInfo});

	return (
		<Link to={link} className={linkClassName}>
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
				{isFullInfo
					&& <>
						<Span>
							<Span isBold={true}>Mass:</Span> {mass}
						</Span>
						<Span>
							<Span isBold={true}>Hair color:</Span> {hair_color}
						</Span>
						<Span>
							<Span isBold={true}>Skin color:</Span> {skin_color}
						</Span>
						<Span>
							<Span isBold={true}>Created:</Span> {getHumanDate(created)}
						</Span>
						<Span>
							<Span isBold={true}>Edited:</Span> {getHumanDate(edited)}
						</Span>
					</>
				}
			</div>
		</Link>
	)
}
