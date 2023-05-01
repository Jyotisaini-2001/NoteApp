// import { useState } from 'react'

// // custom hooks
// import useLocalStorage from './hooks/useLocalStorage'
// // import useLocalStorage from './hooks/useLocalStorage'

// import CustomForm from './components/CustomForm'
// import EditForm from './components/EditForm'
// import TaskList from './components/TaskList'

// function NoteApp() {
//   const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
//   const [previousFocusEl, setPreviousFocusEl] = useState(null);
//   const [editedTask, setEditedTask] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   const addTask = (task) => {
//     setTasks(prevState => [...prevState, task])
//   }

//   const deleteTask = (id) => {
//     setTasks(prevState => prevState.filter(t => t.id !== id));
//   }

//   const toggleTask = (id) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === id
//         ? { ...t, checked: !t.checked }
//         : t
//     )))
//   }

//   const updateTask = (task) => {
//     setTasks(prevState => prevState.map(t => (
//       t.id === task.id
//         ? { ...t, name: task.name }
//         : t
//     )))
//     closeEditMode();
//   }

//   const closeEditMode = () => {
//     setIsEditing(false);
//     previousFocusEl.focus();
//   }

//   const enterEditMode = (task) => {
//     setEditedTask(task);
//     setIsEditing(true);
//     setPreviousFocusEl(document.activeElement);
//   }

//   return (
//     <div className="container">
//       <header>
//         <h1>My Task List</h1>
//       </header>
//       {
//         isEditing && (
//           <EditForm
//             editedTask={editedTask}
//             updateTask={updateTask}
//             closeEditMode={closeEditMode}
//           />
//         )
//       }
//       <CustomForm addTask={addTask}/>
//       {tasks && (
//         <TaskList
//           tasks={tasks}
//           deleteTask={deleteTask}
//           toggleTask={toggleTask}
//           enterEditMode={enterEditMode}
//         />
//       )}
//     </div>
//   )
// }

// export default NoteApp;


// import { collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
// import { collection } from 'firebase/firestore';




import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc } from 'firebase/firestore';
import 'firebase/compat/firestore'
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Navbar from './components/Navbar';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
console.log(db)
  useEffect(() => {
    const notesCollectionRef = collection(db, 'notes');

    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, []);

  
  const addNote = async (note) => {
    await addDoc(collection(db, 'notes'), note);
  };

  // const deleteNote = async (id) => {
  //   await deleteDoc(collection(db, 'notes'), id);
  // };
  const deleteNote = async (id) => {
    const noteRef = doc(db, 'notes', id);
    await deleteDoc(noteRef);
  };
  

  const updateNote = async (id, updatedNote) => {
    console.log('Updating note with id:', id, 'to:', updatedNote);
    await updateDoc(doc(db, 'notes', id), updatedNote);
  };
  
  

  return (
    <div>
      <Navbar/>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
};

export default NoteApp;
