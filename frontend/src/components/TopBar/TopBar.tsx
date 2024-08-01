import Button from "../Button/Button";
import { useState } from "react";
import styles from "./TopBar.module.css";

function TopBar() {

    const [openModal, setOpenModal] = useState<boolean>(false);
    
    return (
        <div className={styles.topBarContainer}>
            <h1 className={styles.title}>My Movies</h1>
            <Button 
                title="ADD NEW MOVIE"
                onClick={() => setOpenModal(true)}
                className={styles.buttonAdd} 
            />
        </div>
    );  
}

export default TopBar;
