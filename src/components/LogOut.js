import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <button className="btn btn-link" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
