import { FC } from 'react';
import styled from 'styled-components';
import PizzasItem from './PizzaItem';

const Title = styled.h2`
	margin-bottom: 25px;
	font-weight: 700;
	font-size: 32px;
	color: ${(props) => props.theme.colors.blackDark};
`;

const Pizzas: FC = () => {
	return (
		<>
			<Title>All Pizzas</Title>
			<PizzasItem />
		</>
	);
};
export default Pizzas;
