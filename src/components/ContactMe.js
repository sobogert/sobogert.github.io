import { useState, useEffect } from 'react';
import '../style/contactMe.css';
import github_logo_tron from '../assets/logos/tron_logos/github_logo_tron.svg';
import linkedin_logo_tron from '../assets/logos/tron_logos/linkedin_logo_tron.svg';
import github_logo_color from '../assets/logos/color_logos/github_logo_color.svg';
import linkedin_logo_color from '../assets/logos/color_logos/linkedin_logo_color.svg';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export function ContactMe({ isTron }) {

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBjG6FyELKW9Sx1jvVH0OQbYNmNvlUrkuU",
        authDomain: "sofi-bogert-site.firebaseapp.com",
        projectId: "sofi-bogert-site",
        storageBucket: "sofi-bogert-site.appspot.com",
        messagingSenderId: "645668784949",
        appId: "1:645668784949:web:7a91de0242ceb49ded5a7c",
    };

    const [noFName, setNoFName] = useState(false);
    const [noLName, setNoLName] = useState(false);
    const [noEmail, setNoEmail] = useState(false);
    const [noAt, setNoAt] = useState(false);
    const [email, setEmail] = useState("");
    const isMobile = window.screen.width < 992;

    // Remove tooltip for email address when @ is typed
    useEffect(() => {
        if (noEmail) {
            setNoAt(!(/@/.test(email)));
        }
    }, [email])

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);

    function validateForm(e) {
        // make sure that name and email fields are filled out
        e.preventDefault();

        // Read the form data
        const formData = new FormData(e.target);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());

        let currEmail = String(formJson.email);
        const emailIssue = (currEmail === "") || !(/@/.test(currEmail));
        setNoAt(!(/@/.test(currEmail)));
        setNoFName(formJson.fName === "");
        setNoLName(formJson.lName === "");
        setNoEmail(emailIssue);

        if (!noFName && !noLName && !noEmail) {
            //continue process
        }
    }

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
                        isMobile ?
                            <svg className={"contact-background"} xmlns="http://www.w3.org/2000/svg" width="340" height="680" viewBox="0 0 340 680" fill="none">
                                <path d="M85 170C38.0558 170 0 131.944 0 85C0 38.0558 38.0558 0 85 0C131.944 0 170 38.0558 170 85C170 38.0558 208.056 0 255 0C301.944 0 340 38.0558 340 85C340 131.944 301.944 170 255 170C301.944 170 340 208.056 340 255C340 301.944 301.944 340 255 340C301.944 340 340 378.056 340 425C340 471.944 301.944 510 255 510C301.944 510 340 548.056 340 595C340 641.944 301.944 680 255 680C208.056 680 170 641.944 170 595C170 641.944 131.944 680 85 680C38.0558 680 0 641.944 0 595C0 548.056 38.0558 510 85 510C38.0558 510 0 471.944 0 425C0 378.056 38.0558 340 85 340C38.0558 340 0 301.944 0 255C0 208.056 38.0558 170 85 170Z" fill="#BBF100"/>
                            </svg>
                            :
                            <svg className={"contact-background"} xmlns="http://www.w3.org/2000/svg" width="667" height="500" viewBox="0 0 667 500" fill="none">
                                <path d="M83.3333 166.667C37.3096 166.667 0 129.357 0 83.3333C0 37.3096 37.3096 0 83.3333 0C129.357 0 166.667 37.3096 166.667 83.3333C166.667 37.3096 203.976 0 250 0C296.024 0 333.333 37.3096 333.333 83.3333C333.333 37.3096 370.643 0 416.667 0C462.69 0 500 37.3096 500 83.3333C500 37.3096 537.31 0 583.333 0C629.357 0 666.667 37.3096 666.667 83.3333C666.667 129.357 629.357 166.667 583.333 166.667C629.357 166.667 666.667 203.976 666.667 250C666.667 296.024 629.357 333.333 583.333 333.333C629.357 333.333 666.667 370.643 666.667 416.667C666.667 462.69 629.357 500 583.333 500C537.31 500 500 462.69 500 416.667C500 462.69 462.69 500 416.667 500C370.643 500 333.333 462.69 333.333 416.667C333.333 462.69 296.024 500 250 500C203.976 500 166.667 462.69 166.667 416.667C166.667 462.69 129.357 500 83.3333 500C37.3096 500 0 462.69 0 416.667C0 370.643 37.3096 333.333 83.3333 333.333C37.3096 333.333 0 296.024 0 250C0 203.976 37.3096 166.667 83.3333 166.667Z" fill="#BBF100"/>
                            </svg>
                        : null
                }

                <div className="contact-items">
                    <form onSubmit={validateForm}>
                        <div className={"form-line"}>
                            {
                                noFName ?
                                    <input type={"text"} className={"err"} placeholder={"first name *"} name={"fName"} />
                                    :
                                    <input type={"text"} placeholder={"first name *"} name={"fName"} />
                            }
                            {
                                noLName ?
                                    <input type={"text"} className={"err"} placeholder={"last name *"} name={"lName"} />
                                    :
                                    <input type={"text"} placeholder={"last name *"} name={"lName"} />
                            }
                        </div>
                        <div className={"form-line"}>
                            {
                                noEmail ?
                                    <input type={"text"} className={"err"} placeholder={"email *"} name={"email"}
                                        value={email} onChange={e => setEmail(e.target.value)}/>
                                    :
                                    <input type={"text"} placeholder={"email *"} name={"email"}/>
                            }
                            { noAt ?
                            <div className={"missing-at"}>Please include an '@' in the email address.</div>
                            : null }
                            <input type={"text"} placeholder={"company"} name={"company"}/>
                        </div>
                        <div className={"form-line"}>
                            <textarea className={"wide-input"} placeholder={"message"}  name={"message"}/>
                        </div>
                        <button type={"submit"}>Submit</button>
                    </form>

                    {
                        isMobile ?
                            <div className={"links"}>
                                <div className={"top_links"}>
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
                                </div>
                                bogertsophia@gmail.com
                            </div>
                            :
                            <div className={"links"}>
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
                                bogertsophia@gmail.com
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
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}