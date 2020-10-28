import React from 'react';
import Link from 'next/link';

export const Header = () => {
	return (
		<div className="headerWrapper">
			<ul>
				<li>
					<Link href="/">
						<a>Feed</a>
					</Link>
				</li>
				<li>
					<Link href="/posts/new">
						<a>Add Post</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
