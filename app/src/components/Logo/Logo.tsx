import { Image } from 'components';

import logoSrc from './logo.jpg';

import styles from './logo.module.css';

export const Logo = () => {
	return <Image src={logoSrc} alt='Logo Star Wars' className={styles.logo}/>
}
