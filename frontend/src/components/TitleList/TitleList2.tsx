import styles from "./TitleList2.module.css";

const TitleList = () => {
  return (
    <div className={styles.titlesContainer}>
        <div className={styles.titleLetter}><span></span></div>
        <div className={styles.titleMovie}><h3>Name</h3></div>
        <div className={styles.titleDirector}><h3>Director</h3></div>
        <div className={styles.titleNumber}><h3>Duration</h3></div>
        <div className={styles.titleGenre}><h3>Genre</h3></div>
        <div className={styles.titleNumber}><h3>Release Year</h3></div>
        <div className={styles.titleDate}><h3>Date of include</h3></div>
        <div className={styles.buttons}><span></span></div>
    </div>
  )
}

export default TitleList
