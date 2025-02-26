import styles from '../modules/Projects.module.css'
import wipro from '../images/wipro.svg'
import colourWheel from '../images/colorWheel.png'
import widget from '../images/widget.png'
import todo from '../images/todo.jpeg'

function Projects(){
    return(
        <div className={styles.projectsContainer}>
            <h1>Projects</h1>
            <hr />
            <h2 className={styles.subHeading}>Check out some of the projects I have developed so far</h2>
            <div className={styles.projects}>
                <a href="https://colour-picker-orpin.vercel.app/" className={styles.linkContainer}>
                    <div className={styles.project}>
                        <h3 className={styles.projectHeading}>Colour Picker</h3>
                        <img className={styles.projectImg} src={colourWheel} alt="" />
                        <p className={styles.projectDesc}>A simple colour picker app that displays the colours hashed value</p>
                    </div> 
                </a>
                <a href="https://whattodo-kappa.vercel.app/" className={styles.linkContainer}>
                    <div className={styles.project}>
                        <h3 className={styles.projectHeading}>What To Do</h3>
                        <img className={styles.projectImg} src={todo} alt="" />
                        <p className={styles.projectDesc}>A simple todo web app with CRUD operations</p>
                    </div> 
                </a>
                <a href="https://agile-dashboard-ten.vercel.app/" className={styles.linkContainer}>
                    <div className={styles.project}>
                        <h3 className={styles.projectHeading}>Agile Dashboard</h3>
                        <img className={styles.projectImg} src={widget} alt="" />
                        <p className={styles.projectDesc}>A dashboard application containing a news and weather widget</p>
                    </div> 
                </a>
                <a href="https://wipro-website.vercel.app/" className={styles.linkContainer}>
                    <div className={styles.project}>
                        <h3 className={styles.projectHeading}>Wipro Website</h3>
                        <img className={styles.projectImg} src={wipro} alt="" />
                        <p className={styles.projectDesc}>A website based off of Wipros website</p>
                    </div> 
                </a>
                
            </div>
        </div>
        
    )
}

export default Projects