import styles from './MovieInformation.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const MovieInformation = ({ movie }) => {
  return (
    <tr className={styles.alignContainer}>
        <td className={styles.main}>
          <td className={styles.photo}>MM</td>
          <td className={styles.text}>
              <span>{movie.title}</span>
              <span>{movie.director}</span>
              <span>{movie.duration}min</span>
              <span>{movie.category}</span>
              <span>{movie.release_year}</span>
              <span>{movie.date_of_include}</span>
          </td>
          <td className={styles.actions}>
            <button className={styles.button}>
              <i className="fas fa-edit"></i>
            </button>
            <button className={styles.button}>
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </td>
    </tr>
    
  )
}

export default MovieInformation