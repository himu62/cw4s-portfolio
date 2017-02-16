import {combineReducers} from "redux";

import {LayoutState, layoutReducer as layout} from "./modules/layout";


const reducer = combineReducers({
	layout
});
export default reducer;

export interface State {
	layout: LayoutState;
}
