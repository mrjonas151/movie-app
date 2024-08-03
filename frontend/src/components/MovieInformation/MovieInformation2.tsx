import styles from "./MovieInformation2.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { GoPencil } from "react-icons/go";
import { SlTrash } from "react-icons/sl";
import { format } from "date-fns";

const MovieInformation2 = ({ movie }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteOpenModal] = useState<boolean>(false);
    const formattedDate = format(new Date(movie.date_of_include), "dd-MM-yyyy");

    const setInitials = (title: string) => {
        const ignoredWords = [
            "and",
            "the",
            "of",
            "a",
            "in",
            "with",
            "for",
            "at",
            "an",
            "or",
            "by",
        ];
        const cleanTitle = title.replace(/[^a-zA-Z\s:]/g, "").toLowerCase();
        const words = cleanTitle
            .split(/\s+|:/)
            .filter((word) => word.length > 0 && !ignoredWords.includes(word));

        const initials = words.slice(0, 2).map((word) => word[0].toUpperCase());

        return initials.join("");
    };

    const movieInitials = setInitials(movie.title);

    return (
        <div className={styles.movieContainer}>
            <div className={styles.frame}>
                <div className={styles.titleLetter}>{movieInitials}</div>
            </div>
            <div className={styles.titleMovie}>{movie.title}</div>
            <div className={styles.titleDirector}>{movie.director}</div>
            <div className={styles.titleNumber}>{movie.duration}</div>
            <div className={styles.titleGenre}>{movie.category}</div>
            <div className={styles.titleNumber}>{movie.release_year}</div>
            <div className={styles.titleDate}>{formattedDate}</div>
            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => setOpenModal(true)}
                >
                    <GoPencil />
                </button>
                <Modal
                    isOpen={openModal}
                    setModalOpen={() => setOpenModal(!openModal)}
                />
                <button
                    className={styles.button}
                    onClick={() => setDeleteOpenModal(true)}
                >
                    <SlTrash />
                </button>
                <DeleteModal
                    isOpen={openDeleteModal}
                    setDeleteModal={() => setDeleteOpenModal(false)}
                />
            </div>
            
        </div>
    );
};

export default MovieInformation2;
