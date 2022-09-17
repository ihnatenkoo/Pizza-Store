import { FC } from 'react';
import MainLayout from '../layout/MainLayout';
import Pizzas from '../components/Pizzas';
import Navigation from '../components/Navigation';

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<Navigation />
			<Pizzas />
		</MainLayout>
	);
};
