import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../styled/mixins';

const StyledHeader = styled.header`
	padding-bottom: 40px;
	${Flex({ justify: 'space-between' })}
	border-bottom: 1px solid #F7F7F7;
`;

const Intro = styled.div`
	${Flex({ gap: '17px', align: 'center' })}
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

interface IHeaderProps {
	withCart?: boolean;
}

const Header: FC<IHeaderProps> = ({ withCart = false }) => {
	return (
		<StyledHeader>
			<Intro>
				<Logo src="/src/assets/logo.svg" alt="pizza logo" />
				<div>
					<Title>Pizza Store</Title>
					<Description>The most delicious pizza in the universe</Description>
				</div>
			</Intro>

			{withCart && <div>Cart</div>}
		</StyledHeader>
	);
};
export default Header;
