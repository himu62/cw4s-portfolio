import {ActionCreator} from "redux";


interface LayoutAction {
	type: string;
}

export interface LayoutState {
	isDrawerOpened: boolean;
	isDrawerDocked: boolean;
}

// action creators for layout
export namespace Layout {
	export const openDrawer: ActionCreator<LayoutAction> = () => {
		return {type: "LAYOUT_DRAWER_OPEN"};
	};
}


const initialState: LayoutState = {
	isDrawerOpened: false,
	isDrawerDocked: false
};

export const layoutReducer = (state: LayoutState = initialState, action: LayoutAction): LayoutState => {
	switch(action.type) {
		case "LAYOUT_DRAWER_OPEN":
			return {...state, isDrawerOpened: true};

		case "LAYOUT_DRAWER_CLOSE":
			return {...state, isDrawerOpened: false};

		case "LAYOUT_DRAWER_TOGGLE":
			return {...state, isDrawerOpened: !state.isDrawerOpened};

		case "LAYOUT_DRAWER_DOCK_ENABLE":
			return {...state, isDrawerDocked: true};

		case "LAYOUT_DRAWER_DOCK_DISABLE":
			return {...state, isDrawerDocked: false};

		case "LAYOUT_DRAWER_DOCK_TOGGLE":
			return {...state, isDrawerDocked: !state.isDrawerDocked};

		default:
			return state;
	}
}
