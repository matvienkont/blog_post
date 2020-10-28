import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { State } from "./redux/store";
import axios from "axios";
import { fetchItems } from "./redux/actions";
import { InferGetStaticPropsType } from 'next'
import { LiElement, Entry, UlWrapper } from "./styles/FeedPage";
import React from "react";
import { Header } from "./components/Header";
import Link from "next/link";
import styled from "styled-components";

interface IPosts {
	id: number,
	title?: string,
	body?: string
}

export default function Home({ posts }) 
{
	const dispatch = useDispatch();
	dispatch(fetchItems(posts));

	return (
        <React.Fragment>
            <Header />
            <UlWrapper>
                {posts.map((post: IPosts) => (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            <Entry>
                                <LiElement key={post.id}>{post.title}</LiElement>
                            </Entry>
                        </Link>
                    </div>
                ))}
            </UlWrapper>
        </React.Fragment>
	);
}

export async function getStaticProps(context) {
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
  