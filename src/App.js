
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import firebase from 'firebase/compat/app';
// import Navbar from './components/Navbar';

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NoteApp from './/NoteApp';

function App() {

  // Initialize Firebase when the component mounts
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAxhn-AausKOgBbIcJ1R59EUMHSaF51mPw",
      authDomain: "mynotes-f2239.firebaseapp.com",
      projectId: "mynotes-f2239",
      storageBucket: "mynotes-f2239.appspot.com",
      messagingSenderId: "276452569078",
      appId: "1:276452569078:web:3baf1aab029de589b9a1d7",
      measurementId: "G-DDW1VYG6TK"
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <div className="App">
     
     <Router>
      <Routes>
     
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/noteapp" element={<NoteApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

