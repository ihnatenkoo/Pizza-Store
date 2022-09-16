import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, IOrder } from './types';

interface ICartInitialState {
	order: Array<IOrder>;
	totalCost: number;
}

const initialState: ICartInitialState = {
	order: [],
	totalCost: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		[ActionTypes.ADD_ITEM]: (state, action: PayloadAction<IOrder>) => {
			state.order.push(action.payload);
		},
		[ActionTypes.CALCULATE_TOTAL_COST]: (state) => {
			state.totalCost = +state.order
				.reduce((curr, next) => {
					return curr + next.cost;
				}, 0)
				.toFixed(3);
		},
	},
});

const { actions, reducer } = cartSlice;

export default reducer;
export const { ADD_ITEM, CALCULATE_TOTAL_COST } = actions;
