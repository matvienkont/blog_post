import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchItems } from './redux/actions';
import React from 'react';
import { Header } from './components/Header/Header';
import { returnEntries } from './components/Entry/Entry';
import { GetServerSidePropsContext } from 'next';

export default function Home({ posts }) {
	const dispatch = useDispatch();
	dispatch(fetchItems(posts));

	return (
		<React.Fragment>
			<Header />
			{returnEntries(posts)}
		</React.Fragment>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	var posts = {};
	await axios
		.get('https://simple-blog-api.crew.red/posts')
		.then(async function(response) {
			posts = response.data;
		})
		.catch(function(error) {
			console.log(error);
		});

	return {
		props: { posts }
	};
}
