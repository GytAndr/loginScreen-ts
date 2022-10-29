import React from "react";

function Profile() {
	return (
		<div className="profile">
			<p className="profile__success">Sign up successful!</p>
			<p className="profile__welcome">
				Welcome back{" "}
				<span className="profile__userName">
					{localStorage.getItem("userName")}
				</span>
			</p>
		</div>
	);
}

export default Profile;
