import '../style/projects.css';
import c_logo_green from '../assets/logos/tron_logos/c_logo_green.svg';
import c_logo_color from '../assets/logos/color_logos/c_logo_color.svg';
import cs_logo_green from '../assets/logos/tron_logos/cs_logo_green.svg';
import cs_logo_color from '../assets/logos/color_logos/cs_logo_color.svg';
import cpp_logo_green from '../assets/logos/tron_logos/cpp_logo_green.svg';
import cpp_logo_color from '../assets/logos/color_logos/cpp_logo_color.svg';
import java_logo_green from '../assets/logos/tron_logos/java_logo_green.svg';
import java_logo_color from '../assets/logos/color_logos/java_logo_color.svg';
import javascript_logo_green from '../assets/logos/tron_logos/javascript_logo_green.svg';
import javascript_logo_color from '../assets/logos/color_logos/javascript_logo_color.svg';
import python_logo_green from '../assets/logos/tron_logos/python_logo_green.svg';
import python_logo_color from '../assets/logos/color_logos/python_logo_color.svg';

export function Projects({ isTron }) {
    return (
        <div className="section" id="projects">
            <h2>Projects</h2>
            <div className="projects-container">

                {/* MoveIntel project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="402" height="314"
                                 viewBox="0 0 402 314" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M401.193 99.9085C401.193 84.6031 386.189 83.0937 381.892 68.704C375.078 45.8852 409.116 31.8536 387.316 11.7428C365.516 -8.36807 328.729 10.7486 315.435 19.3352C301.032 19.0988 295.649 0.714996 275.324 0.714996C255 0.714996 252.39 19.5437 237.325 19.3352C222.627 19.1317 218.826 0.714996 199.557 0.714996C180.289 0.714996 171.688 23.1791 157.103 23.4092C142.105 23.6459 137.317 0.714996 119.103 0.714996C100.89 0.714996 92.7192 19.4428 78.9927 23.4092C57.0332 29.7548 40 -16.466 9.83104 11.7428C-15.5098 35.4371 19.6607 45.3947 15.0855 68.704C12.4354 82.2051 5.90439 83.0197 1.46549 100.964C-2.97341 118.908 13.1872 122.765 15.0855 138.436C16.3811 149.131 0.0589831 165.296 1.46549 174.797C3.14406 186.135 14.2291 202.795 15.0855 210.157C16.1978 219.717 5.42515 224.269 1.46549 237.5C-1.33739 246.866 15.0855 261.5 15.0855 274.5C14.9086 283.327 1.08969 299.516 7.83104 306.173C31.1319 329.185 56.8757 288.597 78.9927 293.904C92.1073 297.051 99.3068 313.562 119.103 313.562C138.9 313.562 142.349 294.276 157.103 293.904C171.857 293.531 179.761 313.562 199.557 313.562C219.354 313.562 223.912 294.256 237.325 293.904C251.567 293.53 255.528 313.562 275.324 313.562C295.121 313.562 302.541 297.103 315.435 293.904C337.737 288.37 364.5 328.289 387.316 306.173C399.974 293.904 381.238 283.238 381.892 274.5C382.565 265.503 403.46 246.884 401.193 237.5C398.057 224.515 381.892 216.979 381.892 207.157C381.892 196.436 401.193 190.102 401.193 174.797C401.193 152.63 379.932 148.638 381.892 138.436C384.38 125.482 401.193 115.214 401.193 99.9085Z"
                                    fill="#70B8FF"/>
                            </svg>
                            : null
                    }
                    <div className="project-header">
                        <h3> MoveIntel Website </h3>
                        <a href="https://icons8.com/icon/108784/javascript" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ javascript_logo_green } alt="JavaScript logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img src={ javascript_logo_color } alt="JavaScript logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> A private website for a physical therapy platform to connect
                        practitioners with patients from anywhere.
                        I worked with a team of 3 other students to continue full-stack development of the site. We used
                        a VueJS framework,
                        with Firestore and AWS S3 as databases for the project.
                    </p>
                </div>

                {/* Mark IV-B project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" width="409" height="294"
                                 viewBox="0 0 409 294" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M400.17 81.0843C400.17 67.0522 392.5 68.0854 387.17 55.0844C381.84 42.0834 412 22.5846 396 5.5846C380 -11.4154 370 15.8192 360.5 15.8192C347 15.8192 340.5 1.08669 322 1.08662C307.5 1.08658 292 19.8192 277.67 19.8192C263.34 19.8192 255 1.08662 239 1.08669C223 1.08675 216 19.8192 200.5 19.8192C185 19.8192 173.5 0.857792 159 1.08662C144.5 1.31546 138 19.8192 120.5 19.8192C104 19.8192 91.4948 1.10858 71.4998 1.08662C55.9998 1.08662 53.9998 15.9787 45.4999 16.8193C40.4998 17.3137 20.0332 -5.41543 8.99994 9.08539C-4.69637 27.0862 17 33.6691 17 49.0846C17 64.5 -0.000100657 62.0848 -0.000100657 83.0846C-0.000100657 95 16.9998 104.57 16.9998 112.585C16.9998 128.086 -0.000100657 125.085 -0.000100657 145.084C-0.000100657 152.562 14.0241 164.75 17 180.5C16.9999 191.5 -2.12062 205.337 -0.000127152 216.5C2.74164 230.933 17 239 17 250.584C16.9999 257.585 -6.0001 268.586 8.9999 280.586C23.9999 292.586 38.4634 271.118 45.4999 271.118C56.9999 271.118 56.9999 284.586 71.4999 284.586C95.4999 284.586 94.9999 266.115 114.5 265.617C134 265.118 143 284.586 159 284.586C175 284.586 183 266.115 198.5 265.617C214 265.118 222.353 284.586 239 284.586C255.647 284.586 258.5 266.115 275 265.617C291.5 265.118 297.5 289.055 315.5 284.586C333.5 280.117 343 268.92 357 269.585C371 270.249 379 289.585 392.5 280.117C412.25 266.265 387.177 258.086 388 252.584C389.077 245.389 398.092 233.451 400.17 217.5C401.636 206.249 385.935 191.745 387.17 181C388.807 166.754 400.17 161 400.17 149.584C400.17 138.169 387.17 125.585 387.17 111.584C387.17 97.5833 400.17 95.1165 400.17 81.0843Z"
                                    fill="#70B8FF" stroke="#70B8FF" strokeWidth="4"/>
                            </svg>
                            : null
                    }

                    <div className="project-header">
                        <h3> Mark IV-B Website </h3>
                        <a href="https://icons8.com/icon/108784/javascript" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ javascript_logo_green } alt="JavaScript logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img src={ javascript_logo_color } alt="JavaScript logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> A private website for an Air Force program supported by Lockheed
                        Martin to check the live
                        statuses of satellites around the world. I moved the site from an outdated ASP.NET framework to
                        a React framework. I also redesigned the site to improve the user experience.
                    </p>
                </div>

                {/* oil calculator project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="401" height="286"
                                 viewBox="0 0 401 286" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M400.17 81.0843C400.17 67.0522 392.5 68.0854 387.17 55.0844C381.84 42.0834 412 22.5846 396 5.5846C380 -11.4154 370 15.8192 360.5 15.8192C347 15.8192 340.5 1.08669 322 1.08662C307.5 1.08658 292 19.8192 277.67 19.8192C263.34 19.8192 255 1.08662 239 1.08669C223 1.08675 216 19.8192 200.5 19.8192C185 19.8192 173.5 0.857792 159 1.08662C144.5 1.31546 138 19.8192 120.5 19.8192C104 19.8192 91.4948 1.10858 71.4998 1.08662C55.9998 1.08662 53.9998 15.9787 45.4999 16.8193C40.4998 17.3137 20.0332 -5.41543 8.99994 9.08539C-4.69637 27.0862 17 33.6691 17 49.0846C17 64.5 -0.000100657 62.0848 -0.000100657 83.0846C-0.000100657 95 16.9998 104.57 16.9998 112.585C16.9998 128.086 -0.000100657 125.085 -0.000100657 145.084C-0.000100657 152.562 14.0241 164.75 17 180.5C16.9999 191.5 -2.12062 205.337 -0.000127152 216.5C2.74164 230.933 17 239 17 250.584C16.9999 257.585 -6.0001 268.586 8.9999 280.586C23.9999 292.586 38.4634 271.118 45.4999 271.118C56.9999 271.118 56.9999 284.586 71.4999 284.586C95.4999 284.586 94.9999 266.115 114.5 265.617C134 265.118 143 284.586 159 284.586C175 284.586 183 266.115 198.5 265.617C214 265.118 222.353 284.586 239 284.586C255.647 284.586 258.5 266.115 275 265.617C291.5 265.118 297.5 289.055 315.5 284.586C333.5 280.117 343 268.92 357 269.585C371 270.249 379 289.585 392.5 280.117C412.25 266.265 387.177 258.086 388 252.584C389.077 245.389 398.092 233.451 400.17 217.5C401.636 206.249 385.935 191.745 387.17 181C388.807 166.754 400.17 161 400.17 149.584C400.17 138.169 387.17 125.585 387.17 111.584C387.17 97.5833 400.17 95.1165 400.17 81.0843Z"
                                    fill="#70B8FF"/>
                            </svg>
                            : null
                    }
                    <div className="project-header">
                        <h3> Premix Oil Calculator Site </h3>
                        <a href="https://icons8.com/icon/13441/python" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ python_logo_green } alt="Python logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img src={ python_logo_color } alt="Python logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> A private website for Sunderstorm Inc. to generate measurements for
                        use
                        within the company's production process.
                        The website is built on a Flask framework and uses a firebase database.
                    </p>
                </div>

                {/* parkour's edge  project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="401" height="288"
                                 viewBox="0 0 401 288" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M400.3 107.909C400.3 92.6031 385.296 90.0937 380.999 75.704C374.185 52.8852 408.223 30.8536 386.423 10.7428C364.623 -9.36807 327.836 9.7486 314.542 18.3352C300.139 18.0988 294.756 -0.285004 274.431 -0.285004C254.107 -0.285004 251.497 18.5437 236.432 18.3352C221.734 18.1317 217.933 -0.285004 198.664 -0.285004C179.396 -0.285004 170.795 22.1791 156.21 22.4092C141.212 22.6459 136.424 -0.285004 118.21 -0.285004C99.9972 -0.285004 91.8262 18.4428 78.0997 22.4092C56.1402 28.7548 35.2789 -12.9516 9.9381 10.7428C-15.4027 34.4371 17.7678 52.3947 13.1926 75.704C10.5425 89.2051 6.01145 91.0197 1.57255 108.964C-2.86635 126.908 11.2943 130.765 13.1926 146.436C14.4882 157.131 0.166042 172.296 1.57255 181.797C3.25112 193.135 12.3361 209.795 13.1926 214.157C17.6492 236.854 -13.3628 257.162 9.9381 280.173C33.239 303.185 55.9827 262.597 78.0997 267.904C91.2143 271.051 98.4139 287.562 118.21 287.562C138.007 287.562 141.456 268.276 156.21 267.904C170.964 267.531 178.868 287.562 198.664 287.562C218.461 287.562 223.019 268.256 236.432 267.904C250.674 267.53 254.635 287.562 274.431 287.562C294.228 287.562 301.648 271.103 314.542 267.904C336.845 262.37 356.825 303.606 380.999 280.173C405.173 256.741 380.999 237.971 380.999 214.157C380.999 203.436 400.3 197.102 400.3 181.797C400.3 159.63 379.039 156.638 380.999 146.436C383.487 133.482 400.3 123.214 400.3 107.909Z"
                                    fill="#70B8FF"/>
                            </svg>
                            : null
                    }

                    <div className="project-header">
                        <h3> Parkour&#39;s Edge </h3>
                        <a href="https://icons8.com/icon/40669/c++" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ cpp_logo_green } alt="C++ logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img src={ cpp_logo_color } alt="C++ logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> Built a multi-level 3D platformer game in C++ using the SDL library.
                        The game features a custom physics engine and a custom collision detection system.
                    </p>
                </div>

                {/* naive bayes classifier project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="401" height="288"
                                 viewBox="0 0 401 288" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M400.3 107.909C400.3 92.6031 385.296 90.0937 380.999 75.704C374.185 52.8852 408.223 30.8536 386.423 10.7428C364.623 -9.36807 327.836 9.7486 314.542 18.3352C300.139 18.0988 294.756 -0.285004 274.431 -0.285004C254.107 -0.285004 251.497 18.5437 236.432 18.3352C221.734 18.1317 217.933 -0.285004 198.664 -0.285004C179.396 -0.285004 170.795 22.1791 156.21 22.4092C141.212 22.6459 136.424 -0.285004 118.21 -0.285004C99.9972 -0.285004 91.8262 18.4428 78.0997 22.4092C56.1402 28.7548 35.2789 -12.9516 9.9381 10.7428C-15.4027 34.4371 17.7678 52.3947 13.1926 75.704C10.5425 89.2051 6.01145 91.0197 1.57255 108.964C-2.86635 126.908 11.2943 130.765 13.1926 146.436C14.4882 157.131 0.166042 172.296 1.57255 181.797C3.25112 193.135 12.3361 209.795 13.1926 214.157C17.6492 236.854 -13.3628 257.162 9.9381 280.173C33.239 303.185 55.9827 262.597 78.0997 267.904C91.2143 271.051 98.4139 287.562 118.21 287.562C138.007 287.562 141.456 268.276 156.21 267.904C170.964 267.531 178.868 287.562 198.664 287.562C218.461 287.562 223.019 268.256 236.432 267.904C250.674 267.53 254.635 287.562 274.431 287.562C294.228 287.562 301.648 271.103 314.542 267.904C336.845 262.37 356.825 303.606 380.999 280.173C405.173 256.741 380.999 237.971 380.999 214.157C380.999 203.436 400.3 197.102 400.3 181.797C400.3 159.63 379.039 156.638 380.999 146.436C383.487 133.482 400.3 123.214 400.3 107.909Z"
                                    fill="#70B8FF"/>
                            </svg>
                            : null
                    }

                    <div className="project-header">
                        <h3> Naive Bayes&#39; Classifier </h3>
                        <a href="https://icons8.com/icon/40669/c++" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ cpp_logo_green } alt="C++ logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img src={ cpp_logo_color } alt="C++ logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> Created a simple Naive Bayes&#39;Classifier to take in files of
                        data for training, and calculates probability for classifications
                        of objects based on given descriptions.
                    </p>
                </div>

                {/* drink delivery android app */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="402" height="215"
                                 viewBox="0 0 402 215" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M400.47 81.0843C400.47 67.0522 392.8 68.0854 387.47 55.0844C382.141 42.0834 412.3 22.5846 396.3 5.5846C380.3 -11.4154 370.3 15.8192 360.8 15.8192C347.3 15.8192 340.8 1.08669 322.3 1.08662C307.8 1.08658 292.3 19.8192 277.97 19.8192C263.641 19.8192 255.3 1.08662 239.3 1.08669C223.3 1.08675 216.3 19.8192 200.8 19.8192C185.3 19.8192 173.8 0.857792 159.3 1.08662C144.8 1.31546 138.3 19.8192 120.8 19.8192C104.3 19.8192 91.7952 1.10858 71.8002 1.08662C56.3002 1.08662 54.3002 15.9787 45.8003 16.8193C40.8002 17.3137 20.3336 -5.41543 9.30033 9.08539C-4.39597 27.0862 17.3006 29.0845 17.3004 49.0846C17.3002 69.0846 0.300293 62.0848 0.300293 83.0846C0.300293 100.085 17.3001 104.57 17.3001 112.585C17.3001 128.086 0.300293 125.085 0.300293 145.084C0.300293 165.083 17.3003 162.085 17.3003 179.584C17.3003 186.585 -5.69971 197.586 9.30029 209.586C24.3003 221.585 38.7638 200.118 45.8003 200.118C57.3003 200.118 57.3003 213.586 71.8003 213.586C95.8003 213.586 95.3003 195.115 114.8 194.617C134.3 194.118 143.3 213.586 159.3 213.586C175.3 213.586 183.3 195.115 198.8 194.617C214.3 194.118 222.653 213.586 239.3 213.586C255.947 213.586 258.8 195.115 275.3 194.617C291.8 194.118 297.8 218.055 315.8 213.586C333.8 209.117 343.3 197.92 357.3 198.585C371.3 199.249 379.3 218.585 392.8 209.117C412.55 195.265 387.477 187.085 388.3 181.584C391.144 162.585 400.47 164.083 400.47 149.584C400.47 135.085 387.47 125.585 387.47 111.584C387.47 97.5833 400.47 95.1165 400.47 81.0843Z"
                                    fill="#70B8FF"/>
                            </svg>
                            : null
                    }

                    <div className="project-header">
                        <h3> USCDoorDrink App </h3>
                        <a href="https://icons8.com/icon/13679/java" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ java_logo_green } alt="Java logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img src={ java_logo_color } alt="Java logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> An Android app for USC students to order coffee or tea anywhere
                        near campus.
                    </p>
                </div>

                {/* temperature sensor project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="401" height="313"
                                 viewBox="0 0 401 313" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M400.17 72.0062C400.17 56.6031 392.5 58.7372 387.17 44.466C381.84 30.1949 409.397 21.7556 396 6.13021C380 -12.5306 370 17.3648 360.5 17.3648C347 17.3648 340.5 1.19285 322 1.19279C307.5 1.19273 292 21.7556 277.67 21.7556C263.34 21.7556 255 1.19279 239 1.19285C223 1.19292 216 21.7556 200.5 21.7556C185 21.7556 173.5 0.941597 159 1.19279C144.5 1.44397 138 21.7556 120.5 21.7556C104 21.7556 91.4948 1.21688 71.4998 1.19279C55.9998 1.19279 53.9998 17.5398 45.4999 18.4625C40.4998 19.0052 15.0332 -9.94451 3.99994 5.97303C-7.03331 21.8906 17 31.5 17 43.8801C17 60.8016 -9.86606e-05 51.1504 -9.86606e-05 74.2018C-9.86606e-05 87.2814 16.9998 95.7867 16.9998 104.584C16.9998 121.599 -9.86606e-05 116.306 -9.86606e-05 138.259C-9.86606e-05 146.467 14.0241 151.846 17 169.135C16.9999 181.209 -2.12062 185.398 -0.000125125 197.652C-0.00012514 208 17 214.5 17 225.91C19.5144 233.61 -0.000125155 235.5 -9.86606e-05 250.5C-8.01086e-05 261 17 262.35 17 275.066C16.9999 282.751 -6.0001 294.826 8.9999 307.998C23.9999 321.171 38.4635 297.606 45.4999 297.606C56.9999 297.606 56.9999 312.389 71.4999 312.389C95.4999 312.389 94.9999 292.114 114.5 291.567C134 291.02 143 312.389 159 312.389C175 312.389 183 292.114 198.5 291.567C214 291.02 222.353 312.389 239 312.389C255.647 312.389 258.5 292.114 275 291.567C291.5 291.02 297.5 317.295 315.5 312.389C333.5 307.484 343 295.194 357 295.923C371 296.652 379 317.877 392.5 307.484C412.25 292.279 388 283.356 388 277.262C388 273 400.17 259 400.17 250.5C399 243.5 385.623 233.672 387.17 225.91C388.991 216.776 399.432 204.965 400.17 198.749C401.636 186.399 385.935 180.478 387.17 168.683C388.807 153.045 400.17 148.729 400.17 136.199C400.17 123.668 387.17 118.855 387.17 103.486C387.17 88.1171 400.17 87.4092 400.17 72.0062Z"
                                    fill="#70B8FF"/>
                            </svg>
                            : null
                    }

                    <div className="project-header">
                        <h3> Temperature Sensor </h3>
                        <a href="https://icons8.com/icon/40670/c-programming" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ c_logo_green } alt="C logo by Icons8"
                                         width={48} height={48}/>
                                    :
                                    <img src={ c_logo_color } alt="C logo by Icons8"
                                         width={48} height={48}/>
                            }
                        </a>
                    </div>
                    <p className="project-content"> Built a temperature sensor and warning device compromised of an
                        Arduino, rotary encoder, DS18B20 temperature sensor, and various
                        other components.<br />Developed software to display temperature
                            changes and play tones for different temperature ranges from hot
                            to cold, user is able to designate these temperature ranges.
                    </p>
                </div>

                {/* pdf scraper project */}
                <div className="project-box">
                    {
                        !isTron ?
                            <svg className="project-background" xmlns="http://www.w3.org/2000/svg" width="402" height="314"
                                 viewBox="0 0 402 314" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M401.193 99.9085C401.193 84.6031 386.189 83.0937 381.892 68.704C375.078 45.8852 409.116 31.8536 387.316 11.7428C365.516 -8.36807 328.729 10.7486 315.435 19.3352C301.032 19.0988 295.649 0.714996 275.324 0.714996C255 0.714996 252.39 19.5437 237.325 19.3352C222.627 19.1317 218.826 0.714996 199.557 0.714996C180.289 0.714996 171.688 23.1791 157.103 23.4092C142.105 23.6459 137.317 0.714996 119.103 0.714996C100.89 0.714996 92.7192 19.4428 78.9927 23.4092C57.0332 29.7548 40 -16.466 9.83104 11.7428C-15.5098 35.4371 19.6607 45.3947 15.0855 68.704C12.4354 82.2051 5.90439 83.0197 1.46549 100.964C-2.97341 118.908 13.1872 122.765 15.0855 138.436C16.3811 149.131 0.0589831 165.296 1.46549 174.797C3.14406 186.135 14.2291 202.795 15.0855 210.157C16.1978 219.717 5.42515 224.269 1.46549 237.5C-1.33739 246.866 15.0855 261.5 15.0855 274.5C14.9086 283.327 1.08969 299.516 7.83104 306.173C31.1319 329.185 56.8757 288.597 78.9927 293.904C92.1073 297.051 99.3068 313.562 119.103 313.562C138.9 313.562 142.349 294.276 157.103 293.904C171.857 293.531 179.761 313.562 199.557 313.562C219.354 313.562 223.912 294.256 237.325 293.904C251.567 293.53 255.528 313.562 275.324 313.562C295.121 313.562 302.541 297.103 315.435 293.904C337.737 288.37 364.5 328.289 387.316 306.173C399.974 293.904 381.238 283.238 381.892 274.5C382.565 265.503 403.46 246.884 401.193 237.5C398.057 224.515 381.892 216.979 381.892 207.157C381.892 196.436 401.193 190.102 401.193 174.797C401.193 152.63 379.932 148.638 381.892 138.436C384.38 125.482 401.193 115.214 401.193 99.9085Z"
                                    fill="#70B8FF"/>
                            </svg>
                            :null
                    }
                    <div className="project-header">
                        <h3> PDF Scraper </h3>
                        <a href="https://icons8.com/icon/45490/c-sharp-logo-2" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ cs_logo_green } alt="C# logo by Icons8"
                                         width={48} height={48} />
                                    :
                                    <img
                                         src={ cs_logo_color } alt="C# logo by Icons8"
                                         width={48} height={48} />
                            }
                        </a>
                    </div>
                    <p className="project-content"> A desktop application to scrape invoice data and export the parsed
                        data to the company's ERP software.
                        Uses advanced pdf scraping techniques to scrape unstructured data tables.
                        I used this project to learn how to create desktop applications
                        and how to scrape pdfs. As a result, I ended up learning how to
                        carry out the entire process in both Python and C#!
                    </p>
                </div>
            </div>
        </div>
    );
}