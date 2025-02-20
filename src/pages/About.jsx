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
                I'm always motivated to learn and expand my skills, with a keen interest in backend 
                development and cloud computing. 
                <br />
                <br />
                Below are some of my certifications that reflect my commitment to continuous
                growth in the field.
                <div className={styles.credleyBadgesContainer}>
                    <a href='https://www.credly.com/badges/184e66fb-0353-4e87-bae4-2fc4a4616e48/public_url'>
                        <div className={styles.credleyBadge}>
                            <h3>Relational Databases (RDBMS) Essentials</h3>
                            <hr />
                            <p>Issued: 07 January 2025</p>
                            <p>Issued by: Coursera</p>
                        </div>
                    </a>

                    <a href="https://www.credly.com/badges/b58ace09-a52f-4a9f-9d66-9073290fffd7/public_url">
                        <div className={styles.credleyBadge}>
                            <h3>Artificial Intelligence Essentials V2</h3>
                            <hr />
                            <p>Issued: 23 January 2025</p>
                            <p>Issued by: Coursera</p>
                        </div>
                    </a>
                    
                    <a href="https://www.credly.com/badges/261ad4a0-423b-4e35-ad36-94a7d92ff057/public_url">
                        <div className={styles.credleyBadge}>
                            <h3>Generative AI Essentials</h3>
                            <hr />
                            <p>Issued: 27 January 2025</p>
                            <p>Issued by: Coursera</p>
                        </div>
                    </a>
                    
                    <a href="https://www.credly.com/badges/14cba0a3-f17f-4bf6-b712-7b40791915e6/public_url">
                        <div className={styles.credleyBadge}>
                            <h3>Artificial Intelligence</h3>
                            <hr />
                            <p>Issued: 19 February 2025</p>
                            <p>Issued by: Coursera</p>
                        </div>
                    </a>

                    <a href="https://www.credly.com/badges/8917b58f-2557-40f7-8031-60913082f21e/public_url">
                        <div className={styles.credleyBadge}>
                            <h3>Generative AI: Prompt Engineering</h3>
                            <hr />
                            <p>Issued: 20 February 2025</p>
                            <p>Issued by: Coursera</p>
                        </div>
                    </a>
                    
                    <a href="https://www.credly.com/badges/12a93632-415a-49a5-8360-a07797af2890/public_url">
                        <div className={styles.credleyBadge}>
                            <h3>Relational Databases (RDBMS) Essentials</h3>
                            <hr />
                            <p>Issued: 27 November 2024 - 27 November 2027</p>
                            <p>Issued by: AWS</p>
                        </div>
                    </a>
                    
                </div>
                <br />
                <br />
                Beyond my technical knowledge, I have work experiences
                as a:
                <ul>
                    <li>Lecturer Assistant</li>
                    <li>Examination Assistant</li>
                    <li>and First-Line User Assistance Technician</li>
                </ul>
                and these roles have equipped me with problem-solving, communication, and analytical skills. 
                <br /><br />
                Currently, I am refining my skills through UVU Capaciti,
                where I am gaining deeper insights into the world of software development.
                <br />
                I'm eager to work my way into a full-time software development 
                role where I can contribute, learn, and innovate. 
                <br />
                <br />
                Feel free to&nbsp; 
                <NavLink to="/projects" className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}> 
                check out my projects 
                </NavLink> and&nbsp;
                <NavLink to="/contact" className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.link}`}> 
                get in touch 
                </NavLink> with me!
          </p>
          <br />
          <br />
          <br />
          <a style={{color:"hsl(192, 100%, 50%)"}} href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
          
        </div>
       
    )
}

export default About