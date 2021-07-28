import React from "react";
import "./spinner.css";

export const Spinner = () => {
	return (
		<div className="container-spinner">
			<div className="lds-spinner">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
