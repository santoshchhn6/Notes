import React from "react";
import "./Note.css";

const Note = ({ note }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.note}</p>
      <i>{note.date}</i>
    </div>
  );
};

export default Note;
