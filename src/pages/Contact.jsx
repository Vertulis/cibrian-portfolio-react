import styles from '../modules/Contact.module.css';
// Importing toastify module
import { toast } from "react-toastify";
// Import toastify CSS file
import "react-toastify/dist/ReactToastify.css";

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        toast("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "31fb1929-9a77-4927-a5d2-d55230cab699");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        toast("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        toast(data.message);
        }
    };
    function copyPhoneNumber() {
        navigator.clipboard.writeText('067 231 5621');
        toast("Copied Phone Number");
    }

    function copyEmail() {
        navigator.clipboard.writeText('hofstacibrian@gmail.com');
        toast("Copied Email");
    }

    return(
        <div className={styles.contactContainer}>
            <h1>Contact</h1>
            <form className={styles.contactForm} onSubmit={onSubmit}>
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
        </div>
        
    )
}

export default Contact