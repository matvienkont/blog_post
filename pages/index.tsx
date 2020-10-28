import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { State } from "./redux/store";
import axios from "axios";
import { fetchItems } from "./redux/actions";
import { InferGetStaticPropsType } from 'next'
import React from "react";
import { Header } from "./components/Header/Header";
import Link from "next/link";
import styled from "styled-components";
import { returnEntries } from "./components/Entry/Entry";


export default function Home({ posts }) 
{
	const dispatch = useDispatch();
	dispatch(fetchItems(posts));

	

	return (
        <React.Fragment>
            <Header />
				{returnEntries(posts)}
        </React.Fragment>
	);
}

export async function getServerSideProps(context) {
	var posts = {};
	await axios.get('https://simple-blog-api.crew.red/posts')
	.then(async function (response) {
		posts = response.data;
	})
	.catch(function (error) {
		console.log(error);
	})

	return {
		props: { posts, }
	}
}
  
