import React from 'react';
import { Header } from '../components/Header/Header';
import axios from 'axios';
import { returnEntries } from '../components/Entry/Entry';
import { GetServerSidePropsContext } from 'next';

export const Post = ({ post }) => {
	return (
		<div>
			<Header />
			{returnEntries([ post ])}
		</div>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	var postId = context.query.postId;
	var post = {};
	await axios
		.get(`https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`)
		.then(async function(response) {
			post = response.data;
		})
		.catch(function(error) {
			console.log(error);
		});

	return {
		props: { post }
	};
}

export default Post;
