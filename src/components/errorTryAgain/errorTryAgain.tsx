import "./errorTryAgain.css";
import loading from "../../icons/loading.png";
import { Button } from "../../common/button/button";

export const ErrorTryAgain = ({ title, onClick, cancelOperation }: any) => (
	<div className="error--try--again--main--container">
		<div
			className="error--try--again--main--container--image"
			onClick={onClick}
		>
			<img src={loading} alt="..." />
		</div>
		<div className="error--try--again--main--container--title">{title}</div>
		{cancelOperation && (
			<div className="error--try--again--main--container--title">
				<Button type="button" disabled={false} onClick={cancelOperation}>
					Cancelar
				</Button>
			</div>
		)}
	</div>
);
