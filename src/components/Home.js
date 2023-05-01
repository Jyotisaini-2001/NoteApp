import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <div className='container'>
      <div className='content'>
        <h1 className='header'>Welcome to NoteApp</h1>
        <p>Please login or sign up to access your notes.</p>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;
