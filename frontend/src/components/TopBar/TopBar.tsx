import { useState } from "react";
import CreateModal from "../CreateModal/CreateModal";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import styles from "./TopBar.module.css";

interface TopBarProps {
    title: string;
    titleButton: string;
    addMovie: (movie: any) => void;
}

function TopBar({
    title,
    titleButton,
    addMovie,
}: {
    TopBarProps;
}) {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { isRed } = useContext(ColorContext);

    return (
        <div className={styles.topBarContainer}>
            <h1 className={styles.topBarTitle}>{title}</h1>
            <button
                className={`${styles.topBarButton} ${
                    isRed ? styles.redButton : styles.blueButton
                }`}
                onClick={() => setOpenModal(true)}
            >
                {titleButton}
            </button>
            <CreateModal
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
                isRed={isRed}
                addMovie={addMovie}
            />
            <ToastContainer />
        </div>
    );
}

export default TopBar;
