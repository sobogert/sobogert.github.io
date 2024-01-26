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
  let [isTron, setIsTron] = useState(true);
  let [currTheme, setCurrTheme] = useState("tron-theme");

  // Update class based on switch
  useEffect(() => {
    if (isTron) {
      setCurrTheme("tron-theme");
    }
    else {
      setCurrTheme("color-theme");
    }
  }, [isTron])


  return (
      <div className={"centered " + currTheme}>
        <div className="page">
          <ThemeSwitch
            isTron = {isTron}
            setIsTron = {setIsTron}
          />
          <ToTop
              isTron={isTron}
          />
          <NavBar
            isTron={isTron}
          />
          {/*Location for top button to take user*/}
          <div id="top"></div>
          <LandingSection
            isTron={isTron}
          />
          <AboutMe
              isTron={isTron}
          />
          <Projects
            isTron={isTron}
          />
          <FunThings
              isTron={isTron}
          />
          <ContactMe
              isTron={isTron}
          />
          <Footer />
        </div>

      </div>
  );
}

export default App;
