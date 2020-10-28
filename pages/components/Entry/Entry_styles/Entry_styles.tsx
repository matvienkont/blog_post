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

const EntryContainer = styled.div`
	& {
		border-radius: 5px;
		cursor: pointer;
		background-color: #a1c687;
		margin: 0 auto;
		margin-bottom: 20px;
		padding: 20px;
		width: 70%;
		transition: all 1s ease, background-color 0.3s ease, transform 0.3s ease;
		-webkit-box-shadow: 0px 0px 6px 0px rgba(101, 171, 121, 1);
		-moz-box-shadow: 0px 0px 6px 0px rgba(101, 171, 121, 1);
		box-shadow: 0px 0px 6px 0px rgba(101, 171, 121, 1);
	}

	&:hover {
		border-radius: 15px;
		transform: translateY(-5px);
		background-color: #75c68c;
		-webkit-box-shadow: 0px 7px 12px -2px rgba(89, 150, 106, 1);
		-moz-box-shadow: 0px 7px 12px -2px rgba(89, 150, 106, 1);
		box-shadow: 0px 7px 12px -2px #59966a;
	}
`;

export { LiElement, BodyContainer, UlWrapper, CommentsWrapper, CommentContainer, EntryContainer };
