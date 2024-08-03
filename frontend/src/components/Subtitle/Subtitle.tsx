import styles from "./Subtitle.module.css";

const Subtitle = ({ title, text }: { title: string; text: string }) => {
    return (
        <div className={styles.subtitleContainer}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Subtitle;
