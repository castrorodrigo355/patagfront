import { connect } from "react-redux";
import {
	closeComments,
	addComment,
	getCommentsById,
} from "../redux/comments/actions";
import { Dispatch, bindActionCreators } from "redux";
import { Comments } from "../views/comments/comments";

const mapStateToProps = (state: any) => state.comment;
const mapDispatchToProps = (dispatch: Dispatch) => ({
	getCommentsById: bindActionCreators(getCommentsById, dispatch),
	closeComments: bindActionCreators(closeComments, dispatch),
	addComment: bindActionCreators(addComment, dispatch),
});

const CommentsContainer = (props: any) => <Comments {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
