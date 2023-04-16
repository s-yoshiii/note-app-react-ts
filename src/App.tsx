import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
type Note = {
  id: number;
  title: string;
  content: string;
  modDate: number;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const onAddNote = () => {
    console.log("新しいノートが追加されました。");
    const newNote: Note = {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };
  return (
    <div className="block md:flex overflow-hidden bg-white rounded-lg">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}

export default App;
