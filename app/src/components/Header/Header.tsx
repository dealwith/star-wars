import { FunctionComponent } from 'react';

import styles from './header.module.css';

export const Header: FunctionComponent = ({ children }) => {
	return (
		<header className={styles.item}>
			{children}
		</header>
	)
}
