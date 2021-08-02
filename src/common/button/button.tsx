import "./button.css";

export const Button = ({ disabled, children, type, onClick }: any) => {
	return (
		<button
			disabled={disabled}
			className={`button--main--container ${
				disabled ? "disabled--container" : ""
			}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
