import { FC } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import {
	ADD_ITEM,
	CALCULATE_TOTAL_COST_COUNT,
} from '../../store/cart/cart.slice';
import { IOrder } from '../../types';
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

const ToastOrderTitle = styled.span`
	font-weight: 700;
	color: ${(props) => props.theme.colors.orange};
`;
const ToastOrderIcon = styled(ToastOrderTitle)``;

interface ICartBtnProps {
	orderData: IOrder;
}

const AddCartBtn: FC<ICartBtnProps> = ({ orderData }) => {
	const dispatch = useAppDispatch();

	const addOrderItemHandler = () => {
		toast.info(
			<div>
				<ToastOrderTitle className="text-red-500">
					{orderData.title}
				</ToastOrderTitle>
				<span> add to cart</span>
			</div>,
			{
				icon: () => (
					<ToastOrderIcon className="material-icons-outlined">
						shopping_cart
					</ToastOrderIcon>
				),
				position: 'top-center',
			}
		);
		dispatch(ADD_ITEM(orderData));
		dispatch(CALCULATE_TOTAL_COST_COUNT());
	};

	return (
		<Button onClick={addOrderItemHandler}>
			<span className="material-icons-outlined">add</span>
			Add to cart
		</Button>
	);
};

export default AddCartBtn;
