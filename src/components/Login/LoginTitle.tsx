import React from "react";

function LoginTitle() {
	return (
		<div className="login__title">
			<p className="login__title-header" data-test="title header">
				Login
			</p>
			<p className="login__title-message" data-test="title message">
				Please enter you Login and your Password
			</p>
		</div>
	);
}

export default LoginTitle;
