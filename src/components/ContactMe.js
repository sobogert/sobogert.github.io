import { useState, useEffect } from 'react';
import '../style/contactMe.css';
// import github_logo_tron from '../assets/logos/tron_logos/github_logo_tron.svg';
import github_logo_tron from '../assets/logos/tron_logos/github_logo_neon.svg';
// import linkedin_logo_tron from '../assets/logos/tron_logos/linkedin_logo_tron.svg';
import linkedin_logo_tron from '../assets/logos/tron_logos/linkedin_logo_neon.svg';
import github_logo_color from '../assets/logos/color_logos/github_logo_color.svg';
import linkedin_logo_color from '../assets/logos/color_logos/linkedin_logo_color.svg';

export function ContactMe({ isTron }) {
    return (
        <div className="section" id="contact">
            <div className="bordered-title">
                {
                    !isTron ?
                        <h2 className="contact outline">Contact Me!</h2>
                        : null
                }
                <h2 className="contact">Contact Me!</h2>
            </div>

            <div className="contact-container">
                {
                    !isTron ?
                        <svg className="contact-background" width="240" height="240"
                             viewBox="0 0 240 240" fill="none">
                            <circle cx="120" cy="120" r="117.5" fill={"#D2F15A"} stroke={"#BBF100"} strokeWidth={"4"}/>
                        </svg>
                        : null
                }

                <div className="contact-items">
                    <p> &#9993; bogertsophia@gmail.com</p>
                    <p className={"contact-logo"}>
                        <a href="https://www.linkedin.com/in/sophia-bogert/" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img  src={ linkedin_logo_tron } alt="Linkedin logo by Icons8 https://icons8.com/icon/114445/linkedin-circled"
                                          width="48" height="48" />
                                    :
                                    <img src={ linkedin_logo_color } alt="Linkedin logo by Icons8 https://icons8.com/icon/114445/linkedin-circled"
                                         width="48" height="48" />
                            }

                        </a>
                        <a href="https://github.com/sobogert" target="_blank"
                           rel="noreferrer">
                            {
                                isTron ?
                                    <img src={ github_logo_tron } alt="Github logo by Icons8 https://icons8.com/icon/ARy6tFUfwclb/github"
                                         width={48} height={48} />
                                    :
                                    <img src={ github_logo_color } alt="Github logo by Icons8 https://icons8.com/icon/ARy6tFUfwclb/github"
                                         width={48} height={48} />
                            }
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}