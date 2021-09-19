import { FunctionComponent } from 'react';

import { Button, Container, Logo } from 'components';
import { useSort } from 'hooks';

import styles from './header.module.css';

export const Header: FunctionComponent = () => {
	const { toggleSortByAge, toggleSortByName } = useSort();

	return (
		<header className={styles.component}>
			<Container className={styles.container}>
				<Logo />
				<div className={styles.buttonContainer}>
					<Button onClick={toggleSortByName} alternativeText='Sort by name'>
						Name
					</Button>
					<Button onClick={toggleSortByAge} alternativeText='Sort by age'>
						Age
					</Button>
				</div>
			</Container>
		</header>
	)
}
