import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, IOrder } from '../types';

interface ICartInitialState {
	order: Array<IOrder>;
	totalCost: number;
	totalCount: number;
}

const initialState: ICartInitialState = {
	order: [],
	totalCost: 0,
	totalCount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		[ActionTypes.ADD_ITEM]: (state, action: PayloadAction<IOrder>) => {
			if (state.order.some((item) => item.id === action.payload.id)) {
				state.order = state.order.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, count: item.count + 1 };
					}
					return item;
				});
			} else {
				state.order.push(action.payload);
			}
		},
		[ActionTypes.REMOVE_ITEM]: (state, action: PayloadAction<string>) => {
			state.order = state.order.filter((item) => item.id !== action.payload);
		},

		[ActionTypes.CHANGE_COUNT]: (
			state,
			action: { payload: { id: string; value: number } }
		) => {
			state.order = state.order
				.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, count: item.count + action.payload.value };
					}
					return item;
				})
				.filter((item) => item.count > 0);
		},
		[ActionTypes.CALCULATE_TOTAL_COST_COUNT]: (state) => {
			state.totalCost = +state.order
				.reduce((curr, next) => {
					return curr + next.count * next.cost;
				}, 0)
				.toFixed(3);

			state.totalCount = state.order.reduce((curr, next) => {
				return curr + next.count;
			}, 0);
		},
		[ActionTypes.CLEAR_CART]: (state) => {
			state.order = [];
			state.totalCost = 0;
			state.totalCount = 0;
		},
	},
});

const { actions, reducer } = cartSlice;

export default reducer;
export const {
	ADD_ITEM,
	REMOVE_ITEM,
	CHANGE_COUNT,
	CALCULATE_TOTAL_COST_COUNT,
	CLEAR_CART,
} = actions;
