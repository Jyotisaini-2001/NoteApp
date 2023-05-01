// import { useState, useEffect } from 'react';

// // library imports
// import { CheckIcon } from '@heroicons/react/24/solid'

// const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
//   const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

//   useEffect(()=> {
//     const closeModalIfEscaped = (e) => {
//       e.key === "Escape" && closeEditMode();
//     }

//     window.addEventListener('keydown', closeModalIfEscaped)

//     return () => {
//       window.removeEventListener('keydown', closeModalIfEscaped)
//     }
//   }, [closeEditMode])

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     updateTask({...editedTask, name: updatedTaskName})
//   }

//   return (
//     <div
//       role="dialog"
//       aria-labelledby="editTask"
//       onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
//       >
//       <form
//         className="todo"
//         onSubmit={handleFormSubmit}
//         >
//         <div className="wrapper">
//           <input
//             type="text"
//             id="editTask"
//             className="input"
//             value={updatedTaskName}
//             onInput={(e) => setUpdatedTaskName(e.target.value)}
//             required
//             autoFocus
//             maxLength={60}
//             placeholder="Update Task"
//           />
//           <label
//             htmlFor="editTask"
//             className="label"
//           >Update Task</label>
//         </div>
//         <button
//           className="btn"
//           aria-label={`Confirm edited task to now read ${updatedTaskName}`}
//           type="submit"
//           >
//           <CheckIcon strokeWidth={2} height={24} width={24} />
//         </button>
//       </form>
//     </div>
//   )
// }
// export default EditForm
// import React, { useState } from 'react';
// import './Note.css';

// const Note = ({ note, deleteNote, updateNote }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedTitle, setEditedTitle] = useState(note.title);
//   const [editedContent, setEditedContent] = useState(note.content);

//   const handleDeleteNote = () => {
//     console.log('Deleting note with id: ', note.id);
//     deleteNote(note.id);
//     console.log('Deleting note with id: ', note.id);
//   };

//   const handleEditNote = () => {
//     if (isEditing) {
//       setEditedTitle(note.title);
//       setEditedContent(note.content);
//       updateNote(note.id, {
//         title: editedTitle,
//         content: editedContent,
//       });
//     }
  
//     setIsEditing(!isEditing);
//   };
  

//   const handleTitleChange = (e) => {
//     setEditedTitle(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   return (
//     <div className="card note card mx-auto w-35">
//       {isEditing ? (
//         <div className="card-body">
//           <input
//             type="text"
//             className="card-title form-control"
//             value={editedTitle}
//             onChange={handleTitleChange}
//           />
//           <textarea
//             className="card-text form-control"
//             value={editedContent}
//             onChange={handleContentChange}
//           />
//           <div className="text-center">
//             <button className="btn btn-danger" onClick={handleDeleteNote}>
//               delete
//             </button>
//             <button className="btn btn-primary" onClick={handleEditNote}>
//               save
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="card-body text-center">
//           <h5 className="card-title">{note.title}</h5>
//           <p className="card-text">{note.content}</p>
//           <div className="text-center">
//             <button className="btn btn-danger" onClick={handleDeleteNote}>
//               delete
//             </button>
//             <button className="btn btn-primary" onClick={handleEditNote}>
//               edit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Note;

import React, { useState, useEffect } from 'react';
import './Note.css';

const Note = ({ note, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  useEffect(() => {
    if (isEditing) {
      setEditedTitle(note.title);
      setEditedContent(note.content);
    }
  }, [isEditing, note]);

  const handleDeleteNote = () => {
    console.log('Deleting note with id: ', note.id);
    deleteNote(note.id);
  };

  const handleEditNote = () => {
    if (isEditing) {
      // update the note with the edited values
      updateNote(note.id, {
        title: editedTitle,
        content: editedContent,
      });
      setIsEditing(false);
    } else {
      // enter edit mode
      setIsEditing(true);
    }
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <div className="card note card mx-auto w-35">
      {isEditing ? (
        <div className="card-body">
          <input
            type="text"
            className="card-title form-control"
            value={editedTitle}
            onChange={handleTitleChange}
          />
          <textarea
            className="card-text form-control"
            value={editedContent}
            onChange={handleContentChange}
          />
          <div className="text-center">
            <button className="btn btn-danger" onClick={handleDeleteNote}>
             cancil
            </button>
            <button className="btn btn-primary" onClick={handleEditNote}>
              save
            </button>
          </div>
        </div>
      ) : (
        <div className="card-body text-center">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
          <div className="text-center">
            <button  class="btn btn-danger" onClick={handleDeleteNote}>
              delete
            </button>
            <button className="btn btn-primary" onClick={handleEditNote}>
              edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
