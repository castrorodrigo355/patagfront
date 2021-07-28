import { useEffect } from "react";
import { actionCreators } from "./posts";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Posts } from "./views/posts/posts";
import { Comments } from "./views/comments/comments";
import "./App.css";

function App() {
	const dispatch = useDispatch();
	const { getPosts } = bindActionCreators(actionCreators, dispatch);

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
	}, []);

	return (
		<div className="app--main--container">
			<Posts />
			<Comments />
		</div>
	);
}

export default App;
