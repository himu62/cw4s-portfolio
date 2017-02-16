import * as React from "react";
import {bindActionCreators, ActionCreator} from "redux";
import {connect} from "react-redux";
import classnames from "classnames";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import {Layout} from "../modules/layout";
import {State} from "../reducer";


interface Props {
	isDrawerOpened: boolean;
	isDrawerDocked: boolean;

	openDrawer: ActionCreator<any>;
	closeDrawer: ActionCreator<any>;
	dockDrawer: ActionCreator<any>;
	undockDrawer: ActionCreator<any>;
}

class App extends React.Component<Props, {}> {
	// window resize event handling
	updateDimensions = () => {
		if(window.innerWidth > 500) {
			this.props.dockDrawer();
		} else {
			this.props.undockDrawer();
		}
	};
	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	render() {
		const classname = classnames("app", {"drawer-docked": this.props.isDrawerDocked});

		return (
			<div className={classname}>
				<AppBar
					title="CW4S Portfolio"
					showMenuIconButton={!this.props.isDrawerDocked}
					onLeftIconButtonTouchTap={this.props.openDrawer}
				/>
				<Drawer
					open={this.props.isDrawerOpened}
					docked={this.props.isDrawerDocked}
					onRequestChange={this.props.closeDrawer}>
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
		isDrawerOpened: state.layout.isDrawerOpened,
		isDrawerDocked: state.layout.isDrawerDocked
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		openDrawer: Layout.openDrawer,
		closeDrawer: Layout.closeDrawer,
		dockDrawer: Layout.dockDrawer,
		undockDrawer: Layout.undockDrawer
	}, dispatch);
};

const _App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
export default _App;
