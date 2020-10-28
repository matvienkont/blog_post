import styled from 'styled-components';

const HeaderWrapper = styled.div`
	background-color: black;
	margin: 0;
	height: 15%;
	display: flex;
	align-items: center;
	width: 100%;
`;

const UlWrapper = styled.ul`
	width: 100%;
	margin-top: 0;
	list-style-type: none;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

const List = styled.li`
	color: white;
	font-weight: bold;
	font-size: 50px;
	height: 100%;
`;

export { HeaderWrapper, UlWrapper, List };
