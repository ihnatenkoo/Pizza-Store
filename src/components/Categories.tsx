import styled, { css } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { SET_FILTER } from '../store/pizzas/pizzas.slice';
import { Flex } from '../styled/mixins';

const categories = ['all', 'meat', 'cheese', 'BBQ'];

interface IActiveProps {
	active: boolean;
}

const List = styled.ul`
	${Flex({ justify: 'center', gap: '15px 10px', wrap: 'wrap' })}
`;

const Item = styled.li<IActiveProps>`
	padding: 15px 25px;
	border-radius: 30px;
	font-weight: 700;
	cursor: pointer;
	text-transform: capitalize;
	background-color: ${(props) => props.theme.colors.grayLight};
	transition: all 0.15s ease-in;

	${(props) =>
		props.active &&
		css`
			color: ${(props) => props.theme.colors.white};
			background-color: ${(props) => props.theme.colors.blackDark};
		`}
`;

const Categories = () => {
	const dispatch = useAppDispatch();
	const activeFilter = useAppSelector((state) => state.pizzas.activeFilter);

	const onClickHandler = (value: string) => {
		dispatch(SET_FILTER(value));
	};

	return (
		<List>
			{categories.map((c) => (
				<Item
					active={activeFilter === c}
					onClick={() => onClickHandler(c)}
					key={c}
				>
					{c}
				</Item>
			))}
		</List>
	);
};

export default Categories;
