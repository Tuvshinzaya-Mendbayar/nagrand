import styled from 'styled-components';
import {
	space,
	color,
	typography,
} from 'styled-system';

const WordWrapper = styled('div')(
	{
		padding: 0,
		margin: "3em",
		borderBottom: "1px solid black",
		borderRadius: "1.5px",
	}
	,
	typography,
	color,
	space,
)

export default WordWrapper;