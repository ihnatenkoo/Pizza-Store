import { FC } from 'react';
import styled from 'styled-components';
import { ADD_ITEM, CALCULATE_TOTAL_COST } from '../../store/cart/cart.slice';
import { IOrder } from '../../store/cart/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Flex } from '../../styled/mixins';

const Button = styled.button`
	${Flex({ align: 'center' })}
	padding: 18px 12px;
	min-width: 140px;
	font-weight: 700;
	line-height: 1;
	background-color: ${(props) => props.theme.colors.orange};
	border-radius: ${(props) => props.theme.radius.radiusM};
	color: ${(props) => props.theme.colors.white};

	span {
		font-size: 20px;
	}
	&:hover {
		box-shadow: 0 0 0 3px #ffa600;
	}
`;

interface ICartBtnProps {
	orderData: IOrder;
}

const AddCartBtn: FC<ICartBtnProps> = ({ orderData }) => {
	const dispatch = useAppDispatch();

	const addOrderItemHandler = () => {
		dispatch(ADD_ITEM(orderData));
		dispatch(CALCULATE_TOTAL_COST());
	};

	return (
		<Button onClick={addOrderItemHandler}>
			<span className="material-icons-outlined">add</span>
			Add to cart
		</Button>
	);
};
export default AddCartBtn;
