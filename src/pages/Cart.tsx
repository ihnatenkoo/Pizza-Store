import { FC } from 'react';
import MainLayout from '../layout/MainLayout';
import styled from 'styled-components';
import { Container, Flex } from '../styled/mixins';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { CLEAR_CART } from '../store/cart/cart.slice';
import OrderItem from '../components/OrderItem';

const Wrapper = styled.section`
	${Container({})}
	margin-top: 95px;
`;

const Header = styled.div`
	${Flex({ align: 'center', justify: 'space-between' })}
	margin-bottom: 30px;
`;

const Title = styled.h2`
	font-weight: 700;
	font-size: 32px;
	line-height: 39px;
`;

const HeaderLeft = styled.div`
	${Flex({ align: 'center', gap: '15px' })}
	span {
		font-size: 30px;
	}
`;
const ClearCart = styled.div`
	${Flex({ align: 'center', gap: '5px' })}
	&:hover span {
		color: ${(props) => props.theme.colors.blackDark};
	}

	span {
		font-size: 16px;
		line-height: 19px;
		color: ${(props) => props.theme.colors.gray};
		cursor: pointer;
		transition: all 0.15s linear;
	}
`;

const Footer = styled.div`
	${Flex({ justify: 'space-between' })}
	margin: 40px 0;
`;

const FooterLeft = styled.div`
	${Flex({ align: 'center', gap: '5px' })}
`;
const FooterRight = styled(FooterLeft)``;

const TotalTitle = styled.div`
	font-size: 22px;
	line-height: 27px;
`;
const TotalCount = styled(TotalTitle)`
	font-weight: 700;
`;
const CostTitle = styled(TotalTitle)``;
const CostTotal = styled(TotalCount)`
	${Flex({ align: 'flex-start' })}
	color: ${(props) => props.theme.colors.orange};
`;

const OrderList = styled.ul``;

export const CartPage: FC = () => {
	const dispatch = useAppDispatch();
	const order = useAppSelector((state) => state.cart.order);
	const totalCost = useAppSelector((state) => state.cart.totalCost);
	const totalCount = useAppSelector((state) => state.cart.totalCount);

	const clearCartHandler = () => {
		dispatch(CLEAR_CART());
	};

	return (
		<MainLayout>
			<Wrapper>
				<Header>
					<HeaderLeft>
						<span className="material-icons-outlined">shopping_cart</span>
						<Title>Cart</Title>
					</HeaderLeft>
					<ClearCart onClick={clearCartHandler}>
						<span className="material-icons-outlined">delete</span>
						<span>Clear cart</span>
					</ClearCart>
				</Header>

				<OrderList>
					{order.map((item) => (
						<OrderItem key={item.id} item={item} />
					))}
				</OrderList>

				<Footer>
					<FooterLeft>
						<TotalTitle>Total pizzas:</TotalTitle>
						<TotalCount>{totalCount} pc.</TotalCount>
					</FooterLeft>
					<FooterRight>
						<CostTitle>Cost:</CostTitle>
						<CostTotal>
							{totalCost}
							<span className="material-icons-outlined">euro_symbol</span>
						</CostTotal>
					</FooterRight>
				</Footer>
			</Wrapper>
		</MainLayout>
	);
};
