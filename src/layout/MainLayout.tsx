import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Main = styled.main`
	padding: 25px;
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${(props) => props.theme.colors.yellow};

	@media ${(props) => props.theme.media.tablet} {
		padding: 50px;
	}
`;

const Box = styled.div`
	padding: 30px 30px 100px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: ${(props) => props.theme.shadows.main};

	@media ${(props) => props.theme.media.tablet} {
		padding: 50px 50px 100px;
	}
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Main>
			<Box>
				<Header />
				{children}
			</Box>
		</Main>
	);
};

export default MainLayout;
