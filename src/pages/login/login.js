import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../../services/api";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const submitLogin = async (e) => {
    e.preventDefault();
    await login(name, password)
      .then((response) => {Cookies.set('token', response.data.access_token)})
      navigate('/dashboard_admin')
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={submitLogin}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Insert Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
