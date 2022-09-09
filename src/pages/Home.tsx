import { FC } from 'react';
import MainLayout from '../layout/MainLayout';
import Pizzas from '../components/Pizzas';

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<Pizzas />
		</MainLayout>
	);
};
