import { FC } from 'react';
import styled from 'styled-components';
import PizzaOptions from './PizzaOptions';

const Item = styled.div`
	width: 280px;
`;
const Image = styled.img`
	margin: 0 auto;
	display: block;
	width: 260px;
	height: 260px;
`;

const Name = styled.h3`
	margin: 5px 0 15px;
	font-weight: 800;
	font-size: 20px;
	text-align: center;
`;

const PizzaItem: FC = () => {
	return (
		<Item>
			<Image
				src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
				alt="pizza"
			/>
			<Name>Margherita</Name>
			<PizzaOptions />
		</Item>
	);
};

export default PizzaItem;
