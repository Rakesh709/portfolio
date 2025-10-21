import SparkleButton from "./components/SparkleButton";
import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import MyProjects from "./page/MyProjects.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
