import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="block md:flex overflow-hidden bg-white rounded-lg">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
