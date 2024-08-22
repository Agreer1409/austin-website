import { Routes, Route } from "react-router-dom";
import ExperienceBody from "./components/ExperienceBody";
import HomeBody from "./components/HomeBody";
import NavBar from "./components/NavBar";
import Cadre5Body from "./components/experience-pages/Cadre5Body";
import TrimbleBody from "./components/experience-pages/TrimbleBody";
import ABSBody from "./components/experience-pages/ABSBody";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomeBody />} />
        {/* <Route path="/projects" element={<ProjectBody />} /> */}
        <Route path="/experience" element={<ExperienceBody />} />
        <Route path="/experience/austin-cadre5" element={<Cadre5Body />}></Route>
        <Route path="/experience/austin-trimble" element={<TrimbleBody />}></Route>
        <Route path="/experience/austin-abs" element={<ABSBody />}></Route>
        {/* <Route path="/contact" element={<ContactBody />} /> */}
      </Routes>
    </div>
  );
}

export default App;
