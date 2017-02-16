/// <reference path="../../node_modules/@types/node/index.d.ts" />

import * as React from "react";
import {createStore, compose} from "redux";
import {Provider} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import reducer from "../reducer";
import App from "./App";


// development環境ならChrome拡張機能Redux Devtoolsを有効にする
const enhancers = (() => {
	interface ExWindow extends Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
	}

	if(
		process.env.ENV !== "production" &&
		typeof window === "object" &&
		typeof (window as ExWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function"
	) {
		return (window as ExWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	}
	return compose;
})();

const store = createStore(
	reducer,
	enhancers()
);


export default class Root extends React.Component<{}, {}> {
	render() {
		return (
			<Provider store={store}>
				<MuiThemeProvider>
					<App />
				</MuiThemeProvider>
			</Provider>

		);
	}
}
