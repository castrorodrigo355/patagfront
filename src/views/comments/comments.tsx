import { Close } from "../../components/close/close";
import { Comment } from "../../components/comment/comment";
import { AddComent } from "../../components/addComent/addComent";
import { Spinner } from "../../common/spinner/spinner";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import "./comments.css";

export const Comments = () => {
	const state = useSelector((state: RootState) => state.comment);
	const { errorComments, loadingComments, comments, selectedPost } = state;

	return (
		<div
			className={`comments--main--container ${
				selectedPost ? "comments--opened" : ""
			}`}
		>
			{loadingComments ? (
				<Spinner />
			) : (
				<>
					<div className="comments--main--container--close">
						<Close />
					</div>
					<div className="comments--main--container--list">
						{comments.map((comment: any) => (
							<Comment key={comment.id} {...comment} />
						))}
					</div>
					<div className="comments--main--container--input">
						<AddComent />
					</div>
				</>
			)}
		</div>
	);
};
