import styled from 'styled-components';
import {
	space,
	color,
	layout,
	flexbox,
} from 'styled-system';

const MenuDiv = styled('div')(
	{
		display: "flex",
		flex: "1",
	},
	space,
	color,
	layout,
	flexbox
)

export default MenuDiv;