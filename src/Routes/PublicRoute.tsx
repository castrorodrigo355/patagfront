import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}: any) => (
	<Route
		{...rest}
		component={(props: any) =>
			!isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
		}
	/>
);

export default PublicRoute;
