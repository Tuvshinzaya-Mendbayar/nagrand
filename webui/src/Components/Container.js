import styled from 'styled-components';
import {
	space,
	color,
	layout
} from 'styled-system';

const Container = styled('div')(
	{
		margin: 0,
		padding: "1%",
	},
	space,
	color,
	layout
)

export default Container;