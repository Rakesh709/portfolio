
import Home from "../src/page/Home.jsx"
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Blogs from "./page/Blogs.jsx";
import Infographic from "./page/Infographic.jsx";
import Projects from "../src/page/Projects.jsx"

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/blog' element={<Blogs/>}/>
            <Route path='/infographic' element={<Infographic/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
