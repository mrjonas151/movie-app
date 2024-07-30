import { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Card from "../../components/Card/Card";
import heart from "../../assets/heart.png";
import Modal from "../../components/Modal/Modal";
import SearchBar from "../../components/SearchBar/SearchBar";
import { IoIosSearch } from "react-icons/io";
import "./Dashboard.css";


const Dashboard: React.FC = () => {
    useEffect(() => {
        document.title = "MovieApp - Home";
    }, []);

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Sidebar />
            <Card icon={heart} title="My Movies" number={222} />
            <SearchBar Icon={IoIosSearch} />	
            <div>
                <button className="button-add" onClick={() => setOpenModal(true)}>ADD NEW MOVIE</button>
            </div>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
        </>
    );
};

export default Dashboard;
