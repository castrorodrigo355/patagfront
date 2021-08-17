import { connect } from "react-redux";
import { Action } from "../redux/auth/types";
import { Dispatch, bindActionCreators } from "redux";
import { initLogin } from "../redux/auth/actions";
import { Login } from "../views/login/login";

const mapStateToProps = (state: any) => state.post;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	initLogin: bindActionCreators(initLogin, dispatch),
});

const LoginContainer = (props: any) => <Login {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
