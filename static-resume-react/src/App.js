import "./assets/css/App.css";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Resume />
    </div>
  );
}

export default App;
