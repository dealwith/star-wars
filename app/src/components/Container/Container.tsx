import { FunctionComponent } from "react";

import styles from './container.module.css';

export const Container: FunctionComponent = ({ children }) => {
	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}
