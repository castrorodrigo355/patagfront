import { ContainerProps } from "../../containers/AppContainer";
import PostsContainer from "../../containers/PostsContainer";
import CommentsContainer from "../../containers/CommentsContainer";
import "./App.css";

const App: React.FC<ContainerProps> = () => (
	<div className="app--main--container">
		<PostsContainer />
		<CommentsContainer />
	</div>
);

export default App;
