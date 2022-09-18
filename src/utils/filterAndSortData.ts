import { IPizza, enumSortList } from '../types';

export const filterAndSortData = (
	data: Array<IPizza>,
	filter: string,
	sort: string
): Array<IPizza> => {
	let visibleData;

	if (filter === 'all') {
		visibleData = [...data];
	} else {
		visibleData = data.filter((pizza) =>
			pizza.category.some((i) => i === filter.toLowerCase())
		);
	}

	switch (sort) {
		case enumSortList.NONE:
			break;
		case enumSortList.PRICE_LOW:
			visibleData = [...visibleData].sort((a, b) => a.basePrice - b.basePrice);
			break;
		case enumSortList.PRICE_HIGH:
			visibleData = [...visibleData].sort((a, b) => b.basePrice - a.basePrice);
			break;
		case enumSortList.NAME_START:
			visibleData = [...visibleData].sort((a, b) =>
				a.title.localeCompare(b.title)
			);
			break;
		case enumSortList.NAME_END:
			visibleData = [...visibleData].sort((a, b) =>
				b.title.localeCompare(a.title)
			);
			break;
	}

	return visibleData;
};
