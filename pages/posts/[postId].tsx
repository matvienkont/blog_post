import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default () => {
	const router = useRouter();
	const { postId } = router.query;

	const value = useSelector((state) => state);
	console.log(value.posts);

	return <p>HELLo</p>;
};
