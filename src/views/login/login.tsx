import { useState } from "react";
import { Button } from "../../common/button/button";
import { Input } from "../../common/input/input";
import "./login.css";

interface FormComment {
	email: string;
	password: string;
}

export const Login = ({ initLogin }: any) => {
	const initialState = {
		email: "",
		password: "",
	};

	const [data, setData] = useState<FormComment>(initialState);
	const { email, password } = data;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setData({ ...data, [e.target.name]: e.target.value });

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		initLogin();
		setData({ email: "", password: "" });
	};

	const disabled = email === "" || password === "";

	return (
		<div className="login--main--container">
			<form onSubmit={onSubmit}>
				<div className="login--main--container--field">
					<Input
						placeholder="Email..."
						type="text"
						name="email"
						value={data.email}
						onChange={onChange}
					/>
				</div>
				<div className="login--main--container--field">
					<Input
						placeholder="Password"
						type="password"
						name="password"
						value={data.password}
						onChange={onChange}
					/>
				</div>
				<div className="login--main--container--field">
					<Button disabled={disabled} type="submit">
						Login
					</Button>
				</div>
			</form>
		</div>
	);
};
