import styles from '../modules/About.module.css'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import android from '../images/android.png';
import html from '../images/android.png';
import css from '../images/css-3.png';
import csharp from '../images/c-sharp.png';
import java from '../images/java.png';
import php from '../images/php.png';
import sql from '../images/sql.png';
import react from '../images/atom.png';
import javascript from '../images/js.png';
import aspnet from '../images/web.png';
function About(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
            // Wait for the iframe to load, then modify its styles
            setTimeout(() => {
                const credlyIframe = document.querySelector('.credlyBadgesContainer iframe');
                if (credlyIframe) {
                    credlyIframe.style.border = "2px solid hsl(192, 100%, 50%)"; 
                    credlyIframe.style.backgroundColor = "white"; 
                    credlyIframe.style.color = "black"; 
                }
            }, 1000); // Give time for the iframe to load
        };
    }, []);
    return(
        <div className={styles.aboutContainer}>
          <h1>About Me</h1>  
          <hr /> 
          <h2 className={styles.mainHeading}>Get to know Cibrian Hofsta</h2>
          <p className={styles.bodyText}>
                Hi, a passionate and driven software developer with a 
                Diploma in IT in Software Development. 
                <br />
                I have hands-on experience working with a diverse tech stack,
                including Java, C#, PHP, ASP.NET, Kotlin, SQL, and web technologies like HTML, CSS, and React. 
                <div className={styles.languageImagesContainer}>
                    <img className={styles.languageImage} src={java} alt='Java logo'/>
                    <img className={styles.languageImage} src={html} alt='HTML logo'/>
                    <img className={styles.languageImage} src={css} alt='CSS logo'/>
                    <img className={styles.languageImage} src={javascript} alt='Javascript logo'/>
                    <img className={styles.languageImage} src={react} alt='React logo'/>
                    <img className={styles.languageImage} src={php} alt='PHP logo'/>
                    <img className={styles.languageImage} src={aspnet} alt='ASP.NET icon'/>
                    <img className={styles.languageImage} src={sql} alt='SQL icon'/>
                    <img className={styles.languageImage} src={android} alt='Android logo'/>
                    <img className={styles.languageImage} src={csharp} alt='C-Sharp logo'/>
                </div>
                <br />
                I'm always eager to learn and expand my skills, with a keen interest in backend 
                development and cloud computing. 
                <br />
                My certifications, including the AWS CL02, reflect my commitment to continuous
                growth in the field.
                <div className={styles.credleyBadgesContainer}>
                    <div 
                        className={styles.credleyBadge}
                        data-iframe-width="150" 
                        data-iframe-height="270" 
                        data-share-badge-id="14cba0a3-f17f-4bf6-b712-7b40791915e6" 
                        data-share-badge-host="https://www.credly.com">
                    </div>
                    <div 
                        className={styles.credleyBadge}
                        data-iframe-width="350px" 
                        data-iframe-height="270"
                        data-share-badge-id="12a93632-415a-49a5-8360-a07797af2890" 
                        data-share-badge-host="https://www.credly.com">
                    </div>     
                </div>
                <br />
                <br />
                Beyond my technical knowledge, my professional experiences
                as a Lecturer Assistant, Examination Assistant, and 
                First-Line User Assistance Technician have equipped me with 
                problem-solving, communication, and analytical skills. 
                <br />
                Currently, I am refining my expertise through UVU Capaciti,
                where I am gaining deeper insights into the industry.
                <br />
                <br />
                I'm eager to transition into a full-time software development 
                role where I can contribute, grow, and innovate. 
                <br />
                <br />
                Feel free to&nbsp; 
                <NavLink to="/projects" className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}> 
                explore my projects 
                </NavLink> and&nbsp;
                <NavLink to="/contact" className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}> 
                reach out 
                </NavLink> for collaboration!
          </p>
          <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
          
        </div>
       
    )
}

export default About