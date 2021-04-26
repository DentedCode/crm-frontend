import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { UserVerification } from "./pages/user-verification/UserVerification.page";
import { Entry } from "./pages/entry/Entry.page";
import { PasswordOtpForm } from "./pages/password-reset/PasswordOtpForm.page";
import { Registration } from "./pages/registration/Registration.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Entry />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/password-reset">
						<PasswordOtpForm />
					</Route>
					<Route exact path="/verification/:_id/:email">
						<UserVerification />
					</Route>

					<PrivateRoute exact path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute exact path="/add-ticket">
						<AddTicket />
					</PrivateRoute>
					<PrivateRoute exact path="/ticket/:tId">
						<Ticket />
					</PrivateRoute>
					<PrivateRoute exact path="/tickets">
						<TicketLists />
					</PrivateRoute>

					<Route path="*">
						<h1>404 Page not found</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
