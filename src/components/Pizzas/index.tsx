import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { GET_PIZZA_DATA } from '../../store/pizzas/pizzas.slice';
import { IPizza } from '../../store/types';
import { Flex } from '../../styled/mixins';
import Skeleton from '../Skeleton';
import PizzasItem from './PizzaItem';

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
	const isError = useAppSelector((state) => state.pizzas.isError);
	const isLoading = useAppSelector((state) => state.pizzas.isLoading);

	const [filteredData, setFilteredData] = useState<Array<IPizza>>(pizzaData);

	useEffect(() => {
		dispatch(GET_PIZZA_DATA());
	}, []);

	useEffect(() => {
		setFilteredData(filterData(pizzaData, activeFilter));
	}, [pizzaData, activeFilter]);

	const filterData = (data: Array<IPizza>, filter: string): Array<IPizza> => {
		if (filter === 'all') return data;
		return data.filter((pizza) =>
			pizza.category.some((i) => i === filter.toLowerCase())
		);
	};

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
