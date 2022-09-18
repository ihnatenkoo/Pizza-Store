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
	basePrice: number;
}

export enum enumSortList {
	NONE = 'None',
	PRICE_LOW = 'Price: Low',
	PRICE_HIGH = 'Price: High',
	NAME_START = 'Name: Start',
	NAME_END = 'Name: End',
}

export interface IActiveProps {
	active: boolean;
}
