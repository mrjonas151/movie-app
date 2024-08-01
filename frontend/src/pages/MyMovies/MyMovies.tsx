import MovieInformation from "../../components/MovieInformation/MovieInformation";
import SearchBar from "../../components/SearchBar/SearchBar"
import { IoIosSearch } from "react-icons/io";
import Sidebar from "../../components/SideBar/Sidebar"
import styles from "./MyMovies.module.css"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

const MyMovies = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  
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
            <thead className={styles.titlesContainer}>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Director</th>
                <th>Duration</th>
                <th>Genre</th>
                <th>Release Year</th>
                <th>Date of include</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <MovieInformation />
            </tbody>
          </table>
        </div>
    </div>
    </div>
    
  )
}

export default MyMovies