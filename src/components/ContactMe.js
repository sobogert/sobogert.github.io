import '../style/contactMe.css';
// import github_logo_tron from '../assets/logos/tron_logos/github_logo_neon.svg';
// import linkedin_logo_tron from '../assets/logos/tron_logos/linkedin_logo_neon.svg';
// import github_logo_color from '../assets/logos/color_logos/github_logo_color.svg';
// import linkedin_logo_color from '../assets/logos/color_logos/linkedin_logo_color.svg';
import github_logo_professional from '../assets/logos/professional_logos/icons8-github.svg';
import linkedin_logo_professional from '../assets/logos/professional_logos/icons8-linkedin.svg';

export function ContactMe({ selectedTheme }) {
    return (
        <div className="section" id="contact">
            <div className="bordered-title">
                {
                    selectedTheme === 2 ?
                        <h2 className="contact outline">Contact Me</h2>
                        : null
                }
                <h2 className="contact">Contact Me</h2>
            </div>

            <div className="contact-container">
                {
                    selectedTheme === 2 ?
                        <svg className="contact-background" width="240" height="240"
                             viewBox="0 0 240 240" fill="none">
                            <circle cx="120" cy="120" r="117.5" fill={"#D2F15A"} />
                        </svg>
                        : null
                }

                <div className="contact-items">
                    <p><a href="mailto:bogertsophia@gmail.com">bogertsophia@gmail.com</a></p>
                    <p className={"contact-logo"}>
                        <a href="https://www.linkedin.com/in/sophia-bogert/" target="_blank"
                           rel="noreferrer">
                            {
                                <img  src={ linkedin_logo_professional } alt="Linkedin logo by Icons8"
                                      width="48" height="48" />
                                // selectedTheme === 2 ?
                                //     <img  src={ linkedin_logo_tron } alt="Linkedin logo by Icons8 https://icons8.com/icon/114445/linkedin-circled"
                                //           width="48" height="48" />
                                //     :
                                //     <img src={ linkedin_logo_color } alt="Linkedin logo by Icons8 https://icons8.com/icon/114445/linkedin-circled"
                                //          width="48" height="48" />
                            }

                        </a>
                        <a href="https://github.com/sobogert" target="_blank"
                           rel="noreferrer">
                            {
                                <img src={ github_logo_professional } alt="Github logo by Icons8"
                                     width={48} height={48} />
                                // selectedTheme === 2 ?
                                //     <img src={ github_logo_tron } alt="Github logo by Icons8 https://icons8.com/icon/ARy6tFUfwclb/github"
                                //          width={48} height={48} />
                                //     :
                                //     <img src={ github_logo_color } alt="Github logo by Icons8 https://icons8.com/icon/ARy6tFUfwclb/github"
                                //          width={48} height={48} />
                            }
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}