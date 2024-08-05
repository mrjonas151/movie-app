import styles from "./MovieInformationMobile.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useContext } from "react";
import UpdateModal from "../UpdateModal/UpdateModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import { GoPencil } from "react-icons/go";
import { SlTrash } from "react-icons/sl";
import { format } from "date-fns";
import { ColorContext } from "../../contexts/ColorContext";

type Movie = {
    id: string;
    title: string;
    director: string;
    duration: number;
    release_year: number;
    category: string;
    date_of_include: string;
};

type MovieProps = {
    movie: Movie;
    onDelete: (id: string) => void;
    onUpdate: (id: string, updatedMovie: Partial<Movie>) => void;
};

const MovieInformationMobile = ({ movie, onDelete, onUpdate }: MovieProps) => {
    const [openUpdateModal, setUpdateModal] = useState<boolean>(false);
    const [openDeleteModal, setDeleteOpenModal] = useState<boolean>(false);
    const [editableMovie, setEditableMovie] = useState<Movie>(movie);
    const formattedDate = format(new Date(movie.date_of_include), "dd-MM-yyyy");
    const { isRed } = useContext(ColorContext);

    const handleDelete = () => {
        onDelete(movie.id);
        setDeleteOpenModal(false);
    };

    const handleUpdate = (id: string, updatedMovie: Partial<Movie>) => {
        onUpdate(id, updatedMovie);
        setUpdateModal(false);
    };

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
            <div className={styles.leftContainer}>
                <div className={styles.frame}>
                    <div className={styles.titleLetter}>{movieInitials}</div>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={`${styles.button} ${
                            isRed ? styles.redButton : styles.blueButton
                        }`}
                        onClick={() => {
                            setEditableMovie(movie); 
                            setUpdateModal(true);
                        }}
                    >
                        <GoPencil />
                    </button>
                    <UpdateModal
                        isOpen={openUpdateModal}
                        setUpdateModal={() => setUpdateModal(false)}
                        movie={editableMovie}
                        onUpdate={handleUpdate}
                        isRed={isRed}
                    />
                    <button
                        className={`${styles.button} ${
                            isRed ? styles.redButton : styles.blueButton
                        }`}
                        onClick={() => setDeleteOpenModal(true)}
                    >
                        <SlTrash />
                    </button>
                    <DeleteModal
                        isOpen={openDeleteModal}
                        setDeleteModal={() => setDeleteOpenModal(false)}
                        onDelete={handleDelete}
                        isRed={isRed}
                    />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.movieTitle}>{movie.title}</div>
                <div className={styles.movieDirector}>{movie.director}</div>
                <div className={styles.movieCategory}>{movie.category}</div>
                <div className={styles.sameLine}>
                    <div className={styles.movieDuration}>{movie.duration} min</div>
                    <div className={styles.movieReleaseYear}>{movie.release_year}</div>
                </div>
                <div className={styles.movieDate}>{formattedDate}</div>
            </div>
        </div>
    );
};

export default MovieInformationMobile;
