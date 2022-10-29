import { useSelector, useDispatch } from "react-redux";
import Profile from "../components/Profile";
import Login from "../components/Login";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { onLogin } from "../redux/loginSlice";
import userAuth from "../helpers/userAuth";

export default function Home() {
	const dispatch = useDispatch();
	const login = onLogin();
	useEffect(() => {
		if (
			userAuth(
				localStorage.getItem("userName"),
				localStorage.getItem("password")
			)
		) {
			dispatch(login);
		}
	}, []);
	const isLoggedIn = useSelector<RootState, boolean>(
		(state) => state.login.isLoggedIn
	);
	return (
		<div className="container">{isLoggedIn ? <Profile /> : <Login />}</div>
	);
}
