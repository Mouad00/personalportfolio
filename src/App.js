import React, { useState } from "react";
import "./app.scss"
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from './components/portfolio/Portfolio'
import Works from "./components/works/Works";
import Career from './components/career/Career'
// import Testimonials from "./components/testimonials/Testimonials";
import Contacts from './components/contacts/Contacts'
import Menu from './components/menu/Menu';
// import About from "./components/about/About";
import Formation from "./components/formation/Formation";
import Enseignement from "./components/enseignement/Enseignement";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        {/* <About /> */}
        <Portfolio />
        <Formation />
        <Career />
        <Enseignement />
        <Works />
        {/* <Testimonials /> */}
        {/* <MapContainer /> */}
        <Contacts />
      </div>
    </div>
  );
}

export default App;
