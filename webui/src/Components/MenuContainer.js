import styled from 'styled-components';
import {
	space,
	color,
	layout
} from 'styled-system';

const MenuContainer = styled('div')(
	{
		margin: 0,
		padding: 0,
		display: "flex",
		justifyContent: "space-between"
	},
	space,
	color,
	layout
)

const CreatorContainer = styled('tr')(
	{
		margin: 1,
		padding: 15,
		display: "flex",
		justifyContent: "space-between"
	},
	space,
	color,
	layout
)

export default MenuContainer;