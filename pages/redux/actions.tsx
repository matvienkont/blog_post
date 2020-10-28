interface IFetchItems {
	type: string;
	payload?: {};
}

export const fetchItems = (fetched_posts): IFetchItems => {
	return {
		type: 'FETCH_POSTS',
		payload: fetched_posts
	};
};
