import { connect } from "react-redux";
import { Action } from "../comments/types";
import { Posts } from "../views/posts/posts";
import { Dispatch, bindActionCreators } from "redux";
import { getPosts } from "../posts/actions";
import { getCommentsById } from "../comments/actions";

const mapStateToProps = (state: any) => state.post;
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	getPosts: bindActionCreators(getPosts, dispatch),
	getCommentsById: bindActionCreators(getCommentsById, dispatch),
});

const PostsContainer = (props: any) => <Posts {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
