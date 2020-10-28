import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { wrapper, State } from '../redux/store';
import { Header } from '../components/Header/Header';
import axios from 'axios';
import { fetchItems } from '../redux/actions';
import { returnEntries } from '../components/Entry/Entry';

export const Post = ({ post }) => {
	const { comments } = post;
	console.log(post);
	return (
		<div>
			<Header />
			{returnEntries([ post ])}
		</div>
	);
};

export async function getServerSideProps(context) {
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
