import { FunctionComponent } from "react";

import styles from './container.module.css';

type TProps = {
	className?: string;
}

export const Container: FunctionComponent<TProps> = ({ children, className }) => {
	const componentClassName = `${styles.container} ${className}`;

	return (
		<div className={componentClassName}>
			{children}
		</div>
	)
}
