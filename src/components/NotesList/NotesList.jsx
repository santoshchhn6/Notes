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

  console.log("Search:" + searchTerm);
  //   const [notes, setNotes] = useState([
  //     {
  //       id: 1,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 2,
  //       title: "Wash your Cloth",
  //       note: "Prince Octavius of Great Britain (1779–1783) was the thirteenth child and eighth son of King George III and his queen consort, Charlotte of Mecklenburg-Strelitz. King George and Queen Charlotte were much more involved in rearing their fifteen children than was usual for aristocratic parents of the time. George was extremely devoted to Octavius, who was too young to cause the kinds of trouble that his elder brothers did by this time. Contemporary accounts describe Octavius as having a sweet nature, and being particularly close to his sister Sophia. Six months after the death of his younger brother Prince Alfred, Octavius was inoculated against the smallpox virus. He became ill and died several days later. His death at the age of four devastated his parents, and in particular his father. King George III had been very fond of his two youngest sons, Alfred and Octavius, and his later bouts of madness involved hallucinations of the two dead princes.",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 3,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 4,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 5,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 6,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 7,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 8,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 9,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 10,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 11,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //     {
  //       id: 12,
  //       title: "Wash your Cloth",
  //       note: "wash your cloth at 9:00 O'clock",
  //       date: "1-12-22",
  //     },
  //   ]);
  return (
    <div className="NotesList">
      {filteredNotes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
