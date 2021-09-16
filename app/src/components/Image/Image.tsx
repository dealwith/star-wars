import { FunctionComponent }  from 'react';

type TProps = {
	src: string;
	alt?: string;
	className?: string;
}

export const Image: FunctionComponent<TProps> = ({ src, alt = '', className }) => {
	return <img src={src} alt={alt} className={className} />
}
