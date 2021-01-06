import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    const result = await fetchUser();

    if (result.user && result.user._id)
      return dispatch(getUserSuccess(result.user));

    dispatch(getUserFail("User is not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};
