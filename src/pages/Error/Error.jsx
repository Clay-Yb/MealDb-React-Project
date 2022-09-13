import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
const Error = () => {
	return (
		<section>
			<div className="error_container container">
				<h2>Oops, It's an dead end</h2>
				<Link to="/">Back Home</Link>
			</div>
		</section>
	);
};

export default Error;
