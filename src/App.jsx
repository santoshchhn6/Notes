import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import "./App.css";
import AddNote from "./components/AddNote/AddNote";

function App() {
  return (
    <div className="App">
      <Header />
      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;
