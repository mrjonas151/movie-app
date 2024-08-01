import styles from "./Card.module.css"

interface CardProps{
    icon: string;
    title: string;
    number: number;
    handleClick: () => void;
}

const Card: React.FC<CardProps> = ({ icon, title, number, handleClick }) => {
  return (
    <div className={styles.alignContainer}>
            <div>
                <button onClick={handleClick}>
                    <div className={styles.card}>
                        <img src={icon} className={styles.icon} />
                        <p>{title}</p>
                        <div className={styles.number}>
                            <h2>{number}</h2>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    
  )
}

export default Card