import { useEffect } from "react";
import PublicRoute from "../Routes/PublicRoute";
import PrivateRoute from "../Routes/PrivateRoute";
import { AuthRouter } from "../Routes/AuthRouter";
import { AppRouter } from "../Routes/AppRouter";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

const Main: React.FC = ({ auth: authenticated }: any) => {
	const setAvailableArea = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setAvailableArea();
		window.addEventListener("resize", setAvailableArea);
		return () => window.removeEventListener("resize", setAvailableArea);
	});

	return (
		<Router>
			<div className="app--main--container">
				<Switch>
					<PublicRoute
						path="/auth"
						isAuthenticated={authenticated}
						component={AuthRouter}
					/>
					<PrivateRoute
						path="/"
						isAuthenticated={authenticated}
						component={AppRouter}
					/>
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};

export default Main;
