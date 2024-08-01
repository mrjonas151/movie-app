import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

interface CardProps {
    icon: string;
    title: string;
    number: number;
}

const Card: React.FC<CardProps> = ({ icon, title, number }) => {
    
    return (
        <Link to="/myMovies" className={styles.link}>
            <div className={styles.cardContainer}>
                <div className={styles.cardText}>
                    <CiHeart className={styles.cardIcon} />
                    <p className={styles.cardTitle}>{title}</p>
                </div>
                <div className={styles.cardNumber}>
                    <h2>{number}</h2>
                </div>   
            </div>
        </Link>
    );
};

export default Card;
