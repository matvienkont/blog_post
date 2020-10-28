import React from 'react';
import Link from 'next/link';
import { HeaderWrapper, UlWrapper, List } from './Header_styles/styles';

export const Header = () => {
	return (
		<HeaderWrapper>
			<UlWrapper>
				<List>
					<Link href="/">
						<a className="link">Feed</a>
					</Link>
				</List>
				<List>
					<Link href="/posts/new">
						<a className="link">Add Post</a>
					</Link>
				</List>
			</UlWrapper>
		</HeaderWrapper>
	);
};
