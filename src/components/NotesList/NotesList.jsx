import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import "./NotesList.css";
import { useSelector } from "react-redux";

const NotesList = () => {
  const [filteredNotes, setFilteredNotes] = useState([]);
  const notes = useSelector((state) => state.notes.notes);
  const searchTerm = useSelector((state) => state.app.searchTerm);

  //------------local Storage----------
  //import { get_Notes } from "../../redux/actions";
  //import { useDispatch} from "react-redux";
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const n = JSON.parse(localStorage.getItem("notes"));
  //   dispatch(get_Notes(n.notes));
  // }, [dispatch]);

  useEffect(() => {
    if (typeof notes !== "undefined" && notes !== null) {
      setFilteredNotes(
        notes.filter((note) => {
          if (searchTerm === "") {
            return note;
          } else {
            return ["title", "desc"].some((i) =>
              note[i]
                ?.toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            );
          }
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
