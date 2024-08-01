import { useEffect, useState, useContext } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";
import heart from "../../assets/heart.png";
import Modal from "../../components/Modal/Modal";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import styles from "./Dashboard.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [number, setNumber] = useState<number>(0);
    const navigate = useNavigate();
    const { userProvider } = useContext(AuthContext);

    useEffect(() => {
        document.title = "MovieApp - Home";

        const fetchData = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    const token = await user.getIdToken(true);
                    const response = await axios.get("http://localhost:3333/users/movies", {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    setTitle("My Movies");
                    setNumber(response.data.length);
                } else {
                    console.error("User is not logged in");
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        if (userProvider) {
            fetchData();
        }
    }, [userProvider]);

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClick = () => {
        navigate("/myMovies");
    }

    return (
        <>
            <Sidebar />
            <SearchBar Icon={IoIosSearch} />
            <div className={styles.card}>
                <Card icon={heart} title={title} number={number} handleClick={handleClick} />
            </div>	
            
        </>
    );
};

export default Dashboard;
