import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GET_PIZZA_DATA } from '../../store/pizzas/pizzas.slice';
import { Flex } from '../../styled/mixins';
import Skeleton from '../Skeleton';
import PizzasItem from './PizzaItem';

const Title = styled.h2`
	margin: 30px 0 25px;
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
	const dispatch = useAppDispatch();
	const pizzaData = useAppSelector((state) => state.pizzas.pizzaData);
	const isError = useAppSelector((state) => state.pizzas.isError);
	const isLoading = useAppSelector((state) => state.pizzas.isLoading);

	useEffect(() => {
		dispatch(GET_PIZZA_DATA());
	}, []);

	if (isError) {
		return <p>Loading Error...</p>;
	}

	return (
		<>
			<Title>All Pizzas</Title>
			<PizzasWrapper>
				{isLoading
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
