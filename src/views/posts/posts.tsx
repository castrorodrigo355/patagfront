import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Post } from "../../components/post/post";
import { Spinner } from "../../common/spinner/spinner";
import "./posts.css";

export const Posts = () => {
	const state = useSelector((state: RootState) => state.post);
	const { errorPosts, loadingPosts, posts } = state;

	if (loadingPosts) {
		return (
			<div className="posts--main--container">
				<Spinner />
			</div>
		);
	}
	return (
		<div className="posts--main--container">
			{posts && posts.map((post) => <Post key={post.id} {...post} />)}
		</div>
	);
};
