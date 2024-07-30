import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";
import heart from "../../assets/heart.png";
import Modal from "../../components/Modal/Modal";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import styles from "./Dashboard.module.css";


const Dashboard: React.FC = () => {
    useEffect(() => {
        document.title = "MovieApp - Home";
    }, []);

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Sidebar />
            <SearchBar Icon={IoIosSearch} />
            <div className={styles.card}>
                <Card icon={heart} title="My Movies" number={222} />
            </div>	
            
        </>
    );
};

export default Dashboard;
