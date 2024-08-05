import styles from "./LogOutModal.module.css";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const LogOutModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    if (!isOpen) {
        return null;
    }

    const { isRed } = useContext(ColorContext);

    return (
        <div className={styles.containerBackground}>
            <div className={styles.logoutModal}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Are you sure you want to logout?
                    </h2>
                    <div className={styles.logoutModalBtn}>
                        <button
                            onClick={onClose}
                            className={styles.cancelButton}
                        >
                            No
                        </button>
                        <button
                            onClick={onConfirm}
                            className={`${styles.confirmButton} ${
                                isRed ? styles.redButton : styles.blueButton
                            }`}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogOutModal;
