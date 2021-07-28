import "./button.css";

export const Button = ({ disabled, children, type }: any) => {
	return (
		<button
			disabled={disabled}
			className={`button--main--container ${
				disabled ? "disabled--container" : ""
			}`}
			type={type}
		>
			{children}
		</button>
	);
};
