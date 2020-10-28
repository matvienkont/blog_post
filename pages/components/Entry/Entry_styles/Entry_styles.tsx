import styled from 'styled-components';

const LiElement = styled.li`
	color: black;
	font-weight: bold;
	font-size: 20px;
`;

const BodyContainer = styled.div`
	padding: 10px;
	width: 70%;
`;

const UlWrapper = styled.ul`list-style-type: none;`;

const CommentsWrapper = styled.div`
	width: 50%;
	margin: 0 auto;
`;

const CommentContainer = styled.div`
	border: 1px solid grey;
	padding: 15px 20px;
	margin: 10px 0px;
	border-radius: 50px;
	-webkit-box-shadow: 0px 0px 27px -13px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 27px -13px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 27px -13px rgba(0, 0, 0, 0.75);
`;

export { LiElement, BodyContainer, UlWrapper, CommentsWrapper, CommentContainer };
