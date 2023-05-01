
// import React, { useState } from 'react';
// import './NoteForm.css';

// const NoteForm = ({ addNote }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addNote({
//       title,
//       content,
//       createdAt: new Date()
//     });
//     setTitle('');
//     setContent('');
//   };

//   return (
//    <>
//    <h1 className='header'>Welcome to your NoteApp</h1>
//     <form onSubmit={handleSubmit} className="note-form">
//       <h2 className='head'>Add a Note</h2>
//       <div className="form-group">
//         <label htmlFor="title" className="form-label">Title</label>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="content" className="form-label">Content</label>
//         <textarea value={content} onChange={(e) => setContent(e.target.value)} id="content" className="form-input"></textarea>
//       </div>
//       <button type="submit" className="btn-primary">Add Note</button>
//     </form>
//     </>
//   );
// };

// export default NoteForm;
import React, { useState } from 'react';
import './NoteForm.css';

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = firebase.auth().currentUser;
    const note = {
      title,
      content,
      userId: user.uid // add the user ID to the note
    };

    firebase.firestore().collection('notes').add(note);

    setTitle('');
    setContent('');
  };

  return (
    <>
      <h1 className='header'>Welcome to your NoteApp</h1>
      <form onSubmit={handleSubmit} className="note-form">
        <h2 className='head'>Add a Note</h2>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} id="content" className="form-input"></textarea>
        </div>
        <button type="submit" className="btn-primary">Add Note</button>
      </form>
    </>
  );
};

export default NoteForm;
