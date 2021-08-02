import { useState } from "react";
import { Input } from "../../common/input/input";
import { initialState } from "../../constants/constants";
import { Button } from "../../common/button/button";
import "./addComment.css";

interface FormComment {
	name: string;
	email: string;
	body: string;
}

export const AddComment = ({ selectedPost, addComment }: any) => {
	const [data, setData] = useState<FormComment>(initialState);
	const { name, email, body } = data;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setData({ ...data, [e.target.name]: e.target.value });

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addComment({ selectedPost, name, email, body });
		setData({ name: "", email: "", body: "" });
	};

	const disabled = name === "" || email === "" || body === "";

	return (
		<div className="addComment--main--container">
			<form onSubmit={onSubmit}>
				<div className="addComment--main--container--field">
					<Input
						placeholder="Name..."
						type="text"
						name="name"
						value={data.name}
						onChange={onChange}
					/>
				</div>
				<div className="addComment--main--container--field">
					<Input
						placeholder="Email..."
						type="text"
						name="email"
						value={data.email}
						onChange={onChange}
					/>
				</div>
				<div className="addComment--main--container--field">
					<Input
						placeholder="Body..."
						type="text"
						name="body"
						value={data.body}
						onChange={onChange}
					/>
				</div>
				<div className="addComment--main--container--field">
					<Button disabled={disabled} type="submit">
						COMENTAR
					</Button>
				</div>
			</form>
		</div>
	);
};
