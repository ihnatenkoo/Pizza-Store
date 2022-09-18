import { FC } from 'react';
import styled from 'styled-components';
import { Flex } from '../styled/mixins';

import Categories from './Categories';
import Sort from './Sort';

const StyledNavigation = styled.nav`
	${Flex({ justify: 'space-between', align: 'center' })}
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
