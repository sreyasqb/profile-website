import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import SideBar from "./components/SideBar";


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/options" element={<SideBar/>}/>
        
      </Routes>
    </React.Fragment>
  );
};
export default App;
