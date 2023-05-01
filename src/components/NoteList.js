

// s
//import './NoteList.css';
// import React from 'react';
//  import Note from './Note';
//  import firebase from 'firebase/compat/app';
// // const NoteList = ({ notes, deleteNote, updateNote }) => {
//   const NoteList = ({ notes, deleteNote, updateNote }) => {
//     const user = firebase.auth().currentUser;
  
//     const filteredNotes = notes.filter(note => note.userId === user.uid);
//   return (
//    // <div className='card'>
//     <div className="note-list">
//       {notes.map(note => (
//         <div className="note-item" key={note.id}>
//           <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />
//         </div>
//       ))}
//     </div>
//     //</div>
//   );
// };

// export default NoteList;



// import React from 'react';
// import Note from './Note';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';
// import { db } from '../firebase';
// import { useState, useEffect } from 'react';

// const NoteList = ({ userId }) => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     getNotes(userId);
//   }, [userId]);

//   const getNotes = (userId) => {
//     const noteRef = firebase.database().ref('notes');
//     noteRef.orderByChild('userId').equalTo(userId).get().then((snapshot) => {
//       const notes = [];
//       snapshot.forEach((childSnapshot) => {
//         const note = {
//           id: childSnapshot.key,
//           ...childSnapshot.val(),
//         };
//         notes.push(note);
//       });
//       setNotes(notes);
//     });
//   };
  

//   const addNote = (title, content, userId) => {
//     const noteRef = firebase.database().ref('notes');
//     const newNote = noteRef.push();
//     newNote.set({
//       title,
//       content,
//       userId,
//     });
//   };

//   const deleteNote = (noteId) => {
//     const noteRef = firebase.database().ref(`notes/${noteId}`);
//     noteRef.remove();
//   };

//   const updateNote = (noteId, updates) => {
//     const noteRef = firebase.database().ref(`notes/${noteId}`);
//     noteRef.update(updates);
//   };

//   return (
//     <div className="note-list">
//       {notes.map((note) => (
//         <div className="note-item" key={note.id}>
//           <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />
//         </div>
//       ))}
//       <div className="add-note">
//         <button onClick={() => addNote('New Note', '', userId)}>Add Note</button>
//       </div>
//     </div>
//   );
// };

// export default NoteList;


// import firebase from 'firebase/compat/app';

import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getFirestore } from 'firebase/firestore';
import { auth } from '../firebase';
import Note from './Note';

const NoteList = ({ deleteNote, updateNote }) => {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const db = getFirestore();
      const notesRef = query(collection(db, 'notes'), where('userId', '==', user.uid));
      const unsubscribe = onSnapshot(notesRef, (snapshot) => {
        const notes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNotes(notes);
      });

      return () => unsubscribe();
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-item" key={note.id}>
          <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
