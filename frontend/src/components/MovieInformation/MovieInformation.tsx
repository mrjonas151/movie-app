import styles from './MovieInformation.module.css'
import heart from '../../assets/heart.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

const MovieInformation = () => {
  return (
    <div className={styles.alignContainer}>
        <div className={styles.main}>
        <img className={styles.photo} src={heart} />
        <div className={styles.text}>
            <span>Interstellar</span>
            <span>Christopher Nolan</span>
            <span>198min</span>
            <span>Sci-fi</span>
            <span>2014</span>
            <span>08-dec-2021</span>
        </div>
        <div className={styles.actions}>
            <button className={styles.button}>
            <i className="fas fa-edit"></i>
            </button>
            <button className={styles.button}>
            <i className="fas fa-trash"></i>
            </button>
        </div>
        </div>
    </div>
    
  )
}

export default MovieInformation