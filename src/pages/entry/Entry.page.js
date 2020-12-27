import React, { useState } from "react";

import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

import "./entry.style.css";

export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && <LoginForm formSwitcher={formSwitcher} />}

        {frmLoad === "rest" && (
          <ResetPassword
            // handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            // email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};
