import { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import MainLayout from './layout/MainLayout';

const GlobalStyle = createGlobalStyle`
	*, ::before, ::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
		font-size: 16px;
	}
	body {
		overflow-x: hidden;
	}
`;

const theme = {
	colors: {
		yellow: '#FFDF8C',
		white: '#ffffff',
	},
	shadows: {
		main: '0px 15px 20px rgba(0, 0, 0, 0.03);',
	},
	media: {
		mobileM: `(min-width: 375px)`,
		mobileL: `(min-width: 425px)`,
		tablet: `(min-width: 768px)`,
		laptop: `(min-width: 1024px)`,
	},
};

const App: FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MainLayout>
				<h1>Hello Pizza Store</h1>
			</MainLayout>
		</ThemeProvider>
	);
};

export default App;
