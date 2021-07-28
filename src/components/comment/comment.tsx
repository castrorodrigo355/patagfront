import { Content } from "../content/content";
import { TComment } from "../../comments/types";
import { urlComment } from "../../constants/constants";
import "./comment.css";

export const Comment = ({ name, body }: TComment) => (
	<div className="comment--main--container">
		<Content urlImage={urlComment} main={name} body={body} />
	</div>
);
