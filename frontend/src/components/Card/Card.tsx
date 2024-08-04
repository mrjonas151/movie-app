// src/components/Card/Card.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../contexts/ColorContext";
import styles from "./Card.module.css";

interface CardProps {
    title: string;
    number: number;
    Icon?: React.ElementType;
}

const Card: React.FC<CardProps> = ({ Icon, title, number }) => {
    const { isRed } = useContext(ColorContext);

    return (
        <Link to="/myMovies">
            <div className={styles.cardContainer}>
                <div className={styles.cardText}>
                    {Icon && (
                        <Icon
                            className={`${styles.cardIcon} ${
                                isRed ? styles.redIcon : styles.blueIcon
                            }`}
                        />
                    )}
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
