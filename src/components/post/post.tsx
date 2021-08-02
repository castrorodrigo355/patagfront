import { Image } from "../image/image";
import { urlPost } from "../../constants/constants";
import { Intereaction } from "../interaction/interaction";
import "./post.css";

export const Post = ({ title, body, onClick }: any) => (
	<div className="post--main--container">
		<div className="post--main--container--image" onClick={onClick}>
			<Image urlImage={urlPost} />
		</div>
		<div className="post--main--container--interaction">
			<Intereaction countLikes />
		</div>
		<div className="post--main--container--detail">
			<div className="post--main--container--detail--title">{title}</div>
			<div className="post--main--container--detail--body">{body}</div>
		</div>
	</div>
);
