// // component import
// import TaskItem from './TaskItem';

// // styles
// import styles from './TaskList.module.css';

// const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
//   return (
//     <ul className={styles.tasks}>
//       {tasks.sort((a, b) => b.id - a.id).map(task => (
//         <TaskItem
//           key={task.id}
//           task={task}
//           deleteTask={deleteTask}
//           toggleTask={toggleTask}
//           enterEditMode={enterEditMode}
//         />
//       ))
//       }
//     </ul>
//   )
// }

import React from 'react';
import Note from './Note';
//import './NoteList.css';

const NoteList = ({ notes, deleteNote, updateNote }) => {
  return (
   // <div className='card'>
    <div className="note-list">
      {notes.map(note => (
        <div className="note-item" key={note.id}>
          <Note note={note} deleteNote={deleteNote} updateNote={updateNote} />
        </div>
      ))}
    </div>
    //</div>
  );
};

export default NoteList;



