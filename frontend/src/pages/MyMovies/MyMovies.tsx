import Sidebar from "../../components/SideBar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import TopBar from "../../components/TopBar/TopBar";
import TitleList2 from "../../components/TitleList/TitleList";
import MovieInformation from "../../components/MovieInformation/MovieInformation";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";
import ReactPaginate from "react-paginate";
import { ColorContext } from "../../contexts/ColorContext";
import styles from "./MyMovies.module.css";
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

const MyMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { userProvider } = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(0);
    const { isRed } = useContext(ColorContext);
    const itemsPerPage = 6;

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--activeBackgroundColor",
            isRed ? "#A31717" : "#007bff"
        );
        document.documentElement.style.setProperty(
            "--activeTextColor",
            "#ffffff"
        );
    }, [isRed]);

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
                        console.error("Error fetching movies:", error);
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
        setCurrentPage(0);
    };

    const handleDeleteMovie = async (movieId: string) => {
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
                    prevMovies.filter((movie) => movie.id !== movieId)
                );
                toast.success("Movie deleted successfully!");
            }
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    };

    const handleUpdateMovie = async (
        movieId: string,
        updatedMovie: Partial<Movie>
    ) => {
        try {
            const auth = getAuth();
            const user = auth.currentUser;

            if (user) {
                const token = await user.getIdToken(true);
                await axios.put(
                    `http://localhost:3333/users/movies/${movieId}`,
                    updatedMovie,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setMovies((prevMovies) =>
                    prevMovies.map((movie) =>
                        movie.id === movieId
                            ? { ...movie, ...updatedMovie }
                            : movie
                    )
                );
                toast.success("Movie updated successfully!");
            }
        } catch (error) {
            console.error("Error updating movie:", error);
        }
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredMovies.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className={styles.mymoviesContainer}>
            <Sidebar />
            <SearchBar onSearchChange={handleSearchChange} />
            <TopBar
                title="My Movies"
                titleButton="ADD NEW MOVIE"
                isRed={isRed}
            />
            <TitleList2 />
            <div className={styles.movieListContainer}>
                {currentItems.map((movie) => (
                    <MovieInformation
                        key={movie.id}
                        movie={movie}
                        onUpdate={handleUpdateMovie}
                        onDelete={handleDeleteMovie}
                        isRed={isRed}
                    />
                ))}
            </div>
            <div className={styles.paginate}>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={styles.pagination}
                    subContainerClassName={"pages pagination"}
                    activeClassName={styles.active}
                    previousClassName={
                        currentPage === 0
                            ? `${styles.previous} ${styles.disabled}`
                            : styles.previous
                    }
                    nextClassName={
                        currentPage === pageCount - 1
                            ? `${styles.next} ${styles.disabled}`
                            : styles.next
                    }
                />
            </div>

            <ToastContainer />
        </div>
    );
};

export default MyMovies;
