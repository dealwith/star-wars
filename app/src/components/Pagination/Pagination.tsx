import classNames from "classnames"
import { ButtonPaginate } from "components";
import { FunctionComponent } from "react"

import styles from './pagination.module.css';

type TProps = {
	totalPages: number;
	currentPage: number;
	handlePrev: () => void;
	handleNext: () => void;
	handlePageClick: (pageNumber: number) => void;
	className?: string;
}

export const Pagination: FunctionComponent<TProps> = ({
	totalPages,
	handleNext,
	handlePrev,
	currentPage,
	handlePageClick,
	className: propsClassName
}) => {
	const containerClassName = classNames(styles.container, propsClassName);

	return (
		<div className={containerClassName}>
			<ButtonPaginate onClick={handlePrev}>prev</ButtonPaginate>
			{totalPages > 0 ? Array.from(Array(totalPages)).map((x, index) => {
				const pageNumber = index + 1;
				const isActive = pageNumber === currentPage;

				return (
					<ButtonPaginate
						isActive={isActive}
						key={index}
						onClick={() => handlePageClick(pageNumber)}
					>
						{pageNumber}
					</ButtonPaginate>
				);
			}): null}
			<ButtonPaginate onClick={handleNext}>next</ButtonPaginate>
		</div>
	)
}
