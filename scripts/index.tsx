import * as React from "react";
import {render} from "react-dom";
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import Root from "./containers/Root";


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const el = document.querySelector("#app");
if(el) {
	render(<Root />, el);
}
