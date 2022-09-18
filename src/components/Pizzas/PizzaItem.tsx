import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';

import { IPizza } from '../../store/types/';
import AddCartBtn from '../buttons/AddCartBtn';
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
const Footer = styled.div`
	${Flex({ justify: 'space-between', align: 'center' })}
	margin-top: 15px;
`;
const Cost = styled.span`
	font-size: 22px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.blackDark};
`;

interface IPizzaItemProps {
	pizza: IPizza;
}

const PizzaItem: FC<IPizzaItemProps> = ({ pizza }) => {
	const [activeType, setActiveType] = useState(0);
	const [activeSize, setActiveSize] = useState(0);
	const [itemPrice, setItemPrice] = useState(pizza.prices[0]);

	const calculateCost = (
		activeType: number,
		activeSize: number,
		prices: Array<number>
	): void =>
		setItemPrice(
			activeType === 0 ? prices[activeSize] : prices[activeSize] + 0.25
		);

	useEffect(() => {
		calculateCost(activeType, activeSize, pizza.prices);
	}, [activeType, activeSize]);

	const orderData = {
		id: pizza.id + pizza.types[activeType] + pizza.sizes[activeSize],
		title: pizza.title,
		type: pizza.types[activeType],
		size: pizza.sizes[activeSize],
		cost: itemPrice,
		count: 1,
		imageUrl: pizza.imageUrl,
	};

	return (
		<Item>
			<Image src={pizza.imageUrl} alt={pizza.title} />
			<Name>{pizza.title}</Name>
			<PizzaOptions
				types={pizza.types}
				sizes={pizza.sizes}
				activeType={activeType}
				activeSize={activeSize}
				setActiveType={setActiveType}
				setActiveSize={setActiveSize}
			/>
			<Footer>
				<Cost>{itemPrice} €</Cost>
				<AddCartBtn orderData={orderData} />
			</Footer>
		</Item>
	);
};

export default PizzaItem;
