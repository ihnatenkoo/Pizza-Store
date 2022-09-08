import { FC } from 'react';
import Header from '../components/Header';
import MainLayout from '../layout/MainLayout';

const HomePage: FC = () => {
	return (
		<MainLayout>
			<Header withCart />
		</MainLayout>
	);
};
export default HomePage;
