import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./pages/ticket-list/ticketsSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export default store;
