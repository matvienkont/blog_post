import '../styles/globals.css';
import App from 'next/app';
import "../styles/Feed.css";
import "../styles/Header.css";
import { Provider } from "react-redux"
import withRedux from "next-redux-wrapper";
import {wrapper} from './redux/store';

import type { AppProps , AppContext } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
			<Component {...pageProps} />
	);
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};


export default wrapper.withRedux(MyApp);
