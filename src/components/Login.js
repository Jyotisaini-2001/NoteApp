import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import firebase from 'firebase/compat/app'
import { useNavigate } from 'react-router-dom';
import './Login.css';
// import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Logged in!');
      navigate('/NoteApp');
      console.log('you reached')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
    
     <h2 className='header'>Login your Account </h2>
    <Container>
     
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="login-form">
            <h2 className="text-center mb-3">Log in</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Log in
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Login;
