import React, { useState } from "react";
import ProtectedComponent from "../../layout/protected_component";
import { Form, Button } from "react-bootstrap";
import { register } from "../../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = async (e) => {
    e.preventDefault();
    await register(name, address, phoneNumber, password)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <ProtectedComponent>
      <div>
        <h2>Register</h2>
        <Form onSubmit={submitRegister}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              onChange={(e) => setAddress(e.target.value)}
              required={true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required={true}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </ProtectedComponent>
  );
};

export default Register;
