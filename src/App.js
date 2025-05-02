import { useState, useEffect } from 'react';
import { ThemeSwitch } from './components/ThemeSwitch';
import { ToTop } from "./components/ToTop";
import { LandingSection } from "./components/LandingSection";
import {NavBar} from "./components/NavBar";
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import {FunThings} from "./components/FunThings";
import {ContactMe} from "./components/ContactMe";
import {Footer} from "./components/Footer";

function App() {
  // Based on switch, change theme
  let [selectedTheme, setSelectedTheme] = useState(1);
  let [currTheme, setCurrTheme] = useState("professional-theme");

  // Update class based on switch
  useEffect(() => {
    switch (selectedTheme) {
      case 1:
        setCurrTheme("professional-theme");
       break;
      case 2:
        setCurrTheme("color-theme");
        break;
      case 3:
        setCurrTheme("tron-theme");
        break;
      default:
        setCurrTheme("professional-theme");
    }
  }, [selectedTheme])

  return (
      <div className={"centered " + currTheme}>
        <div className="page">
          {/*<ThemeSwitch*/}
          {/*  selectedTheme = {selectedTheme}*/}
          {/*  setSelectedTheme = {setSelectedTheme}*/}
          {/*/>*/}
          {/*<ToTop*/}
          {/*  selectedTheme = {selectedTheme}*/}
          {/*/>*/}
          <NavBar
              selectedTheme = {selectedTheme}
          />
          {/*Location for top button to take user*/}
          <div id="top"></div>
          <LandingSection
              selectedTheme = {selectedTheme}
          />
          <AboutMe
              selectedTheme = {selectedTheme}
          />
          <Projects
              selectedTheme = {selectedTheme}
          />
          <FunThings
              selectedTheme = {selectedTheme}
          />
          <ContactMe
              selectedTheme = {selectedTheme}
          />
          <Footer />
        </div>
      </div>
  );
}

export default App;
