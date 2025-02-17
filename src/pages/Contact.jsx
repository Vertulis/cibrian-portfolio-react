import styles from '../modules/Contact.module.css';
// Importing toastify module
import { toast } from "react-toastify";
// Import toastify CSS file
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    function copyPhoneNumber() {
        navigator.clipboard.writeText('067 231 5621');
        toast("Copied Phone Number");
    }

    function copyEmail() {
        navigator.clipboard.writeText('hofstacibrian@gmail.com');
        toast("Copied Email");
    }

    return(
        <>
            <h1>Contact</h1>
            <form className={styles.contactForm} action="mailto:hofstacibrian@gmail.com" method="GET">
                <p className={styles.text}>This form will pre-populate your existing email application with the fields below:</p>
                <input className={styles.subjectInput} name="subject" type="text" placeholder="Subject..." />
                <textarea className={styles.bodyInput} name="body" placeholder="Message..."></textarea>
                <input className={styles.sendBtn} type="submit" value="Send Email" />
            </form>

            <div className={styles.linksContainer}>
            <i className={`${"fa-brands fa-linkedin"} ${styles.contactIcons}`} 
            onClick={() => window.location.href = "https://www.linkedin.com/in/cibrian-hofsta-b95508279"}
            ></i>

                <i className={`${"fa-brands fa-github"} ${styles.contactIcons}`} onClick={() => window.location.href = "https://github.com/Vertulis"}></i>
                <i className={`${"fa-solid fa-phone"} ${styles.contactIcons}`} onClick={copyPhoneNumber} ></i>
                <i className={`${"fa-solid fa-envelope"} ${styles.contactIcons}`} onClick={copyEmail}></i>
            </div>
        </>
        
    )
}

export default Contact