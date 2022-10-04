import { useEffect, useRef, useState } from 'react';

export const useOutsideClick = (initialIsShow: boolean) => {
	const [isShow, setIsShow] = useState<boolean>(initialIsShow);
	const ref = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return { ref, isShow, setIsShow };
};
