import styles from "./DeleteModal.module.css";
import { useContext } from "react";
import { ColorContext } from "../../contexts/ColorContext";

interface ModalProps {
    isOpen: boolean;
    setDeleteModal: () => void;
    onDelete: () => void;
}

const DeleteModal: React.FC<ModalProps> = ({
    isOpen,
    setDeleteModal,
    onDelete,
}) => {
    if (!isOpen) {
        return null;
    }

    const { isRed } = useContext(ColorContext) || { isRed: false };

    return (
        <div className={styles.containerBackground}>
            <div className={styles.deleteModal}>
                <div>
                    <h2 className={styles.title}>
                        Are you sure you want to delete this?
                    </h2>
                    <div className={styles.deleteModalBtn}>
                        <button
                            onClick={setDeleteModal}
                            className={styles.cancelButton}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onDelete}
                            className={`${styles.deleteButton} ${
                                isRed ? styles.redButton : styles.blueButton
                            }`}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
