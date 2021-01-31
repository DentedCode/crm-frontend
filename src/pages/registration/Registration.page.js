import React from "react";
import { Jumbotron } from "react-bootstrap";

import RegistrationForm from "../../components/registration-form/RegistrationForm.comp";

import "./registration.style.css";

export const Registration = () => {
  return (
    <div className="registration-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box">
          <RegistrationForm />
        </Jumbotron>
      </div>
    </div>
  );
};
