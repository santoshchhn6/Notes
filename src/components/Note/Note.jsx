import React from "react";
import "./Note.css";

const Note = ({ note }) => {
  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.desc}</p>
    </div>
  );
};

export default Note;
