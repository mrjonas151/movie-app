import styles from "./LogOutModal.module.css";

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
                            className={styles.confirmButton}
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
