import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-list/ticketsSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import newTicketReducer from "./components/add-ticket-form/addTicketSlicer";
import registrationReducer from "./components/registration-form/userRegestrationSlice";
import passwordReducer from "./components/password-reset/passwordSlice";

const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		login: loginReducer,
		user: userReducer,
		openTicket: newTicketReducer,
		registration: registrationReducer,
		password: passwordReducer,
	},
});

export default store;
