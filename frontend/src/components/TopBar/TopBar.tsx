import { useState } from "react";
import Modal from "../Modal/Modal";

import styles from "./TopBar.module.css";

function TopBar( {title, titleButton}: {title: string, titleButton: string} ) {

    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <div className={styles.topBarContainer}>
            <h1 className={styles.topBarTitle}>{title}</h1>
            <button className={styles.topBarButton} onClick={() => setOpenModal(true)}>{titleButton}</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
        </div>
    );
}

export default TopBar;
