import '../style/aboutMe.css';

export function AboutMe({ isTron }) {
    return (
        <div className="section">
            <h2 className="about-me-title">About Me</h2>
            <div className="center-container">
                {
                    !isTron ?
                        <svg className="about-me-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 861 242" fill="none"
                         preserveAspectRatio="none">
                        <path
                            d="M436.096 45.0646C266.844 45.2828 33.8841 -46.6313 3.93203 31.4578C-9.66994 66.92 27.039 82.8642 24.7914 120.779C23.1005 149.302 9.50817 170.309 3.93203 198.333C-16.9273 303.165 269.454 190.067 436.096 190.011C603.991 189.954 873.609 298.351 859.703 198.333C855.361 167.102 838.36 152.291 837.239 120.779C835.961 84.8334 859.703 59.7948 859.703 31.4578C859.703 -32.1901 601.595 44.8511 436.096 45.0646Z"
                            fill="#FF4000"/>
                    </svg>
                        : null
                }


                <p className="about-me-paragraph"> Hello, my name is Sophia Bogert. I'm a recent graduate from the
                    University of Southern California, where I studied Computer Science.
                    I'm interested in full-stack development and product design. Take a look around my site to learn a
                    bit about me!
                </p>
            </div>
        </div>
    );
}