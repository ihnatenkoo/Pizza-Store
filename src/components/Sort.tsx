import { FC, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { enumSortList, IActiveProps } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks';
import { SET_SORT } from '../store/pizzas/pizzas.slice';

const sortList = [
	enumSortList.NONE,
	enumSortList.PRICE_LOW,
	enumSortList.PRICE_HIGH,
	enumSortList.NAME_START,
	enumSortList.NAME_END,
];

const fadeInText = keyframes`	
0% {
	opacity: 0.25;
}

100% {
		opacity: 1;
}
`;

const Wrapper = styled.div`
	position: relative;
	user-select: none;
`;

const Title = styled.div`
	font-weight: 700;
	font-size: 17px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.blackDark};
`;

const SortLabel = styled.span`
	font-weight: 700;
	font-size: 17px;
	color: ${(props) => props.theme.colors.orange};
`;

const PopupList = styled.ul`
	width: 120%;
	padding: 5px 0;
	border-radius: 10px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
	animation: ${fadeInText} 0.2s ease-in;

	position: absolute;
	top: 25px;
	right: 0;
`;
const PopupItem = styled.li<IActiveProps>`
	padding: 10px 15px;
	cursor: pointer;

	${(props) =>
		props.active &&
		css`
			font-weight: 700;
			color: ${(props) => props.theme.colors.orange};
			background-color: rgba(254, 95, 30, 0.05); ;
		`}
`;

const Sort: FC = () => {
	const dispatch = useAppDispatch();
	const sortBy = useAppSelector((state) => state.pizzas.SortRange);
	const [showPopup, setShowPopup] = useState(false);

	const onClickTitleHandler = (): void => {
		setShowPopup((prev) => !prev);
	};

	const onClickPopupItemHandler = (value: string): void => {
		dispatch(SET_SORT(value));
		setShowPopup(false);
	};

	return (
		<Wrapper>
			<Title onClick={onClickTitleHandler}>
				Sort by: <SortLabel>{sortBy}</SortLabel>
			</Title>
			{showPopup && (
				<PopupList>
					{sortList.map((item) => (
						<PopupItem
							onClick={() => onClickPopupItemHandler(item)}
							active={item === sortBy}
							key={item}
						>
							{item}
						</PopupItem>
					))}
				</PopupList>
			)}
		</Wrapper>
	);
};

export default Sort;
