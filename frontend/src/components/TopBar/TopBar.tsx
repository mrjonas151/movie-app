import { useState } from "react";
import CreateModal from "../CreateModal/CreateModal";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";

import styles from "./TopBar.module.css";

function TopBar({
    title,
    titleButton,
}: {
    title: string;
    titleButton: string;
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
            />
        </div>
    );
}

export default TopBar;
