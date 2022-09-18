import { FC, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const sortList = [
	'None',
	'Price: Low',
	'Price: Hight',
	`Name: A-z`,
	`Name: Z-a`,
];

interface IActiveProps {
	active: boolean;
}

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
	const [showPopup, setShowPopup] = useState(false);
	const [sortBy, setSortBy] = useState(sortList[0]);

	const onClickTitleHandler = (): void => {
		setShowPopup((prev) => !prev);
	};

	const onClickPopupItemHandler = (value: string): void => {
		setSortBy(value);
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
