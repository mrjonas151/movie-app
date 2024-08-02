import styles from "./TitleList.module.css";

const TitleList = () => {
  return (
    <thead className={styles.titlesContainer}>
        <tr>
            <th className={styles.empty}></th>
            <th>Name</th>
            <th>Director</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Release Year</th>
            <th>Date of include</th>
            <th className={styles.empty}></th>
        </tr>
    </thead>
  )
}

export default TitleList
