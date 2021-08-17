import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
	component: Component,
	isAuthenticated,
	...rest
}: any) => (
	<Route
		{...rest}
		component={(props: any) =>
			isAuthenticated ? <Component {...props} /> : <Redirect to="/auth/login" />
		}
	/>
);

export default PrivateRoute;
