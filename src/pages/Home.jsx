import styles from '../modules/Home.module.css';
import cibrian from '../images/Cibrian_Hofsta-removebg.png';

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Cibrian Hofsta</h1>
                    <p className={styles.text}>
                        Hi, I'm Cibrian Hofsta, a developer passionate about building robust,
                        feature-rich applications. I specialize in Java, C#, Kotlin, SQL, HTML & CSS,
                        and React. 
                        <br /><br />
                        I thrive on creating unique and innovative features that bring real value to users,
                        always aiming to build scalable, maintainable, and seamless applications.
                        <br /><br />
                        When I’m not coding, you can find me gaming, watching movies and series,
                        enjoying music, or diving into my passion for cars.
                    </p>
                    <div className={styles.linksContainer}>
                        <i className={`fa-brands fa-linkedin ${styles.contactIcons}`} onClick={() => window.location.href = "https://www.linkedin.com/in/cibrian-hofsta-b95508279"}></i>
                        <i className={`fa-brands fa-github ${styles.contactIcons}`} onClick={() => window.location.href = "https://github.com/Vertulis"}></i>
                        <a className={styles.downloadCVLink} href="../src/images/CibrianCV.pdf" download>
                            <button className={styles.downloadCVBtn}>Download CV</button>
                        </a>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img className={styles.profileImg} src={cibrian} alt="Cibrian profile image" width={400} />
                </div>
            </div>
        </div>
    );
}

export default Home;
