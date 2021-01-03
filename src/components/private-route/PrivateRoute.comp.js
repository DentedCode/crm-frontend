import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { loginSuccess } from "../login/loginSlice";

import { fetchNewAccessJWT } from "../../api/userApi";

import { DefaultLayout } from "../../layout/DefaultLayout";

export const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT();
      result && dispatch(loginSuccess());
    };

    updateAccessJWT();

    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
};
