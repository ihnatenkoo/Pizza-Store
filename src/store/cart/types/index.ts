export interface IOrder {
	title: string;
	type: string;
	size: string;
	cost: number;
}

export enum ActionTypes {
	ADD_ITEM = 'ADD_ITEM',
}
