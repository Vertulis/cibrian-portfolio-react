import styles from '../modules/Home.module.css';
import cibrian from '../images/Cibrian_Hofsta-removebg.png';
function Home(){
    return(
        <div className={styles.homeContainer}>
            <div className="container">
                <h1 className={styles.title}>Cibrian <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hofsta</h1>
                <img src={cibrian} alt="Cibrian profile image" width={300}/>
            </div>
            <div>
                <p className={styles.text}>This is a simple portfolio website built with React. Feel free to explore the website and learn more about me and my projects.</p>
            </div>

        </div>
    )
}

export default Home