import { FunctionComponent } from "react";

import styles from './button-sw.module.css';

type TProps = {
	onClick?: () => void;
	alternativeText: string;
}

export const ButtonSW: FunctionComponent<TProps> = ({
	children,
	onClick,
	alternativeText
}) => {
	return (
		<button onClick={onClick} className={styles.component}>
			<span className={styles.buttonText}>{children}</span>
			<span className={styles.alternativeText}>{alternativeText}</span>
		</button>
	);
};
