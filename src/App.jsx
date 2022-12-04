import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import { useDispatch } from "react-redux";
import { show_AddNote } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const handleShow = () => {
    dispatch(show_AddNote());
  };

  return (
    <div className="App" onClick={handleShow}>
      <Header />
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;
