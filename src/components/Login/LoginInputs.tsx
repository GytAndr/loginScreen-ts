import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { onUserChange, onEmailChange } from "../../redux/loginSlice";

function LoginInputs() {
	const isError = useSelector((state: RootState) => state.login.error);
	const errorMessage = useSelector(
		(state: RootState) => state.login.errorMessage
	);
	const dispatch = useDispatch();
	return (
		<div className="login__inputs">
			<p className={`login__inputs-error ${isError ? "active" : ""}`}>
				{errorMessage}
			</p>
			<input
				className="login__inputs-email"
				placeholder="Username or E-mail"
				onChange={(e) => dispatch(onUserChange(e.target.value))}
			/>
			<input
				className="login__inputs-password"
				type="password"
				placeholder="Password"
				onChange={(e) => dispatch(onEmailChange(e.target.value))}
			/>
		</div>
	);
}

export default LoginInputs;
