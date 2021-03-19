import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./passwordAction";

import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Spinner,
	Alert,
} from "react-bootstrap";

const initialState = {
	pin: "",
	password: "sfsd#3Dsg",
	confirmPass: "sfsd#3Dsg",
};
const passVerificationError = {
	isLenthy: false,
	hasUpper: false,
	hasLower: false,
	hasNumber: false,
	hasSpclChr: false,
	confirmPass: false,
};

const UpdatePasswordForm = () => {
	const dispatch = useDispatch();

	const [newPassword, setNewPassword] = useState(initialState);
	const [passwordError, setPasswordError] = useState(passVerificationError);

	const { isLoading, status, message, email } = useSelector(
		state => state.password
	);

	const handleOnChange = e => {
		const { name, value } = e.target;

		setNewPassword({ ...newPassword, [name]: value });

		if (name === "password") {
			const isLenthy = value.length > 8;
			const hasUpper = /[A-Z]/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			const hasSpclChr = /[@,#,$,%,&]/.test(value);

			setPasswordError({
				...passwordError,
				isLenthy,
				hasUpper,
				hasLower,
				hasNumber,
				hasSpclChr,
			});
		}

		if (name === "confirmPass") {
			setPasswordError({
				...passwordError,
				confirmPass: newPassword.password === value,
			});
		}
	};

	const handleOnSubmit = e => {
		e.preventDefault();
		// console.log(newUser);

		const { pin, password } = newPassword;

		const newPassObj = {
			pin,
			newPassword: password,
			email,
		};
		dispatch(updatePassword(newPassObj));
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info">Update Password</h1>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					{message && (
						<Alert variant={status === "success" ? "success" : "danger"}>
							{message}
						</Alert>
					)}
					{isLoading && <Spinner variant="primary" animation="border" />}
				</Col>
			</Row>

			<Row>
				<Col>
					<Form onSubmit={handleOnSubmit}>
						<Form.Group>
							<Form.Label>OTP</Form.Label>
							<Form.Control
								type="number"
								name="pin"
								value={newPassword.pin}
								onChange={handleOnChange}
								placeholder="OTP"
								required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={newPassword.password}
								onChange={handleOnChange}
								placeholder="Password"
								required
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								name="confirmPass"
								value={newPassword.confirmPass}
								onChange={handleOnChange}
								placeholder="Confirm Password"
								required
							/>
						</Form.Group>
						<Form.Text>
							{!passwordError.confirmPass && (
								<div className="text-danger mb-3">Password doesn't match!</div>
							)}
						</Form.Text>

						<ul className="mb-4">
							<li
								className={
									passwordError.isLenthy ? "text-success" : "text-danger"
								}
							>
								Min 8 characters
							</li>
							<li
								className={
									passwordError.hasUpper ? "text-success" : "text-danger"
								}
							>
								At least one upper case
							</li>
							<li
								className={
									passwordError.hasLower ? "text-success" : "text-danger"
								}
							>
								At least one lower case
							</li>
							<li
								className={
									passwordError.hasNumber ? "text-success" : "text-danger"
								}
							>
								At least one number
							</li>
							<li
								className={
									passwordError.hasSpclChr ? "text-success" : "text-danger"
								}
							>
								At least on of the special characters i.e @ # $ % &{" "}
							</li>
						</ul>

						<Button
							variant="primary"
							type="submit"
							disabled={Object.values(passwordError).includes(false)}
						>
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default UpdatePasswordForm;
