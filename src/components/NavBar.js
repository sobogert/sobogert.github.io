import {useEffect, useState} from 'react';
import '../style/navBar.css';
import resume from '../assets/bogert_sophia_resume.pdf';

export function NavBar({ isTron }) {


    const [showHamburger, setShowHamburger] = useState(true);
    const [showExit, setShowExit] = useState(false);
    const [showNavBox, setShowNavBox] = useState(false);

    const isMobile = window.screen.width < 992;

    useEffect (() => {
        if (!isMobile) {
            setShowHamburger(false);
            setShowNavBox(true);
        }
    }, [isMobile])

    /* Expand navigation menu on mobile */
    function openMenu() {
        setShowHamburger(false);
        setShowNavBox(true);
        setShowExit(true);
    }

    /* Close navigation menu on mobile */
    function closeMenu() {
        if (isMobile) {
            // need if statement to check if in mobile
            setShowHamburger(true);
            setShowNavBox(false);
            setShowExit(false);
        }
    }
    return (
        <div className="top-bar">

            {
                showHamburger ?
                    <div onClick={openMenu} id="_hamburglar" className="hamburglar">
                        {
                            isTron ?
                                <svg className={"nav-icon"} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M3.50008 5.83337C3.07933 5.82742 2.68797 6.04848 2.47586 6.41189C2.26374 6.77532 2.26374 7.22479 2.47586 7.58821C2.68797 7.95163 3.07933 8.17268 3.50008 8.16673H24.5005C24.9212 8.17268 25.3126 7.95162 25.5247 7.58821C25.7368 7.22478 25.7368 6.77531 25.5247 6.41189C25.3126 6.04847 24.9212 5.82742 24.5005 5.83337H3.50008ZM3.50008 12.8335C3.07933 12.8275 2.68797 13.0486 2.47586 13.412C2.26374 13.7754 2.26374 14.2249 2.47586 14.5883C2.68797 14.9518 3.07933 15.1728 3.50008 15.1669H24.5005C24.9212 15.1728 25.3126 14.9517 25.5247 14.5883C25.7368 14.2249 25.7368 13.7754 25.5247 13.412C25.3126 13.0486 24.9212 12.8275 24.5005 12.8335H3.50008ZM3.50008 19.8336C3.07933 19.8277 2.68797 20.0487 2.47586 20.4121C2.26374 20.7756 2.26374 21.225 2.47586 21.5885C2.68797 21.9519 3.07933 22.1729 3.50008 22.167H24.5005C24.9212 22.1729 25.3126 21.9519 25.5247 21.5885C25.7368 21.225 25.7368 20.7756 25.5247 20.4121C25.3126 20.0487 24.9212 19.8277 24.5005 19.8336H3.50008Z" fill="#C063E8"/>
                                </svg>
                                :
                                <svg className={"nav-icon"} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M3.50008 5.83337C3.07933 5.82742 2.68797 6.04848 2.47586 6.41189C2.26374 6.77532 2.26374 7.22479 2.47586 7.58821C2.68797 7.95163 3.07933 8.17268 3.50008 8.16673H24.5005C24.9212 8.17268 25.3126 7.95162 25.5247 7.58821C25.7368 7.22478 25.7368 6.77531 25.5247 6.41189C25.3126 6.04847 24.9212 5.82742 24.5005 5.83337H3.50008ZM3.50008 12.8335C3.07933 12.8275 2.68797 13.0486 2.47586 13.412C2.26374 13.7754 2.26374 14.2249 2.47586 14.5883C2.68797 14.9518 3.07933 15.1728 3.50008 15.1669H24.5005C24.9212 15.1728 25.3126 14.9517 25.5247 14.5883C25.7368 14.2249 25.7368 13.7754 25.5247 13.412C25.3126 13.0486 24.9212 12.8275 24.5005 12.8335H3.50008ZM3.50008 19.8336C3.07933 19.8277 2.68797 20.0487 2.47586 20.4121C2.26374 20.7756 2.26374 21.225 2.47586 21.5885C2.68797 21.9519 3.07933 22.1729 3.50008 22.167H24.5005C24.9212 22.1729 25.3126 21.9519 25.5247 21.5885C25.7368 21.225 25.7368 20.7756 25.5247 20.4121C25.3126 20.0487 24.9212 19.8277 24.5005 19.8336H3.50008Z" fill="#F879AA"/>
                                </svg>
                        }

                    </div>
                    : null
            }

            {
                showNavBox ?
                    <nav id="_navBox" className="nav-box">
                        {
                            showExit ?
                                <div id="_menuExit" onClick={closeMenu}>

                                    {
                                        isTron ?
                                            <svg className={"nav-icon"} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path d="M5.822 4.65527C5.34725 4.6554 4.9199 4.94316 4.74126 5.38302C4.56262 5.82287 4.66829 6.32711 5.00851 6.65824L12.3504 14.0002L5.00851 21.3421C4.70373 21.6347 4.58096 22.0693 4.68755 22.4781C4.79414 22.887 5.11342 23.2062 5.52228 23.3128C5.93113 23.4194 6.36566 23.2966 6.65829 22.9919L14.0002 15.6499L21.3421 22.9919C21.6348 23.2967 22.0693 23.4194 22.4782 23.3128C22.887 23.2063 23.2063 22.887 23.3129 22.4781C23.4195 22.0693 23.2967 21.6347 22.9919 21.3421L15.65 14.0002L22.9919 6.65825C23.337 6.32284 23.4407 5.80999 23.2532 5.36683C23.0656 4.92367 22.6252 4.64111 22.1442 4.6553C21.8411 4.66433 21.5534 4.791 21.3421 5.00849L14.0002 12.3504L6.65828 5.00849C6.43863 4.7827 6.137 4.65528 5.822 4.65527Z" fill="#C063E8"/>
                                            </svg>                                            :
                                            <svg className={"nav-icon"} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                <path d="M6.17216 5.00049C5.69744 5.00062 5.27011 5.28844 5.09148 5.72839C4.91284 6.16834 5.0185 6.6727 5.35872 7.0039L12.7003 14.3475L5.35872 21.691C5.05395 21.9837 4.93118 22.4184 5.03777 22.8273C5.14435 23.2362 5.46362 23.5556 5.87246 23.6622C6.28129 23.7688 6.7158 23.646 7.00842 23.3412L14.35 15.9976L21.6916 23.3412C21.9842 23.646 22.4187 23.7688 22.8275 23.6622C23.2364 23.5556 23.5557 23.2363 23.6622 22.8273C23.7688 22.4184 23.646 21.9837 23.3413 21.691L15.9997 14.3475L23.3413 7.00391C23.6863 6.66843 23.7901 6.15546 23.6025 5.71221C23.415 5.26894 22.9746 4.98632 22.4936 5.00051C22.1905 5.00954 21.9029 5.13625 21.6916 5.35378L14.35 12.6973L7.00841 5.35378C6.78876 5.12794 6.48715 5.0005 6.17216 5.00049Z" fill="#F879AA"/>
                                            </svg>                                    }
                                </div>
                                : null
                        }

                        <ul className="nav-list">
                            {isTron ?
                                <li className={"name"}>
                                    <div>SoBogert</div>
                                </li> :
                                <li className={"name"}>
                                    <div className={"name_outline"}>SoBogert</div>
                                    <div className={"name_normal"}>SoBogert</div>
                                </li>
                            }
                            <div className={"nav-list_cluster"}>
                                <li><a onClick={closeMenu} className="nav-projects" href="#projects">Projects</a></li>
                                <li><a onClick={closeMenu} className="nav-resume" href={resume}
                                       target="_blank" rel="noreferrer">Resume</a></li>
                                <li><a onClick={closeMenu} className="nav-fun" href="#fun">Fun Things</a></li>
                            </div>
                        </ul>
                    </nav>
                    : null
            }

        </div>

);
}