import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from '../../types/';
import { ActionTypesPizza } from '../types';

interface IPizzaInitialState {
	pizzaData: Array<IPizza>;
	activeFilter: string;
	SortRange: string;
	isLoading: boolean;
	isError: boolean;
}

const initialState: IPizzaInitialState = {
	pizzaData: [],
	activeFilter: 'all',
	SortRange: 'None',
	isLoading: false,
	isError: false,
};

export const GET_PIZZA_DATA = createAsyncThunk<Array<IPizza>>(
	'pizza/GET_PIZZA_DATA',
	async () => {
		const response = await fetch(
			'https://631b13b6fae3df4dcff3dc92.mockapi.io/api/pizzas'
		);
		const data = await response.json();
		return data;
	}
);

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		[ActionTypesPizza.SET_FILTER]: (state, action: PayloadAction<string>) => {
			state.activeFilter = action.payload;
		},
		[ActionTypesPizza.SET_SORT]: (state, action: PayloadAction<string>) => {
			state.SortRange = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(GET_PIZZA_DATA.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(GET_PIZZA_DATA.fulfilled, (state, action) => {
				state.isLoading = false;
				state.pizzaData = action.payload;
			})
			.addCase(GET_PIZZA_DATA.rejected, (state) => {
				state.isError = true;
				state.isLoading = false;
			});
	},
});

const { actions, reducer } = pizzaSlice;
export const { SET_FILTER, SET_SORT } = actions;
export default reducer;
