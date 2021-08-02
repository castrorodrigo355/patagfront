import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPosts } from "../posts/actions";
import App from "../views/app/App";

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ getPosts: () => getPosts() }, dispatch);

export type ContainerProps = {
	getPosts(): void;
};

const AppContainer = (props: ContainerProps) => <App {...props} />;

export default connect(null, mapDispatchToProps)(AppContainer);
