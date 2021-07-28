import { ChangeEventHandler } from "react";
import "./input.css";

type TInput = {
	placeholder: string;
	type: string;
	name: string;
	defaultValue?: string;
	value: string;
	onChange: ChangeEventHandler;
};

export const Input = ({
	placeholder,
	type,
	name,
	defaultValue,
	value,
	onChange,
}: TInput) => (
	<div className="input--main--container">
		<input
			placeholder={placeholder}
			type={type}
			name={name}
			defaultValue={defaultValue}
			value={value}
			onChange={onChange}
		/>
	</div>
);
