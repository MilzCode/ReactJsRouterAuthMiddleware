import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AuthRoute from "./helpers/auth";

function App() {
	const Home = () => <h1>Home</h1>;
	const Login = () => <h1>Login</h1>;
	const Admin = () => <h1>Admin</h1>;
	const Mod = () => <h1>Mod</h1>;
	const Tec = () => <h1>Tec</h1>;
	const NotFound = () => <h1>404 Not Found</h1>;

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />

				{/* Estas rutas están protegidas por el middleware Auth y solo permiten el acceso a TEC */}
				<AuthRoute path="/tec" component={Tec} roles="TEC" />
				<Route path="/admin" component={Admin} />
				<Route path="/mod" component={Mod} />
				<Route path="/404" component={NotFound} />
				<Redirect to="/404" />
			</Switch>
		</Router>
	);
}

export default App;
