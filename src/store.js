import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-list/ticketsSlice";
import loginReducer from "./components/login/loginSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
  },
});

export default store;
