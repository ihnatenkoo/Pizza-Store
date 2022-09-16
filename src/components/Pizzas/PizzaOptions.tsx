import { FC, SetStateAction, Dispatch } from 'react';
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

interface IPizzaOptions {
	types: Array<string>;
	sizes: Array<string>;
	activeType: number;
	activeSize: number;
	setActiveType: Dispatch<SetStateAction<number>>;
	setActiveSize: Dispatch<SetStateAction<number>>;
}

const PizzaOptions: FC<IPizzaOptions> = ({
	types,
	sizes,
	activeType,
	activeSize,
	setActiveType,
	setActiveSize,
}) => {
	const changeHandler = (e: any, value: number) => {
		switch (e.target.dataset.name) {
			case 'type':
				setActiveType(value);
				break;
			case 'size':
				setActiveSize(value);
				break;
		}
	};

	return (
		<Options>
			<List>
				{types.map((type, i) => (
					<li
						onClick={(e) => changeHandler(e, i)}
						className={i === activeType ? 'active' : ''}
						key={i}
						data-name="type"
					>
						{type}
					</li>
				))}
			</List>
			<List>
				{sizes.map((size, i) => (
					<li
						onClick={(e) => changeHandler(e, i)}
						className={i === activeSize ? 'active' : ''}
						key={i}
						data-name="size"
					>
						{size} sm.
					</li>
				))}
			</List>
		</Options>
	);
};

export default PizzaOptions;
