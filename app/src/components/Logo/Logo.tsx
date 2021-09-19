import { Link } from 'react-router-dom';

import { ROUTES } from 'constants/index';
import { Image } from 'components';
import logoSrc from './logo.jpg';

import styles from './logo.module.css';

export const Logo = () => {
	return (
		<Link to={ROUTES.HOME}>
			<Image src={logoSrc} alt='Logo Star Wars' className={styles.logo}/>
		</Link>
	)
}
