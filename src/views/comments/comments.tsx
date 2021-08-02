import { Fragment } from "react";
import { Button } from "../../common/button/button";
import { Spinner } from "../../common/spinner/spinner";
import { Comment } from "../../components/comment/comment";
import { AddComment } from "../../components/addComment/AddComment";
import { ErrorTryAgain } from "../../components/errorTryAgain/errorTryAgain";
import "./comments.css";

export const Comments = ({
	errorComments,
	loadingComments,
	comments,
	selectedPost,
	getCommentsById,
	closeComments,
	addComment,
}: any) => (
	<div className={`comments--main--container ${selectedPost ? "open" : ""}`}>
		{loadingComments ? (
			<Spinner />
		) : !loadingComments && errorComments ? (
			<ErrorTryAgain
				cancelOperation={() => closeComments()}
				title={"Error Comentarios. Intente otra vez"}
				onClick={() => getCommentsById(selectedPost)}
			/>
		) : !loadingComments && comments && selectedPost ? (
			<Fragment>
				<div className="comments--main--container--close">
					<Button onClick={() => closeComments()} disabled={false}>
						Cerrar
					</Button>
				</div>
				<div className="comments--main--container--list">
					{comments[selectedPost].map(({ id, ...args }: any) => (
						<Comment key={id} {...args} />
					))}
				</div>
				<div className="comments--main--container--form">
					<AddComment selectedPost={selectedPost} addComment={addComment} />
				</div>
			</Fragment>
		) : (
			<Fragment />
		)}
	</div>
);
