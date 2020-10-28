import React, { useState } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import axios from 'axios';
import { Header } from '../components/Header/Header';
import {
	FormWrapper,
	InputWrapper,
	TitleInput,
	TextArea,
	FormField,
	Label,
	TextLables,
	PageTitle,
	Button
} from '../components/CreatePost/CreatePost';

const Page: NextPage = () => {
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		axios
			.post('https://simple-blog-api.crew.red/posts', {
				title: title,
				body: body
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});

		Router.push('/');
	};

	return (
		<React.Fragment>
			<Header />
			<FormWrapper>
				<PageTitle>What are you waiting for? Post! &#x1F608;</PageTitle>
				<FormField as="form" onSubmit={handleSubmit} action="/">
					<InputWrapper>
						<Label>
							<TextLables>Title</TextLables>
							<TitleInput
								as="input"
								type="text"
								value={title}
								name="title"
								onChange={(event) => setTitle(event.target.value)}
								required
							/>
						</Label>
						<Label>
							<TextLables>Post</TextLables>
							<TextArea
								as="textarea"
								value={body}
								name="body"
								onChange={(event) => setBody(event.target.value)}
								required
							/>
						</Label>
						<Button as="button" type="submit">
							Submit
						</Button>
					</InputWrapper>
				</FormField>
			</FormWrapper>
		</React.Fragment>
	);
};

export default Page;
