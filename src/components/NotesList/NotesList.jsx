import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import "./NotesList.css";
import { useDispatch, useSelector } from "react-redux";
import { get_Notes } from "../../redux/actions";

const NotesList = () => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const notes = useSelector((state) => state.notes.notes);
  const searchTerm = useSelector((state) => state.app.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    const n = JSON.parse(localStorage.getItem("notes"));
    dispatch(get_Notes(n.notes));
  }, []);

  useEffect(() => {
    if (typeof notes !== "undefined" && notes !== null) {
      setFilteredNotes(
        notes.filter((note) => {
          if (searchTerm === "") {
            return note;
          } else if (
            ["title", "desc"].some((i) =>
              note[i]
                ?.toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
          )
            return note;
        })
      );
    }
  }, [notes, searchTerm]);

  // console.log({ notes });
  return (
    <div className="NotesList">
      {filteredNotes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
