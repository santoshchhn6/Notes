import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [display, setDisplay] = useState("none");
  const showAddNote = useSelector((state) => state.app.showAddNote);

  useEffect(() => {
    if (showAddNote) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  }, [showAddNote]);
  return (
    <div className="App">
      <div className="transparentBlack" style={{ display: display }}></div>
      <Header />
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;
