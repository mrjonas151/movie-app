import { useState, useEffect } from "react";
import TitleBar from "../TitleBar/TitleBar";
import axios from "axios";
import styles from "./CreateModal.module.css";
import { getAuth } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import "react-toastify/dist/ReactToastify.css";
import Movie from "../../pages/MyMovies"

interface CreateModalProps {
    isOpen: boolean;
    setModalOpen: () => void;
    movie?: {
        id: string;
        title: string;
        director: string;
        duration: number;
        release_year: number;
        category: string;
        date_of_include: string;
    };
    onSave: (movie: any) => void;
    addMovie: (newMovie: Movie) => void;
}

const CreateModal: React.FC<CreateModalProps> = ({
    isOpen,
    setModalOpen,
    movie,
    onSave,
    addMovie,
}) => {
    const [title, setTitle] = useState<string>("");
    const [director, setDirector] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [category, setCategory] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>(0);
    const { isRed } = useContext(ColorContext);

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setDirector(movie.director);
            setDuration(movie.duration);
            setCategory(movie.category);
            setReleaseYear(movie.release_year);
        }
    }, [movie]);

    async function getTokenId() {
        try {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                const token = await user.getIdToken();
                return token;
            }
        } catch (error) {
            console.error("Error getting token:", error);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = await getTokenId();
        const axiosConfig = { headers: { Authorization: `Bearer ${token}` } };

        const movieObj = {
            title,
            director,
            duration,
            release_year: releaseYear,
            category,
        };

        try {
            const response = await axios.post(
                "http://localhost:3333/users/movies",
                movieObj,
                axiosConfig
            );
            const newMovie = response.data;
            addMovie(newMovie);
            toast.success("Movie saved successfully!");
            setTitle("");
            setDirector("");
            setDuration(0);
            setCategory("");
            setReleaseYear(0);
            setModalOpen();
        } catch (error) {
            console.error("Error saving movie:", error);
            toast.error("Error saving movie!");
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.containerBackground}>
            <div className={styles.modal}>
                <div className={styles.topBar}>
                    <TitleBar title={"Add new movie"} isRed={isRed} />
                    <button
                        onClick={setModalOpen}
                        className={styles.buttonClose}
                    >
                        X
                    </button>
                </div>
                <div className={styles.modalForm}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label
                                className={`${styles.formLabel} ${
                                    isRed ? styles.redLabel : styles.blueLabel
                                }`}
                                htmlFor="title"
                            >
                                Title
                            </label>
                            <input
                                className={styles.formInput}
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label
                                className={`${styles.formLabel} ${
                                    isRed ? styles.redLabel : styles.blueLabel
                                }`}
                                htmlFor="director"
                            >
                                Director
                            </label>
                            <input
                                className={styles.formInput}
                                type="text"
                                value={director}
                                onChange={(e) => setDirector(e.target.value)}
                            />
                        </div>
                        <div className={styles.formLine}>
                            <div className={styles.formGroup}>
                                <label
                                    className={`${styles.formLabel} ${
                                        isRed
                                            ? styles.redLabel
                                            : styles.blueLabel
                                    }`}
                                    htmlFor="duration"
                                >
                                    Duration (min)
                                </label>
                                <input
                                    className={styles.formInputSameLine}
                                    type="number"
                                    value={duration}
                                    min={0}
                                    max={1000}
                                    onChange={(e) =>
                                        setDuration(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    className={`${styles.formLabel} ${
                                        isRed
                                            ? styles.redLabel
                                            : styles.blueLabel
                                    }`}
                                    htmlFor="release-year"
                                >
                                    Release Year
                                </label>
                                <input
                                    className={styles.formInputSameLine}
                                    type="number"
                                    value={releaseYear}
                                    min={1920}
                                    max={2030}
                                    onChange={(e) =>
                                        setReleaseYear(Number(e.target.value))
                                    }
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label
                                className={`${styles.formLabel} ${
                                    isRed ? styles.redLabel : styles.blueLabel
                                }`}
                                htmlFor="category"
                            >
                                Category
                            </label>
                            <select
                                className={styles.formSelect}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option
                                    className={styles.customOption}
                                    value=""
                                >
                                    Select a category
                                </option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Animation">Animation</option>
                                <option value="Biography">Biography</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Drama">Drama</option>
                                <option value="Documentary">Documentary</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Mystery">Mystery</option>
                                <option value="Romance">Romance</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                        <div className={styles.endButton}>
                            <button
                                type="submit"
                                className={`${styles.buttonModal} ${
                                    isRed
                                        ? styles.redButtonModal
                                        : styles.blueButtonModal
                                }`}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
