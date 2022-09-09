import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../styled/mixins';
import Cart from './Cart';

const StyledHeader = styled.header`
	margin-bottom: 40px;
	padding-bottom: 40px;
	${Flex({ justify: 'space-between' })}
	border-bottom: 1px solid #F7F7F7;
`;

const Intro = styled.div`
	a {
		${Flex({ gap: '17px', align: 'center' })}
	}
`;

const Logo = styled.img`
	display: block;
	width: 38px;
	height: 38px;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 800;
	color: ${(props) => props.theme.colors.blackDark};
`;

const Description = styled.span`
	color: ${(props) => props.theme.colors.grayDark};
`;

const Header: FC = () => {
	return (
		<StyledHeader>
			<Intro>
				<Link to="/">
					<Logo src="/src/assets/logo.svg" alt="pizza logo" />
					<div>
						<Title>Pizza Store</Title>
						<Description>The most delicious pizza in the universe</Description>
					</div>
				</Link>
			</Intro>
			<Cart />
		</StyledHeader>
	);
};

export default Header;
