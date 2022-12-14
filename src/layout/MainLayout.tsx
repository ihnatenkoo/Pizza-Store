import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Main = styled.main`
	padding: 16px;
	min-width: 100vw;
	background-color: ${(props) => props.theme.colors.yellow};

	@media ${(props) => props.theme.media.tablet} {
		padding: 50px;
	}
`;

const Box = styled.div`
	min-height: 100vh;
	padding: 30px 10px 100px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: ${(props) => props.theme.shadows.main};

	@media ${(props) => props.theme.media.tablet} {
		padding: 50px 50px 100px;
	}
`;

interface IMainLayout extends PropsWithChildren {
	withCart?: boolean;
}

const MainLayout: FC<IMainLayout> = ({ children, withCart = false }) => {
	return (
		<Main>
			<Box>
				<Header withCart={withCart} />
				{children}
			</Box>
		</Main>
	);
};

export default MainLayout;
