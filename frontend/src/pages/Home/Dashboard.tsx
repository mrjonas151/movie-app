import { useEffect, useState, useContext } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";
import heart from "../../assets/heart.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import styles from "./Dashboard.module.css";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

type Card = {
    title: string;
    id: number;
}

const Dashboard: React.FC = () => {
    const [number, setNumber] = useState<number>(0);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [cards, setCards] = useState<any[]>([]);
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

                    setNumber(response.data.length);
                    setCards([
                        {
                            title: "My Movies",
                            number: number
                        }
                    ]);
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

    const handleClick = () => {
        navigate("/myMovies");
    }

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Sidebar />
            <SearchBar Icon={IoIosSearch} onSearchChange={handleSearchChange} />
            <div className={styles.card}>
                {filteredCards.map((card) => (
                    <Card key={card.title} icon={heart} title={card.title} number={number} handleClick={handleClick} />
                ))}             
            </div>	
            
        </>
    );
};

export default Dashboard;
