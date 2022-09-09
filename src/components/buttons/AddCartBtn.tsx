import { FC } from 'react';
import styled from 'styled-components';
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

const AddCartBtn: FC = () => {
	return (
		<Button>
			<span className="material-icons-outlined">add</span>
			Add to cart
		</Button>
	);
};
export default AddCartBtn;
