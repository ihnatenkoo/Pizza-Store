import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../styled/mixins';

import Categories from './Categories';
import Sort from './Sort';

const StyledNavigation = styled.nav`
	${Flex({
		justify: 'center',
		align: 'center',
		wrap: 'wrap',
		gap: '20px',
	})}

	@media ${(props) => props.theme.media.tablet} {
		justify-content: space-between;
	}
`;

const Navigation: FC = () => {
	return (
		<StyledNavigation>
			<Categories />
			<Sort />
		</StyledNavigation>
	);
};

export default Navigation;
