import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../styled/mixins';

const CartButton = styled.button`
	padding: 12px 10px;
	background-color: ${(props) => props.theme.colors.orange};
	border-radius: ${(props) => props.theme.radius.radiusM};
	cursor: pointer;

	a {
		${Flex({ justify: 'center' })}
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
	return (
		<CartButton>
			<Link to="/cart">
				<Cost>
					<Text>0</Text>
					<span className="material-icons-outlined">euro_symbol</span>
				</Cost>
				<Count>
					<span className="material-icons-outlined">shopping_cart</span>
					<Text>0</Text>
				</Count>
			</Link>
		</CartButton>
	);
};
export default Cart;
