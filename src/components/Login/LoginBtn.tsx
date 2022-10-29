import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import emailValidator from "../../helpers/emailValidator";
import userAuth from "../../helpers/userAuth";
import {
	setErrorMesage,
	onLogin,
	cacheCredentials,
} from "../../redux/loginSlice";

function LoginBtn() {
	const dispatch = useDispatch();
	const email = useSelector<RootState, string>((state) => state.login.userName);
	const password = useSelector<RootState, string>(
		(state) => state.login.password
	);
	function loginHandler() {
		if (email.trim() === "") {
			dispatch(setErrorMesage("Email cannot be blank"));
			return;
		}
		if (!emailValidator(email)) {
			dispatch(setErrorMesage("Please enter valid email format"));
			return;
		}
		if (!emailValidator(email)) {
			dispatch(setErrorMesage("Please enter valid email format"));
			return;
		}
		if (password.trim() === "") {
			dispatch(setErrorMesage("Password cannot be blank"));
			return;
		}

		if (!userAuth(email, password)) {
			dispatch(
				setErrorMesage(
					"Sorry, your email or password is incorrect. Please try again"
				)
			);
			return;
		}
		if (userAuth(email, password)) {
			dispatch(onLogin());
			dispatch(cacheCredentials());
		}
	}
	return (
		<>
			<button className="login__btn" onClick={loginHandler}>
				Login
			</button>
		</>
	);
}

export default LoginBtn;
