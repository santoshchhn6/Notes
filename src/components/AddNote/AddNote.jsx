import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OutsideAlerter from "../../CustomHook/customHook";
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";
import {
  add_Note,
  delete_Note,
  hide_AddNote,
  reset_selected,
  show_AddNote,
  update_Note,
} from "../../redux/actions";
import "./AddNote.css";

const AddNote = () => {
  const showAddNote = useSelector((state) => state.app.showAddNote);
  let selectedNote = useSelector((state) => state.notes.selectedNote);
  const dispatch = useDispatch();

  const initialNote = {
    id: 0,
    title: "",
    desc: "",
    color: "var(--yellow)",
  };

  const [note, setNote] = useState(initialNote);
  const [id, setId] = useState(0);
  const [color, setColor] = useState("white");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  useEffect(() => {
    if (selectedNote !== null) {
      setNote(selectedNote);
      setId(selectedNote.id);
    }
  }, [selectedNote]);

  const handleShow = () => {
    dispatch(show_AddNote());
  };

  const saveNote = () => {
    if (
      (typeof note.title !== "undefined" && note.title.length !== 0) ||
      (typeof note.desc !== "undefined" && note.desc.length !== 0)
    ) {
      if (selectedNote === null) {
        //Add Note
        dispatch(add_Note(note));
        setId(uuidv4());
      } else if (selectedNote !== note) {
        //Update Note
        dispatch(update_Note(note));
        dispatch(reset_selected());
      }
      //reset note and input
      setNote(initialNote);
    }
    //reset
    setColor("white");
    setNote((prev) => ({ ...prev, color: "var(--yellow)" }));

    dispatch(hide_AddNote());
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, id, [name]: value }));
  };

  const changeBackground = (color) => {
    color = "var(" + color + ")";
    setColor(color);
    setNote((prev) => ({ ...prev, color }));
  };

  const deleteNote = () => {
    dispatch(delete_Note(selectedNote.id));
    setNote(initialNote);
  };

  // console.log({ notes });
  return (
    <OutsideAlerter
      note={note}
      className="AddNote"
      onClick={handleShow}
      onOutsideClick={saveNote}
      style={{ backgroundColor: color }}
    >
      {!showAddNote && <span>Add Note</span>}
      {showAddNote && (
        <>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={note?.title}
            onChange={handleInput}
          />
          <TextareaAutosize
            className="textarea"
            name="desc"
            id="note"
            placeholder="Take a note..."
            value={note?.desc}
            onChange={handleInput}
          />
          <div className="note_color">
            <div
              className="note_circle note_red"
              onClick={() => changeBackground("--red")}
            ></div>
            <div
              className="note_circle note_orange"
              onClick={() => changeBackground("--orange")}
            ></div>
            <div
              className="note_circle note_yellow"
              onClick={() => changeBackground("--yellow")}
            ></div>
            <div
              className="note_circle note_olive"
              onClick={() => changeBackground("--olive")}
            ></div>
            <div
              className="note_circle note_green"
              onClick={() => changeBackground("--green")}
            ></div>
            <div
              className="note_circle note_bluegreen"
              onClick={() => changeBackground("--bluegreen")}
            ></div>
            <div
              className="note_circle note_cyan"
              onClick={() => changeBackground("--cyan")}
            ></div>
            <div
              className="note_circle note_skyblue"
              onClick={() => changeBackground("--skyblue")}
            ></div>
            <div
              className="note_circle note_blue"
              onClick={() => changeBackground("--blue")}
            ></div>
            <div
              className="note_circle note_violet"
              onClick={() => changeBackground("--violet")}
            ></div>
            <div
              className="note_circle note_pink"
              onClick={() => changeBackground("--pink")}
            ></div>
          </div>
          {selectedNote && <button onClick={deleteNote}>Delete</button>}
        </>
      )}
    </OutsideAlerter>
  );
};

export default AddNote;
