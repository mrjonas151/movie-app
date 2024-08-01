import MovieInformation from "../../components/MovieInformation/MovieInformation";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "../../components/SideBar/Sidebar";
import styles from "./MyMovies.module.css";
import Modal from "../../components/Modal/Modal";
import { useState, useEffect, useContext } from "react";
import TitleList from "../../components/TitleList/TitleList";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";

const MyMovies = () => {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { userProvider } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          try {
            const token = await user.getIdToken(true);
            const response = await axios.get("http://localhost:3333/users/movies", {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            setMovies(response.data);
          } catch (error) {
            console.error("Error movies:", error);
          }
        } else {
          console.error("User is not logged in");
        }
      } catch (error) {
        console.error("Error getting auth token:", error);
      }
    };
    if(userProvider){
      fetchData();
    }
    
  }, [userProvider]);
  
  return (
    <div className={styles.bodyMovie}>
      <div className={styles.movieContent}>
        <Sidebar />
        <div className={styles.mainContent}>
          <SearchBar Icon={IoIosSearch} />
          <div className={styles.tb}>
            <h2>My Movies</h2>
            <button className={styles.buttonAdd} onClick={() => setOpenModal(true)}>ADD NEW MOVIE</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
          </div>
          <table className={styles.container}>
            <TitleList/>
            <tbody>
            {movies.map((movie) => (
              <MovieInformation key={movie.id} movie={movie} />
            ))}
            </tbody>
          </table>
        </div>
    </div>
    </div>
    
  )
}

export default MyMovies