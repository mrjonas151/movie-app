import MovieInformation from "../../components/MovieInformation/MovieInformation";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import Sidebar from "../../components/SideBar/Sidebar";
import styles from "./MyMovies.module.css";
import Modal from "../../components/Modal/Modal";
import TopBar from "../../components/TopBar/TopBar";
import { useState } from "react";

const MyMovies = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div className={styles.movieContent}>
            <Sidebar />
            <div className={styles.mainContent}>
                <SearchBar Icon={IoIosSearch} />
                <div className={styles.tb}>
                    <h2>My Movies</h2>
                    <button className={styles.buttonAdd} onClick={() => setOpenModal(true)}>
                        ADD NEW MOVIE
                    </button>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
                </div>
                <div className={styles.container}>
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                    <MovieInformation />
                </div>
            </div>
        </div>
    );
};

export default MyMovies;
