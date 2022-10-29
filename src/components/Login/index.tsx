import React from "react";
import LoginBtn from "./LoginBtn";
import LoginInputs from "./LoginInputs";
import LoginTitle from "./LoginTitle";

function Login() {
	return (
		<div className="login">
			<LoginTitle />
			<LoginInputs />
			<LoginBtn />
		</div>
	);
}

export default Login;
