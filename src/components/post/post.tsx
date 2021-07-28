import { TPost } from "../../posts/types";
import { Content } from "../content/content";
import { urlPost } from "../../constants/constants";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../comments";
import { bindActionCreators } from "redux";
import "./post.css";

export const Post = ({ id, title, body }: TPost) => {
	const dispatch = useDispatch();
	const { getCommentsById } = bindActionCreators(actionCreators, dispatch);

	const selectPost = () => getCommentsById(id);

	return (
		<div className="post--main--container" onClick={selectPost}>
			<Content urlImage={urlPost} main={title} body={body} />
		</div>
	);
};
