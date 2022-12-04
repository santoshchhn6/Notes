import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { show_AddNote } from "../../redux/actions";
import "./AddNote.css";

const AddNote = () => {
  const showAddNote = useSelector((state) => state.app.showAddNote);
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(show_AddNote());
  };

  return (
    <div className="AddNote">
      <input type="text" placeholder="Title" onClick={handleShow} />
      {showAddNote && (
        <input type="text" name="note" id="note" placeholder="Take a note..." />
      )}
    </div>
  );
};

export default AddNote;
