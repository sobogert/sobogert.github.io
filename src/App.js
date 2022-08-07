import React from 'react';
import './App.css';

function App() {
    return (
    <div className="big-papa">
        <div className="name-bar">
            <h1>Sophia Bogert</h1>
        </div>
        <nav className="nav-box">
            <ul className="nav-list">

                <li><a href="#projects">Projects + Xp</a></li>
                <li><a href="#fun">Fun Things</a></li>
                <li><a href="#contact">Contact Me!</a></li>
            </ul>
        </nav>
        <div className="pics-box">
            <img className="pic" style="align-self:flex-start" width="140" height="140"
                 src="../public/uranus-1986.jpg" alt="Image of Uranus' shadow from Voyager 2 (1986)"></img>
                <img className="pic" style="align-self:flex-end" width="140" height="140"
                     src="https://cdn.mos.cms.futurecdn.net/vF2iCQbygk5PEQADvAJzF8-1024-80.jpg.webp"
                     alt="Image of the universe from Hubble (2014)"></img>
        </div>

        <div className="box-main">
            <p className="text-small">
                Hello World, my name is Sofi Bogert
            </p>
        </div>

        <footer className="footer">
            <p className="text-footer">
                * Made with Love *
            </p>
        </footer>
    </div>
    )
}
export default App
