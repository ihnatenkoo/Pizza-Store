export interface IOrder {
	title: string;
	type: string;
	size: string;
	cost: number;
	count: number;
}

export enum ActionTypes {
	ADD_ITEM = 'ADD_ITEM',
	CALCULATE_TOTAL_COST = 'CALCULATE_TOTAL_COST',
}
