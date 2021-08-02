import { useState } from "react";
import heart from "../../icons/heart.png";
import heartSolid from "../../icons/heart-solid.png";
import "./interaction.css";

const random = (a: number, b: number): number =>
	Math.floor(Math.random() * (b - a)) + a;

export const Intereaction = ({ countLikes }: any) => {
	const [liked, setLiked] = useState<boolean>(false);
	const [likes, setLikes] = useState<number>(random(20, 100));
	const clickLike = () => {
		if (liked) {
			setLikes(likes - 1);
		} else {
			setLikes(likes + 1);
		}
		setLiked(!liked);
	};

	return (
		<div className="interaction--main--container" onClick={clickLike}>
			<div className="interaction--main--container--image">
				<img src={liked ? heartSolid : heart} alt="..." />
			</div>
			{countLikes && (
				<div className="interaction--main--container--count">
					{`${likes} Me gusta`}
				</div>
			)}
		</div>
	);
};
