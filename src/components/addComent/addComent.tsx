import { useState } from "react";
import { bindActionCreators } from "redux";
import { RootState } from "../../store/store";
import { actionCreators } from "../../comments";
import { Input } from "../../common/input/input";
import { createComment } from "../../helpers/helpers";
import { useSelector, useDispatch } from "react-redux";
import { initialState } from "../../constants/constants";
import "./addComent.css";
import { Button } from "../../common/button/button";

interface FormComment {
	name: string;
	email: string;
	body: string;
}

export const AddComent = () => {
	const dispatch = useDispatch();
	const { addComment } = bindActionCreators(actionCreators, dispatch);
	const { selectedPost } = useSelector((state: RootState) => state.comment);

	const [data, setData] = useState<FormComment>(initialState);
	const { name, email, body } = data;

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
		setData({ ...data, [e.target.name]: e.target.value });

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addComment(createComment(selectedPost, data));
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
						ADD COMMENT
					</Button>
				</div>
			</form>
		</div>
	);
};
