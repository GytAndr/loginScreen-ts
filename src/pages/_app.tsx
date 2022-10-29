import type { AppProps } from "next/app";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "../SASS/globals.sass";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
