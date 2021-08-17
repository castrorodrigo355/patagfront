import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPosts } from "../redux/posts/actions";
import App from "../views/app/App";

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators({ getPosts: () => getPosts() }, dispatch);

export type ContainerProps = {};

const AppContainer = (props: ContainerProps) => <App {...props} />;

export default connect(null, mapDispatchToProps)(AppContainer);
