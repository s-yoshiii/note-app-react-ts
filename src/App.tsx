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
  };
  const onDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(filterNotes);
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const onUpdateNote = (updatedNote: Note) => {
    const updatedNoteArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
      setNotes(updatedNoteArr);
    });
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
      <Main selectedNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
