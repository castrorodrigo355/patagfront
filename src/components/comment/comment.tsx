import { TComment } from "../../redux/comments/types";
import { urlComment } from "../../constants/constants";
import { Intereaction } from "../interaction/interaction";
import "./comment.css";

export const Comment = ({ name, body }: TComment) => {
	return (
		<div className="comment--main--container">
			<div className="comment--main--container--profile">
				<div className="comment--main--container--profile--image">
					<img src={urlComment} alt="..." />
				</div>
			</div>
			<div className="comment--main--container--detail">
				<strong>{name}</strong>
				{body}
			</div>
			<div className="comment--main--container--like">
				<Intereaction />
			</div>
		</div>
	);
};
