import { configureStore } from '@reduxjs/toolkit';
import cart from './cart/cart.slice';

export const store = configureStore({
	reducer: { cart },
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
