import styles from "./MovieInformation.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import DeleteModal from "../DeleteModal/DeleteModal";

const MovieInformation = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteOpenModal] = useState<boolean>(false);

    return (
        <div className={styles.alignContainer}>
            <div className={styles.main}>
                <div className={styles.photo}>MM</div>
                <div className={styles.text}>
                    <span>Interstellar</span>
                    <span>Christopher Nolan</span>
                    <span>198min</span>
                    <span>Sci-fi</span>
                    <span>2014</span>
                    <span>08-dec-2021</span>
                </div>
                <div className={styles.actions}>
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
                </div>
            </div>
        </div>
    );
};

export default MovieInformation;
