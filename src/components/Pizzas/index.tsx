import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';

import { IPizza } from '../../types/';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GET_PIZZA_DATA } from '../../store/pizzas/pizzas.slice';

import Skeleton from '../Skeleton';
import PizzasItem from './PizzaItem';
import { filterAndSortData } from '../../utils/filterAndSortData';

const PizzasWrapper = styled.div`
	margin: 0 auto;
	${Flex({ wrap: 'wrap', gap: '50px 70px', justify: 'center' })}
`;

const Title = styled.h2`
	margin: 30px 0 25px;
	font-weight: 700;
	font-size: 32px;
	color: ${(props) => props.theme.colors.blackDark};
`;

const Pizzas: FC = () => {
	const dispatch = useAppDispatch();
	const pizzaData = useAppSelector((state) => state.pizzas.pizzaData);
	const activeFilter = useAppSelector((state) => state.pizzas.activeFilter);
	const sortRange = useAppSelector((state) => state.pizzas.SortRange);
	const isError = useAppSelector((state) => state.pizzas.isError);
	const isLoading = useAppSelector((state) => state.pizzas.isLoading);

	const [filteredData, setFilteredData] = useState<Array<IPizza>>(pizzaData);

	useEffect(() => {
		dispatch(GET_PIZZA_DATA());
	}, []);

	console.log(filteredData);

	useEffect(() => {
		setFilteredData(filterAndSortData(pizzaData, activeFilter, sortRange));
	}, [pizzaData, activeFilter, sortRange]);

	if (isError) {
		return <p>Loading Error...</p>;
	}

	return (
		<>
			<Title>All Pizzas</Title>
			<PizzasWrapper>
				{isLoading
					? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
					: filteredData.map((pizza: IPizza) => (
							<PizzasItem key={pizza.id} pizza={pizza} />
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  ))}
			</PizzasWrapper>
		</>
	);
};

export default Pizzas;
