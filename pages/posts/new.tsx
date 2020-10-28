import React, { useState } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import axios from 'axios';
import { Header } from '../components/Header';

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
			<div>
				<p>New Post</p>
				<form onSubmit={handleSubmit} action="/">
					<div>
						<label>
							Title:
							<input
								type="text"
								value={title}
								name="title"
								onChange={(event) => setTitle(event.target.value)}
								required
							/>
						</label>
						<label>
							Body:
							<textarea
								value={body}
								name="body"
								onChange={(event) => setBody(event.target.value)}
								required
							/>
						</label>
					</div>
					<button type="submit">Submit</button>
				</form>
				<p>{body}</p>
			</div>
		</React.Fragment>
	);
};

export default Page;
