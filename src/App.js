import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Work from "./pages/Work";

function App() {
  return (
    <div className="Landing">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
