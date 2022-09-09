import { FC } from 'react';
import styled from 'styled-components';
import { IPizza } from '.';
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

interface IPizzaItemProps {
	pizza: IPizza;
}

const PizzaItem: FC<IPizzaItemProps> = ({ pizza }) => {
	return (
		<Item>
			<Image src={pizza.imageUrl} alt={pizza.title} />
			<Name>{pizza.title}</Name>
			<PizzaOptions types={pizza.types} sizes={pizza.sizes} />
		</Item>
	);
};

export default PizzaItem;
