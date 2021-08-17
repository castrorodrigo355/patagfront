import { Switch, Route, Redirect } from "react-router-dom";
import AppContainer from "../containers/AppContainer";

export const AppRouter = () => {
	return (
		<Switch>
			<Route exact path="/" component={AppContainer} />
			<Redirect to="/" />
		</Switch>
	);
};
