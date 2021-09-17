import { FunctionComponent } from "react";
import cn from 'classnames';

import styles from './span.module.css';

type TProps = {
	isBold?: boolean;
}

export const Span: FunctionComponent<TProps> = ({ children, isBold }) => {
	const componentClassName = cn(
		styles.component,
		{ [styles.bold]: isBold }
	);

	return <span className={componentClassName}>{children}</span>;
}
