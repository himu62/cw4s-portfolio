import * as React from "react";
import {render} from "react-dom";

import App from "./App";


const root = document.querySelector("#app");
if(root) {
	render(<App />, root);
}
