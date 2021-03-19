import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
	showUpdatePassForm: false,
	email: "",
};
const passwordReset = createSlice({
	name: "passwordReset",
	initialState,
	reducers: {
		otpReqPending: state => {
			state.isLoading = true;
		},
		otpReqSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.message = payload.message;
			state.email = payload.email;
			state.showUpdatePassForm = true;
		},
		updatePassSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.message = payload;
			// state.showOtpForm = false;
		},
		otpReqFail: (state, { payload }) => {
			state.isLoading = false;
			state.status = "error";
			state.message = payload;
		},
	},
});

const { reducer, actions } = passwordReset;

export const {
	otpReqPending,
	otpReqSuccess,
	otpReqFail,
	updatePassSuccess,
} = actions;
export default reducer;
