import { useDispatch } from "react-redux";
import { edit_note, show_AddNote } from "../../redux/actions";
import "./Note.css";

const Note = ({ note }) => {
  const dispatch = useDispatch();

  const EditNote = () => {
    dispatch(show_AddNote());
    dispatch(edit_note(note));
  };

  console.log({ note });
  return (
    <div
      className="note"
      style={{ backgroundColor: note.color }}
      onClick={EditNote}
    >
      <h3>{note.title}</h3>
      <p>{note.desc}</p>
    </div>
  );
};

export default Note;
