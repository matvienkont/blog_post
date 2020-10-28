import React, { useState } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import axios from 'axios';
import { Header } from '../components/Header/Header';
import { CreatePostForm } from '../components/CreatePost/CreatePost';

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
			.catch(function(error) {
				console.log(error);
			});

		Router.push('/');
	};

	return (
		<React.Fragment>
			<Header />
			<CreatePostForm
				title={title}
				body={body}
				setTitle={setTitle.bind(this)}
				setBody={setBody.bind(this)}
				handleSubmit={handleSubmit.bind(this)}
			/>
		</React.Fragment>
	);
};

export default Page;
