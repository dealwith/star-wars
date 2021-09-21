import classNames from "classnames";
import { FunctionComponent } from "react"

import styles from './button-paginate.module.css';

type TProps = {
	onClick: () => void;
	isActive?: boolean;
}

export const ButtonPaginate: FunctionComponent<TProps> = ({ onClick, children, isActive }) => {
	const className = classNames(
		styles.component,
		{ [styles.active]: isActive}
	);

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};