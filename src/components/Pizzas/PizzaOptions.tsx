import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../../styled/mixins';

const Options = styled.div`
	${Flex({ gap: '7px', direction: 'column' })}
	padding: 7px;
	background-color: ${(props) => props.theme.colors.grayLight};
	border-radius: ${(props) => props.theme.radius.radiusS};

	li {
		flex-grow: 1;

		padding: 12px 0;
		font-weight: 700;
		font-size: 14px;
		text-align: center;
		color: ${(props) => props.theme.colors.blackMedium};
		cursor: pointer;
	}

	li.active {
		background: ${(props) => props.theme.colors.white};
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
		border-radius: 5px;
	}
`;

const List = styled.ul`
	${Flex({})}
`;

const PizzaOptions: FC = () => {
	return (
		<Options>
			<List>
				<li className="active">Slim</li>
				<li>Standard</li>
			</List>
			<List>
				<li>26 sm.</li>
				<li className="active">30 sm.</li>
				<li>40 sm.</li>
			</List>
		</Options>
	);
};

export default PizzaOptions;
