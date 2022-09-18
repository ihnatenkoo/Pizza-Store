import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../../styled/mixins';

type TStyles = 'main' | 'outline';
interface IBtnStyle {
	appear: TStyles;
}

const Button = styled.button<IBtnStyle>`
	${Flex({ justify: 'center', align: 'center', gap: '10px' })}
	min-width: 200px;
	padding: 15px 0;
	border-radius: 30px;
	font-weight: 700;
	font-size: 16px;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.orange};
	transition: all 0.15s ease-in;

	&:hover {
		text-decoration: underline;
	}

	${(props) =>
		props.appear === 'outline' &&
		css`
			background: #ffffff;
			border: 1px solid #d3d3d3;
			color: #d3d3d3;

			&:hover {
				text-decoration: none;
				color: #ffffff;
				background: #d8d5d5;
			}

			> a {
				color: inherit;
			}
		`};
`;

interface IMainBtn extends PropsWithChildren {
	appear?: TStyles;
	callback?: () => void;
}

const MainBtn: FC<IMainBtn> = ({ children, appear = 'main', callback }) => {
	return (
		<Button onClick={callback} appear={appear}>
			{children}
		</Button>
	);
};

export default MainBtn;
