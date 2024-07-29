import styles from "./Card.module.css"

interface CardProps{
    icon: string;
    title: string;
    number: number;
}

const Card: React.FC<CardProps> = ({ icon, title, number }) => {
  return (
    <div className={styles.main}>
        <div className={styles.card}>
            <img src={icon} className={styles.icon} />
            <p>{title}</p>
            <div className={styles.number}>
                <h2>{number}</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Card