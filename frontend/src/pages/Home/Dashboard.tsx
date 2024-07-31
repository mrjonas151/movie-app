import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";
import heart from "../../assets/heart.png";
import Modal from "../../components/Modal/Modal";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import styles from "./Dashboard.module.css";
import { getAuth, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import axios from "axios";


const Dashboard: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [number, setNumber] = useState<number>(0);

    useEffect(() => {
        document.title = "MovieApp - Home";

        const fetchData = async () => {
            try{
                const auth = getAuth();
                const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        try {
                            const token = await user.getIdToken(true);
                            const response = await axios.get("http://localhost:3333/users/movies", {
                                headers: {
                                    'Authorization': `Bearer ${token}`
                                }
                            });
        
                            setTitle("My Movies");
                            setNumber(response.data.length);
                        } catch (error) {
                            console.error(error);
                        }
                    } else {
                        console.error("User is not logged in");
                    }
                });
        
                return () => unsubscribe();
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Sidebar />
            <SearchBar Icon={IoIosSearch} />
            <div className={styles.card}>
                <Card icon={heart} title={title} number={number} />
            </div>	
            
        </>
    );
};

export default Dashboard;
