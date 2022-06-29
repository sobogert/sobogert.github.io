import React from 'react';
import './App.css';

function App() {
    return (
        <div class="big-papa">
            <nav class="navbar-bkgd">
                <ul class="nav-list">
                    <div class="hey-world">
                        <h2 class="special-h2">Hover Me</h2>
                    </div>
                    <li><a href="#projects">Projects + Xp</a></li>
                    <li><a href="#fun">Fun Things</a></li>
                    <li><a href="#contact">Contact Me!</a></li>
                </ul>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="first-half">
                        <h1 class="text-big">
                            Hola Mundo
                        </h1>
                        <p class="text-small">
                            Hello World, my name is Sofi Bogert
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    * Made with Love *
                </p>
            </footer>
        </div>
    )
}
export default App
