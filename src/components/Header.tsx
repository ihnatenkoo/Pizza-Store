import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex } from '../styled/mixins';
import Cart from './Cart';

const StyledHeader = styled.header`
	margin-bottom: 40px;
	padding-bottom: 20px;
	${Flex({ justify: 'center', wrap: 'wrap', gap: '30px 70px' })}
	border-bottom: 1px solid #F7F7F7;

	@media ${(props) => props.theme.media.mobileL} {
		padding-bottom: 40px;
		justify-content: space-between;
	}
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

interface IHeader {
	withCart?: boolean;
}

const Header: FC<IHeader> = ({ withCart = false }) => {
	return (
		<StyledHeader>
			<Intro>
				<Link to="/">
					<Logo src="/img/logo.svg" alt="pizza logo" />
					<div>
						<Title>Pizza Store</Title>
						<Description>The most delicious pizza in the universe</Description>
					</div>
				</Link>
			</Intro>
			{withCart && <Cart />}
		</StyledHeader>
	);
};

export default Header;
