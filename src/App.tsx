import 'material-icons/iconfont/material-icons.css';

import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { HomePage, CartPage } from './pages/';

const GlobalStyle = createGlobalStyle`
	*, ::before, ::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Nunito', sans-serif;
		font-size: 16px;
		font-weight: 400;
		line-height: 1.2;
	}
	body {
		overflow-x: hidden;
	}
	button {
		padding: 0;
		border: none;
		cursor: pointer;
	}
	a {
			text-decoration: none;
	}
	li {
		list-style: none;
	}
`;

const theme = {
	colors: {
		yellow: '#FFDF8C',
		orange: '#FE5F1E',
		white: '#ffffff',
		blackDark: '#181818',
		blackMedium: '#2C2C2C',
		grayLight: '#F3F3F3',
		gray: '#B6B6B6',
		grayDark: '#7B7B7B',
	},
	shadows: {
		main: '0px 15px 20px rgba(0, 0, 0, 0.03)',
	},
	radius: {
		radiusS: '10px',
		radiusM: '30px',
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
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	);
};

export default App;
