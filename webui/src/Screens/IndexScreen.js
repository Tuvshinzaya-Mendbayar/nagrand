import React from 'react';
import logo from '../logo.png';
import Container from '../Components/Container.js';
import MenuContainer from '../Components/MenuContainer.js';
import MenuDiv from '../Components/MenuDiv.js';
import WordWrapper from '../Components/WordWrapper.js';
import ImgWrapper from '../Components/ImageWrapper.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowDown
} from '@fortawesome/free-solid-svg-icons';

const IndexScreen = () => (
	<Container bg="white">
		<MenuContainer bg="transparent">
			<MenuDiv justifySelf="stretch" flexDirection="row" p = "5%" maxHeight="300px">
				<WordWrapper fg="black" fontSize={4}>SHOP</WordWrapper>
				<WordWrapper fg="black" fontSize={4}>SOCIAL</WordWrapper>
			</MenuDiv>
			<MenuDiv justifySelf="stretch">
				<img src={logo} width="300px" height="300px" />
			</MenuDiv>
			<MenuDiv></MenuDiv>
		</MenuContainer>
		<Container bg="transparent">
			<ImgWrapper src="https://picsum.photos/800/600"/>
			<ImgWrapper src="https://picsum.photos/800/600"/>
			<ImgWrapper src="https://picsum.photos/800/600"/>
			<ImgWrapper src="https://picsum.photos/800/600"/>
		</Container>
	</Container>
);

export default IndexScreen;