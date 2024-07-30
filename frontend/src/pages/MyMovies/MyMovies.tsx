import MovieInformation from "../../components/MovieInformation/MovieInformation"
import Sidebar from "../../components/SideBar/Sidebar"
import styles from "./MyMovies.module.css"

const MyMovies = () => {
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

export default MyMovies