import styles from "./MovieInformation.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { format } from "date-fns";
 
const MovieInformation = ({ movie }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteOpenModal] = useState<boolean>(false);
    const formattedDate = format(new Date(movie.date_of_include), "dd-MM-yyyy");

    return (
        <tr className={styles.alignContainer}>
            <tr className={styles.main}>
                <td className={styles.photo}>MM</td>
                <td className={styles.text}>
                    <span>{movie.title}</span>
                    <span>{movie.director}</span>
                    <span>{movie.duration}min</span>
                    <span>{movie.category}</span>
                    <span>{movie.release_year}</span>
                    <span>{formattedDate}</span>
                </td>
                <td className={styles.actions}>
                    <button
                        className={styles.button}
                        onClick={() => setOpenModal(true)}
                    >
                        <i className="fas fa-edit"></i>
                    </button>
                    <Modal
                        isOpen={openModal}
                        setModalOpen={() => setOpenModal(!openModal)}
                    />
                    <button
                        className={styles.button}
                        onClick={() => setDeleteOpenModal(true)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <DeleteModal
                        isOpen={openDeleteModal}
                        setDeleteModal={() => setDeleteOpenModal(false)}
                    />
                </td>
            </tr>
        </tr>
    );
};

export default MovieInformation;
