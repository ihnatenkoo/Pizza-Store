import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/cart.slice';
import pizzas from './pizzas/pizzas.slice';

export const store = configureStore({
	reducer: { cart, pizzas },
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
