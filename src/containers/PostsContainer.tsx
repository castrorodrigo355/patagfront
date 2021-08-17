import { connect } from "react-redux";
import { Action } from "../redux/comments/types";
import { Posts } from "../views/posts/posts";
import { Dispatch, bindActionCreators } from "redux";
import { getPosts } from "../redux/posts/actions";
import { getCommentsById } from "../redux/comments/actions";

const mapStateToProps = (state: any) => state.post;

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	getPosts: bindActionCreators(getPosts, dispatch),
	getCommentsById: bindActionCreators(getCommentsById, dispatch),
});

const PostsContainer = (props: any) => <Posts {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
