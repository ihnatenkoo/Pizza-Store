export interface IOrder {
	id: string;
	title: string;
	type: string;
	size: string;
	imageUrl: string;
	cost: number;
	count: number;
}

export enum ActionTypes {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	CALCULATE_TOTAL_COST = 'CALCULATE_TOTAL_COST',
	CALCULATE_TOTAL_COUNT = 'CALCULATE_TOTAL_COUNT',
	CLEAR_CART = 'CLEAR_CART',
}
