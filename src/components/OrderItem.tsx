import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { REMOVE_ITEM } from '../store/cart/cart.slice';
import { IOrder } from '../store/cart/types';
import { Flex } from '../styled/mixins';

const StyledOrderItem = styled.li`
	${Flex({ justify: 'space-between', align: 'center' })}
	padding: 30px 0;
	border-top: 1px solid #f4f4f4;
`;

const OrderInfo = styled.div`
	${Flex({ align: 'center', gap: '15px' })}
	min-width: 320px;
`;

const OrderTitle = styled.h3`
	margin-bottom: 5px;
	font-weight: 700;
	font-size: 22px;
	line-height: 27px;
`;

const OrderChars = styled.span`
	font-size: 18px;
	line-height: 22px;
	color: ${(props) => props.theme.colors.gray};
`;

const OrderImg = styled.img`
	width: 80px;
	height: 80px;
`;

const Counter = styled.div`
	${Flex({ align: 'center', gap: '12px' })}
	img {
		cursor: pointer;
	}
	span {
		font-weight: 700;
		font-size: 22px;
	}
`;

const Cost = styled.span`
	min-width: 45px;
	font-weight: 700;
	font-size: 22px;
`;

const Delete = styled.img`
	cursor: pointer;
`;

interface IOrderItemProps {
	item: IOrder;
}

const OrderItem: FC<IOrderItemProps> = ({ item }) => {
	const dispatch = useAppDispatch();

	const onREmoveHandler = (id: string): void => {
		dispatch(REMOVE_ITEM(id));
	};

	return (
		<StyledOrderItem key={item.title}>
			<OrderInfo>
				<OrderImg src={item.imageUrl} alt={item.title} />
				<div>
					<OrderTitle> {item.title}</OrderTitle>
					<OrderChars>
						{item.type}, {item.size} sm.
					</OrderChars>
				</div>
			</OrderInfo>

			<Counter>
				<img src="/img/icons/minus.svg" alt="increase" />
				<span>{item.count}</span>
				<img src="/img/icons/plus.svg" alt="decrease" />
			</Counter>

			<Cost>{(item.count * item.cost).toFixed(2)}</Cost>

			<Delete
				onClick={() => onREmoveHandler(item.id)}
				src="/img/icons/delete.svg"
				alt="delete"
			></Delete>
		</StyledOrderItem>
	);
};

export default OrderItem;
