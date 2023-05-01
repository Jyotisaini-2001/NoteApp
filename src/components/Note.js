

import React, { useState, useEffect } from 'react';
import './Note.css';

import firebase from 'firebase/compat/app';
const Note = ({ note, deleteNote, updateNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const user = firebase.auth().currentUser;

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

  if (note.userId !== user.uid) {
    // if the note doesn't belong to the current user, don't display it
    return null;
  }

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
