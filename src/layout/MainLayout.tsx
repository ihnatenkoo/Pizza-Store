import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Main = styled.main`
	padding: 50px;
	min-width: 100vw;
	min-height: 100vh;
	background-color: ${(props) => props.theme.colors.yellow};
`;

const Box = styled.div`
	padding: 50px 50px 100px;
	background-color: ${(props) => props.theme.colors.white};
	box-shadow: ${(props) => props.theme.shadows.main};
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Main>
			<Box>{children}</Box>
		</Main>
	);
};

export default MainLayout;
