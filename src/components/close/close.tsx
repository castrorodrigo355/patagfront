import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../comments";
import "./close.css";

export const Close = () => {
	const dispatch = useDispatch();
	const { closeComments } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className="close--main--container">
			<div
				className="close--main--container--icon"
				onClick={() => closeComments()}
			>
				x
			</div>
		</div>
	);
};
