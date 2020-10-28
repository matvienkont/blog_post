import { createStore, applyMiddleware } from 'redux';
import { addReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper';

export type Entry = {
	id: number;
	title?: string;
	body?: string;
};

export interface State {
	posts: Entry[] | {};
}

const makeStore: MakeStore<State> = (context: Context) =>
	createStore(addReducer, composeWithDevTools(applyMiddleware()));

export const wrapper = createWrapper<State>(makeStore, { debug: true });
