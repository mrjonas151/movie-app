import styles from "./TitleBar.module.css";

const TitleBar = ( {title}: {title: string}) => {
    return <div className={styles.titleContainer}><h1>{title}</h1></div>;
};

export default TitleBar;
