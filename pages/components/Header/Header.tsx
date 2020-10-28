import React from 'react';
import Link from 'next/link';
import { HeaderWrapper, UlWrapper, List, NavLink } from './Header_styles/styles';

export const Header = () => {
	return (
		<HeaderWrapper>
			<UlWrapper>
				<List>
					<Link href="/">
						<NavLink>Feed</NavLink>
					</Link>
				</List>
				<List>
					<Link href="/posts/new">
						<NavLink>Add Post</NavLink>
					</Link>
				</List>
			</UlWrapper>
		</HeaderWrapper>
	);
};
