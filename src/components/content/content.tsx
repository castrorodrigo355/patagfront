import { Image } from "../image/image";
import "./content.css";

type ArgsContent = {
	urlImage: string;
	main: string;
	body: string;
};

export const Content = ({ urlImage, main, body }: ArgsContent) => {
	return (
		<div className="content--main--container">
			<div className="content--main--container--image">
				<Image urlImage={urlImage} />
			</div>
			<div className="content--main--container--content">
				<div className="content--main--container--content--main">{main}</div>
				<div className="content--main--container--content--body">{body}</div>
			</div>
		</div>
	);
};
