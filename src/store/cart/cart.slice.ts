import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypesCart } from '../types';
import { IOrder } from '../../types';

const LS_ORDER_KEY = 'order';
interface ICartInitialState {
	order: Array<IOrder>;
	totalCost: string;
	totalCount: number;
}

const initialState: ICartInitialState = {
	order: JSON.parse(localStorage.getItem(LS_ORDER_KEY) ?? '[]'),
	totalCost: '0.00',
	totalCount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		[ActionTypesCart.ADD_ITEM]: (state, action: PayloadAction<IOrder>) => {
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
			localStorage.setItem(LS_ORDER_KEY, JSON.stringify(state.order));
		},
		[ActionTypesCart.REMOVE_ITEM]: (state, action: PayloadAction<string>) => {
			state.order = state.order.filter((item) => item.id !== action.payload);
			localStorage.setItem(LS_ORDER_KEY, JSON.stringify(state.order));
		},

		[ActionTypesCart.CHANGE_COUNT]: (
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
			localStorage.setItem(LS_ORDER_KEY, JSON.stringify(state.order));
		},
		[ActionTypesCart.CALCULATE_TOTAL_COST_COUNT]: (state) => {
			state.totalCost = state.order
				.reduce((curr, next) => {
					return curr + next.count * next.cost;
				}, 0)
				.toFixed(2);

			state.totalCount = state.order.reduce((curr, next) => {
				return curr + next.count;
			}, 0);
		},
		[ActionTypesCart.CLEAR_CART]: (state) => {
			state.order = [];
			state.totalCost = '0.00';
			state.totalCount = 0;
			localStorage.setItem(LS_ORDER_KEY, '[]');
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
