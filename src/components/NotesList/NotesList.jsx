import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import "./NotesList.css";
import { useSelector } from "react-redux";

const NotesList = () => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const notes = useSelector((state) => state.notes.notes);
  const searchTerm = useSelector((state) => state.app.searchTerm);

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) => {
        if (searchTerm === "") {
          return note;
        } else if (
          ["title", "desc"].some((i) =>
            note[i]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
          return note;
      })
    );
  }, [notes, searchTerm]);

  return (
    <div className="NotesList">
      {filteredNotes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
