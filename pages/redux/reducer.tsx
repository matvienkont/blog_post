interface counterStateIntf {
	posts: [];
}

const initialState = {
	posts: []
};

type Action = { type: 'FETCH_POSTS'; payload?: number };

export const addReducer = (state: counterStateIntf = initialState, { type, payload }: Action) => {
	switch (type) {
		case 'FETCH_POSTS': {
			return { ...state, posts: payload };
		}
		default: {
			return state;
		}
	}
};
