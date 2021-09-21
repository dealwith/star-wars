import { FunctionComponent } from 'react';

import { ButtonSW, Container, Logo } from 'components';
import { useSort } from 'hooks';

import styles from './header.module.css';

export const Header: FunctionComponent = () => {
	const { toggleSortByAge, toggleSortByName } = useSort();

	return (
		<header className={styles.component}>
			<Container className={styles.container}>
				<Logo />
				<div className={styles.buttonContainer}>
					<ButtonSW onClick={toggleSortByName} alternativeText='Sort by name'>
						Name
					</ButtonSW>
					<ButtonSW onClick={toggleSortByAge} alternativeText='Sort by age'>
						Age
					</ButtonSW>
				</div>
			</Container>
		</header>
	)
}
