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
                        <svg className="contact-background" xmlns="http://www.w3.org/2000/svg" width="240" height="240"
                             viewBox="0 0 240 240" fill="none">
                            <circle cx="120" cy="120" r="120" fill="#BBF100"/>
                        </svg>
                        : null
                }

                <div className="contact-items">
                    <p> &#9993; bogertsophia@gmail.com</p>
                    <p>
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