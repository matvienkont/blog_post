import React from 'react';

import Link from 'next/link';
import {
	LiElement,
	BodyContainer,
	UlWrapper,
	CommentsWrapper,
	CommentContainer,
	EntryContainer
} from './Entry_styles/Entry_styles';

type IPost = {
	id: number;
	title?: string;
	body?: string;
	comments?: any;
};

type IComment = {
	body: string;
	postId: number;
	id: number;
};

export const returnEntries = (posts: IPost[]) => {
	console.log(posts);
	return (
		<UlWrapper>
			{posts.map((post: IPost) => {
				if (!post.title || !post.body) return;
				else {
					return (
						<React.Fragment>
							<div key={post.id}>
								<Link href="/posts/[postId]" as={`/posts/${post.id}`}>
									<EntryContainer>
										<LiElement>{post.title}</LiElement>
										<BodyContainer>{post.body}</BodyContainer>
									</EntryContainer>
								</Link>
							</div>
							<CommentsWrapper>
								{post.comments &&
									post.comments.map((comment: IComment) => (
										<CommentContainer>{comment.body}</CommentContainer>
									))}
							</CommentsWrapper>
						</React.Fragment>
					);
				}
			})}
		</UlWrapper>
	);
};
