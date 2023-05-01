import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';

import firebase from 'firebase/compat/app';
import './SignUp.css'
import 'firebase/compat/auth';

const SignUp = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log('Email:', email);

if (password !== confirmPassword) {
  setError('Passwords do not match');
  return;
}


    try {
      
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created!');
      navigate('/login');
      console.log('yes done')
    } catch (error) {
      console.error('Error creating user account', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('The email address is already in use by another account');
      }
      // console.log('Error creating user account');
    }
  };

  return (
    <>  <h1 className='header'>Create Account On NoteApp</h1>
     {/* <h1 className='header'>Create Account On NoteApp</h1> */}
    <Container >
    
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <div className="SignUp-form">
            <h2 className="text-center mb-3">Sign Up</h2>
            <Form onSubmit={handleSignUp}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => {
                    // console.log('Confirm Password:', e.target.value);
                    setConfirmPassword(e.target.value);
                  }}
            required
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
            <p className="text-center mt-3">
              Already have an account? <a href="/login">Log in here</a>.
            </p>
            {error && <p className="text-danger mt-3">{error}</p>}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default SignUp;
