import * as React from "react";
import {bindActionCreators, ActionCreator} from "redux";
import {connect} from "react-redux";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import {Layout} from "../modules/layout";
import {State} from "../reducer";


interface Props {
	isDrawerOpened: boolean;

	openDrawer: ActionCreator<any>;
}

class App extends React.Component<Props, {}> {
	render() {
		return (
			<div className="app">
				<AppBar
					title="CW4S Portfolio"
					onLeftIconButtonTouchTap={this.props.openDrawer}
				/>
				<Drawer open={this.props.isDrawerOpened}>
					<MenuItem>hoge</MenuItem>
					<MenuItem>hoge2</MenuItem>
					<MenuItem>hoge3</MenuItem>
				</Drawer>
			</div>
		);
	}
}

const mapStateToProps = (state: State) => {
	return {
		isDrawerOpened: state.layout.isDrawerOpened
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		openDrawer: Layout.openDrawer
	}, dispatch);
};

const _App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
export default _App;
