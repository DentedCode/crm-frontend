import React from "react";
import PropTypes from "prop-types";

import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = ({ handleOnChange, str }) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              value={str}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
