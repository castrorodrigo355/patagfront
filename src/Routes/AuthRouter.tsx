import { Switch, Route, Redirect } from "react-router-dom";
import { Register } from "../views/register/register";
import LoginContainer from "../containers/LoginContainer";

export const AuthRouter = () => (
	<div className="auth--main--container">
		<Switch>
			<Route exact path="/auth/login" component={LoginContainer} />
			<Route exact path="/auth/register" component={Register} />
			<Redirect to="/auth/login" />
		</Switch>
	</div>
);
