export interface IOrder {
	id: string;
	title: string;
	type: string;
	size: string;
	imageUrl: string;
	cost: number;
	count: number;
}

export interface IPizza {
	id: string;
	imageUrl: string;
	title: string;
	types: Array<string>;
	sizes: Array<string>;
	prices: Array<number>;
	category: Array<string>;
	rating: number;
}

export enum ActionTypes {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	CHANGE_COUNT = 'CHANGE_COUNT',
	CALCULATE_TOTAL_COST_COUNT = 'CALCULATE_TOTAL_COST_COUNT',
	CLEAR_CART = 'CLEAR_CART',
}
