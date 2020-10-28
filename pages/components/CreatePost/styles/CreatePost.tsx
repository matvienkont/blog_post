import styled from 'styled-components';

const FormWrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	background-color: #b3bca9;
	height: 100%;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 60%;
	margin: 0 auto;
	height: 100%;
`;

const TitleInput = styled.input`
	width: 50%;
	height: 30%;
	border-radius: 5px;
	font-size: 24px;
`;

const TextArea = styled.textarea`
	width: 50%;
	height: 100%;
	border-radius: 10px;
	padding-left: 5px;
	padding-top: 3px;
	font-size: 20px;
`;

const FormField = styled.form`
	margin: 0 auto;
	height: 50%;
`;

const Label = styled.label`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const TextLables = styled.span`
	font: 20px sans-serif;
	letter-spacing: 2px;
	font-weight: 500;
	margin-bottom: 5px;
`;

const PageTitle = styled.p`
	width: 100%;
	font-size: 40px;
	text-align: center;
	margin: 0;
	padding-top: 20px;
`;

const Button = styled.button`
	& {
		margin-top: 30px;
		background-color: white;
		width: 15%;
		height: 30%;
		position: relative;
		border: 1px solid #808080;
		border-radius: 5px;
		cursor: pointer;
		color: black;
		font-size: 20px;
		overflow: hidden;
		transition: all 1s ease;
	}

	&:hover {
		color: white;
	}

	&:before {
		position: absolute;
		top: 0;
		left: 0;
		content: "Post";
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.5;
		background-color: black;
		color: white;
		height: 100%;
		width: 100%;
		opacity: 0;
		display: flex;
		border-radius: 2px;
		transform: scale(4);
		transition: all 0.4s ease-out, opacity 0.6s ease;
	}

	&:hover:before {
		opacity: 1;
		transform: scale(1);
	}
`;

export { FormWrapper, InputWrapper, TitleInput, TextArea, FormField, Label, TextLables, PageTitle, Button };
