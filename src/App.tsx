import { useState } from "react";
import uuid from "react-uuid";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
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
  return (
    <div className="block md:flex overflow-hidden bg-white rounded-lg">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
