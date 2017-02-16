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
	export const closeDrawer: ActionCreator<LayoutAction> = () => {
		return {type: "LAYOUT_DRAWER_CLOSE"};
	};
	export const toggleDrawer: ActionCreator<LayoutAction> = () => {
		return {type: "LAYOUT_DRAWER_TOGGLE"};
	};
	export const dockDrawer: ActionCreator<LayoutAction> = () => {
		return {type: "LAYOUT_DRAWER_DOCK"};
	};
	export const undockDrawer: ActionCreator<LayoutAction> = () => {
		return {type: "LAYOUT_DRAWER_UNDOCK"};
	};
	export const toggleDockDrawer: ActionCreator<LayoutAction> = () => {
		return {type: "LAYOUT_DRAWER_DOCK_TOGGLE"};
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

		case "LAYOUT_DRAWER_DOCK":
			return {...state, isDrawerOpened: true, isDrawerDocked: true};

		case "LAYOUT_DRAWER_UNDOCK":
			return {...state, isDrawerOpened: false, isDrawerDocked: false};

		case "LAYOUT_DRAWER_DOCK_TOGGLE":
			return {...state, isDrawerOpened: !state.isDrawerOpened, isDrawerDocked: !state.isDrawerDocked};

		default:
			return state;
	}
}
