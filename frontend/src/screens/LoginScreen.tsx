import { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, FormGroup } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";
import React from 'react'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </FormGroup>

        <FormGroup className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
        </FormGroup>
        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
        <Row className="py-3">
          <Col>
            New Customer? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen