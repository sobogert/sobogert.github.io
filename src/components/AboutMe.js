import '../style/aboutMe.css';

export function AboutMe({ isTron }) {
    return (
        <div className="section">
            <h2 className="about-me-title">About Me</h2>
            <div className="center-container">
                {
                    !isTron ?
                        <svg className="about-me-container" viewBox="0 0 860 242" fill="none" preserveAspectRatio="none">
                            <path d="M435.196 45.0646C265.944 45.2828 32.9837 -46.6313 3.03164 31.4578C-10.5703 66.92 26.1386 82.8642 23.891 120.779C22.2001 149.302 8.60778 170.309 3.03164 198.333C-17.8277 303.165 268.553 190.067 435.196 190.011C603.091 189.954 872.709 298.351 858.803 198.333C854.46 167.102 837.459 152.291 836.339 120.779C835.06 84.8334 858.803 59.7948 858.803 31.4578C858.803 -32.1901 600.695 44.8511 435.196 45.0646Z" fill="#FD6C3C"/>                    </svg>
                        : null
                }

                <p className="about-me-paragraph"> Hello! My name is Sofi Bogert. I'm currently working on the GCS II
                    (GPS) Program at Lockheed Martin as a Software Engineer. Before that, I studied Computer Science
                    at the University of Southern California. I love following the process of a project from design to
                    development, and I'm constantly trying to expand my skills as a full-stack developer and designer.
                    Take a look around my site to learn a bit about me!
                </p>
            </div>
        </div>
    );
}