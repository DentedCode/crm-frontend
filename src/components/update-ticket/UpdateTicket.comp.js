import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { replyOnTicket } from "../../pages/ticket-list/ticketsAction";

export const UpdateTicket = ({ _id }) => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector((state) => state.user);
  const [message, setMessage] = useState("");

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const msgObj = {
      message,
      sender: name,
    };

    dispatch(replyOnTicket(_id, msgObj));
    setMessage("");
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
        <Form.Control
          value={message}
          onChange={handleOnChange}
          as="textarea"
          row="5"
          name="detail"
        />
        <div className="text-right mt-3 mb-3">
          <Button variant="info" type="submit">
            Reply
          </Button>
        </div>
      </Form>
    </div>
  );
};

UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired,
};
