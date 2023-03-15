import React from "react";
import { Route, Redirect } from "react-router-dom";
/**
 * Example:
 * roles: "USER,TEC,ADMIN,MOD"
 * **/
const AuthRoute = ({ component: Component, roles, ...rest }) => {
	if (!roles) roles = "USER";
	roles = roles.split(",");
	const isLoggedIn = true; // Asumiendo que hay una función que verifica si el usuario está autenticado
	const userRole = "ADMIN"; // Asumiendo que hay una función que devuelve el rol del usuario
	// if children allow multiple routes

	return (
		<Route
			{...rest}
			render={props => {
				if (isLoggedIn && roles.includes(userRole)) {
					return <Component {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: "/",
								state: { from: props.location }
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default AuthRoute;
