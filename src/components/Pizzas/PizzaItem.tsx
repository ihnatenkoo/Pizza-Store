import { FC, useState } from 'react';
import styled from 'styled-components';
import { IPizza } from '.';
import { Flex } from '../../styled/mixins';
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
				<Cost>
					{activeType === 0
						? pizza.prices[activeSize]
						: pizza.prices[activeSize] + 0.25}
					€
				</Cost>
				<AddCartBtn />
			</Footer>
		</Item>
	);
};

export default PizzaItem;
