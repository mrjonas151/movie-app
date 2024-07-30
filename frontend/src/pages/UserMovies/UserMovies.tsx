import MovieInformation from "../../components/MovieInformation/MovieInformation"
import Sidebar from "../../components/Sidebar"
import styles from "./UserMovies.module.css"

const UserMovies = () => {
  return (
    <>
        <Sidebar />
        <div className={styles.container}>
            <MovieInformation />
            <MovieInformation />
            <MovieInformation />
            <MovieInformation />
        </div>
    </>
    
  )
}

export default UserMovies