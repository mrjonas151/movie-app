import Sidebar from "../../components/SideBar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopBar from "../../components/TopBar/TopBar";
import TitleList2 from "../../components/TitleList/TitleList2";
import MovieInformation2 from "../../components/MovieInformation/MovieInformation2";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./MyMovies2.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Movie = {
    id: string;
    title: string;
    director: string;
    duration: number;
    release_year: number;
    category: string;
    date_of_include: string;
};

const MyMovies2 = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { userProvider } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    try {
                        const token = await user.getIdToken(true);
                        const response = await axios.get(
                            "http://localhost:3333/users/movies",
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );
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
        if (userProvider) {
            fetchData();
        }
    }, [userProvider]);

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    const handleDeleteMovie = async (movieId: Number) => {
        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const token = await user.getIdToken(true);
                await axios.delete(
                    `http://localhost:3333/users/movies/${movieId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setMovies((prevMovies) =>
                    prevMovies.filter((movie) => parseInt(movie.id) !== movieId)
                );
                toast.success("Movie deleted successfully!");
            }
        } catch (error) {
            console.error("Error delete movie!!!:", error);
        }
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.mymoviesContainer}>
            <Sidebar />
            <SearchBar />
            <TopBar title="My Movies" titleButton="ADD NEW MOVIE" />
            <TitleList2 />
            <div className={styles.movieListContainer}>
                {filteredMovies.map((movie) => (
                    <MovieInformation2
                        key={movie.id}
                        movie={movie}
                        onDelete={handleDeleteMovie}
                    />
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyMovies2;
