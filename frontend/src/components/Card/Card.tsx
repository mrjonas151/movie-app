import { Link } from "react-router-dom";
import styles from "./Card.module.css"

interface CardProps{
    title: string;
    number: number;
    Icon?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ Icon, title, number }) => {

  return (
    <Link to="/movies2">
        <div className={styles.cardContainer}>
            <div className={styles.cardText}>
                {Icon && <Icon className={styles.cardIcon}/>}
                <p className={styles.cardTitle}>{title}</p>
            </div>        
            <div className={styles.cardNumber}>
                <h2>{number}</h2>   
            </div>  
        </div>
    </Link>
  )
}

export default Card