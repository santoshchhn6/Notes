import React, { useRef, useState } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import OutsideAlerter from "../../CustomHook/customHook";
import { add_Note, hide_AddNote, show_AddNote } from "../../redux/actions";
import "./AddNote.css";

const AddNote = () => {
  const [note, setNote] = useState({
    id: 0,
    title: "",
    desc: "",
    color: "var(--yellow)",
  });
  const [id, setId] = useState(0);
  const [color, setColor] = useState("white");

  const showAddNote = useSelector((state) => state.app.showAddNote);
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(show_AddNote());
  };

  const handleHide = () => {
    if (
      (typeof note.title !== "undefined" && note.title.length !== 0) ||
      (typeof note.desc !== "undefined" && note.desc.length !== 0)
    ) {
      setId((id) => id + 1);
      dispatch(add_Note(note));
      setNote((prev) => ({ ...prev, title: "", desc: "" }));
    }
    //reset addnote background
    setColor("white");
    dispatch(hide_AddNote());
  };

  const saveNote = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, id, [name]: value }));
  };

  const changeBackground = (color) => {
    color = "var(" + color + ")";
    setColor(color);
    setNote((prev) => ({ ...prev, color }));
  };

  return (
    <OutsideAlerter
      note={note}
      className="AddNote"
      onClick={handleShow}
      onOutsideClick={handleHide}
      style={{ backgroundColor: color }}
    >
      {!showAddNote && <span>Add Note</span>}
      {showAddNote && (
        <>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={saveNote}
          />
          <textarea
            name="desc"
            id="note"
            placeholder="Take a note..."
            value={note.desc}
            onChange={saveNote}
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
        </>
      )}
    </OutsideAlerter>
  );
};

export default AddNote;
