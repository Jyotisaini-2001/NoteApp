// import { useState } from 'react';

// // library imports
// import { PlusIcon } from '@heroicons/react/24/solid'

// const CustomForm = ({ addTask }) => {
//   const [task, setTask] = useState("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     addTask({
//       name: task,
//       checked: false,
//       id: Date.now()
//     })
//     setTask("")
//   }

//   return (
//     <form
//       className="todo"
//       onSubmit={handleFormSubmit}
//       >
//       <div className="wrapper">
//         <input
//           type="text"
//           id="task"
//           className="input"
//           value={task}
//           onInput={(e) => setTask(e.target.value)}
//           required
//           autoFocus
//           maxLength={60}
//           placeholder="Enter Task"
//         />
//         <label
//           htmlFor="task"
//           className="label"
//         >Enter Task</label>
//       </div>
//       <button
//         className="btn"
//         aria-label="Add Task"
//         type="submit"
//         >
//         <PlusIcon />
//       </button>
//     </form>
//   )
// }
// export default CustomForm;
// import React, { useState } from 'react';
// import './NoteForm.css'
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
//     <form onSubmit={handleSubmit}>
//       <h2>Add a Note</h2>
//       <label>
//         Title
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </label>
//       <label>
//         Content
//         <textarea value={content} onChange={(e) => setContent(e.target.value)} />
//       </label>
//       <button type="submit">Add Note</button>
//     </form>
//   );
// };

// export default NoteForm;
import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({
      title,
      content,
      createdAt: new Date()
    });
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
