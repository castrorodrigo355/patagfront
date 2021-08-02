import { useEffect } from "react";
import { ContainerProps } from "../../containers/AppContainer";
import PostsContainer from "../../containers/PostsContainer";
import CommentsContainer from "../../containers/CommentsContainer";
import "./App.css";

const App: React.FC<ContainerProps> = ({ getPosts }) => {
	const setAvailableArea = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setAvailableArea();
		window.addEventListener("resize", setAvailableArea);
		return () => window.removeEventListener("resize", setAvailableArea);
	});

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className="app--main--container">
			<PostsContainer />
			<CommentsContainer />
		</div>
	);
};

export default App;
