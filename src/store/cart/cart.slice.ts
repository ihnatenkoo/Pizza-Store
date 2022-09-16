import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, IOrder } from './types';

interface ICartInitialState {
	order: Array<IOrder>;
}

const initialState: ICartInitialState = {
	order: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		[ActionTypes.ADD_ITEM]: (state, action: PayloadAction<IOrder>) => {
			state.order.push(action.payload);
		},
	},
});

const { actions, reducer } = cartSlice;

export default reducer;
export const { ADD_ITEM } = actions;
