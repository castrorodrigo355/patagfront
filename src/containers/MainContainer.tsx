import { connect } from "react-redux";
import Main from "./Main";

const mapStateToProps = (state: any) => {
	const authState = state.auth;
	const { loadingAuth, errorAuth, auth } = authState;

	return { loadingAuth, errorAuth, auth };
};

const MainContainer = (props: any) => <Main {...props} />;

export default connect(mapStateToProps)(MainContainer);
