import { useState } from "react";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [activeNote, setActiveNote] = useState<string>("");
  const onAddNote = () => {
    console.log("新しいノートが追加されました。");
    const newNote: Note = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };
  const onDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(filterNotes);
  };
  const getActiveNote = () => {
    if (!activeNote) return;
    return notes.find((note) => note.id === activeNote);
  };
  return (
    <div className="block md:flex bg-white rounded-lg min-h-screen">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main getActiveNote={getActiveNote()} />
    </div>
  );
}

export default App;
