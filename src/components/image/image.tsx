import "./image.css";

export type ArgsImage = {
	urlImage: string;
};

export const Image = ({ urlImage }: ArgsImage) => {
	return (
		<div className="image--main--container">
			<img src={urlImage} alt="..." />
		</div>
	);
};
