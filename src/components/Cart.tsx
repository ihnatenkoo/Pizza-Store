import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import { Flex } from '../styled/mixins';

const CartButton = styled.button`
	min-width: 157px;
	background-color: ${(props) => props.theme.colors.orange};
	border-radius: ${(props) => props.theme.radius.radiusM};
	box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.15);
	cursor: pointer;

	position: fixed;
	left: 10px;
	bottom: 15px;

	@media ${(props) => props.theme.media.tablet} {
		position: static;
		box-shadow: none;
	}

	a {
		${Flex({ justify: 'center' })}
		padding: 15px 0;
	}
	&:hover {
		box-shadow: 0 0 0 3px #ffa600;
	}
`;

const Cost = styled.div`
	${Flex({ align: 'center', gap: '6px' })}
	padding: 0 10px;
	color: ${(props) => props.theme.colors.white};

	span {
		font-size: 16px;
	}
`;

const Count = styled(Cost)`
	border-left: 1px solid rgba(255, 255, 255, 0.25);
`;

const Text = styled.div`
	line-height: 1;
	font-weight: 700;
`;

const Cart: FC = () => {
	const totalCost = useAppSelector((state) => state.cart.totalCost);
	const totalCount = useAppSelector((state) => state.cart.totalCount);

	return (
		<CartButton>
			<Link to="/cart">
				<Cost>
					<Text>{totalCost}</Text>
					<span className="material-icons-outlined">euro_symbol</span>
				</Cost>
				<Count>
					<span className="material-icons-outlined">shopping_cart</span>
					<Text>{totalCount}</Text>
				</Count>
			</Link>
		</CartButton>
	);
};

export default Cart;
