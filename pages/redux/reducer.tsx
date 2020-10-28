import { State } from './store';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	posts: []
};

type Action = { type: string; payload?: number };

export const addReducer = (state: State = initialState, { type, payload }: Action) => {
	switch (type) {
		case HYDRATE:
			return {
				...state
			};
		case 'FETCH_POSTS': {
			return { ...state, posts: payload };
		}
		default: {
			return state;
		}
	}
};
