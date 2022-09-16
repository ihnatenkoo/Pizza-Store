import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';
import Skeleton from '../Skeleton';
import PizzasItem from './PizzaItem';

const Title = styled.h2`
	margin-bottom: 25px;
	font-weight: 700;
	font-size: 32px;
	color: ${(props) => props.theme.colors.blackDark};
`;

const PizzasWrapper = styled.div`
	${Flex({ wrap: 'wrap', gap: '40px 30px', justify: 'space-between' })}
`;

export interface IPizza {
	id: string;
	imageUrl: string;
	title: string;
	types: Array<string>;
	sizes: Array<string>;
	prices: Array<number>;
	category: number;
	rating: number;
}

const Pizzas: FC = () => {
	const [pizzaData, setPizzaData] = useState<Array<IPizza>>([]);

	const getData = async () => {
		try {
			const response = await fetch(
				'https://631b13b6fae3df4dcff3dc92.mockapi.io/api/pizzas'
			);
			const data = await response.json();
			setPizzaData(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Title>All Pizzas</Title>
			<PizzasWrapper>
				{!pizzaData.length
					? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
					: pizzaData.map((pizza: IPizza) => (
							<PizzasItem key={pizza.id} pizza={pizza} />
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))}
			</PizzasWrapper>
		</>
	);
};

export default Pizzas;
