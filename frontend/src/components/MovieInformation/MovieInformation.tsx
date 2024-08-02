import styles from "./MovieInformation.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { format } from "date-fns";

type MovieProps = {
    movie: {
        id: string;
        title: string;
        director: string;
        duration: number;
        release_year: number;
        category: string;
        date_of_include: string;
    };
    onDelete: (id: string) => void;
    onUpdate: (id: string) => void;
};
 
const MovieInformation = ({ movie, onDelete, onUpdate }:MovieProps) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteOpenModal] = useState<boolean>(false);
    const formattedDate = format(new Date(movie.date_of_include), "dd-MM-yyyy");

    const handleDelete = () => {
        onDelete(movie.id);
        setDeleteOpenModal(false);
    };

    const setInitials = (title: string) => {
        const ignoredWords = ["and", "the", "of", "a", "in", "with", "for", "at", "an", "or", "by"];
        const cleanTitle = title.replace(/[^a-zA-Z\s:]/g, "").toLowerCase();
        const words = cleanTitle.split(/\s+|:/).filter(word => word.length > 0 && !ignoredWords.includes(word));

       const initials = words.slice(0, 2).map(word => word[0].toUpperCase());

        return initials.join("");
    };

    const movieInitials = setInitials(movie.title);

    return (
        <tr className={styles.alignContainer}>
            <tr className={styles.main}>
                <td className={styles.photo}>{movieInitials}</td>
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
                        onDelete={handleDelete}
                    />
                </td>
            </tr>
        </tr>
    );
};

export default MovieInformation;
