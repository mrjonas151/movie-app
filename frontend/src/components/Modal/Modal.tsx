import { useState, useEffect } from "react";
import TitleBar from "../TitleBar/TitleBar";
import axios from "axios";
import styles from "./Modal.module.css";
import { getAuth } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
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
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    setModalOpen,
    movie,
    onSave,
}) => {
    const [title, setTitle] = useState<string>("");
    const [director, setDirector] = useState<string>("");
    const [duration, setDuration] = useState<number>(0);
    const [category, setCategory] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>(0);
    const [isRed, setIsRed] = useState<boolean>(true);

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
            console.log("Error getting token:", error);
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
            if (movie) {
                const response = await axios.put(
                    `http://localhost:3333/users/movies/${movie.id}`,
                    movieObj,
                    axiosConfig
                );
                console.log(response.data);
                onSave(movieObj);
                toast.success("Movie updated successfully!");
            } else {
                const response = await axios.post(
                    "http://localhost:3333/users/movies",
                    movieObj,
                    axiosConfig
                );
                console.log(response.data);
                onSave(movieObj);
                toast.success("Movie saved successfully!");
            }
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
                    <TitleBar
                        title={movie ? "Edit Movie" : "Add new movie"}
                        isRed={isRed}
                    />
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
                            <label className={styles.formLabel} htmlFor="title">
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
                                className={styles.formLabel}
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
                                    className={styles.formLabel}
                                    htmlFor="duration"
                                >
                                    Duration
                                </label>
                                <input
                                    className={styles.formInputSameLine}
                                    type="number"
                                    value={duration}
                                    onChange={(e) =>
                                        setDuration(Number(e.target.value))
                                    }
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    className={styles.formLabel}
                                    htmlFor="release-year"
                                >
                                    Release Year
                                </label>
                                <input
                                    className={styles.formInputSameLine}
                                    type="number"
                                    value={releaseYear}
                                    onChange={(e) =>
                                        setReleaseYear(Number(e.target.value))
                                    }
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label
                                className={styles.formLabel}
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
                                <option value="Comedy">Comedy</option>
                                <option value="Crime">Crime</option>
                                <option value="Drama">Drama</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Horror">Horror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Romance">Romance</option>
                            </select>
                        </div>
                        <div className={styles.endButton}>
                            <button
                                type="submit"
                                className={styles.buttonModal}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Modal;
