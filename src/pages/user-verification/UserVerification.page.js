import React, { useEffect, useState } from "react";
import { Jumbotron, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { userRegistrationVerification } from "../../api/userApi";

import "./userVerification.style.css";

const initialResponse = {
  status: "",
  message: "",
};
export const UserVerification = () => {
  const { _id, email } = useParams();
  const dt = { _id, email };

  const [response, setResponse] = useState(initialResponse);

  useEffect(() => {
    const apiCall = async () => {
      const result = await userRegistrationVerification(dt);
      setResponse(result);
    };

    !response.status && apiCall();
  }, [response]);

  //call api and send the _id to verify user

  return (
    <div className="registration-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box">
          {!response.status && <Spinner variant="info" animation="border" />}

          {response.status && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
        </Jumbotron>
      </div>
    </div>
  );
};
