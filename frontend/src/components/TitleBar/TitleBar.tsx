import React from "react";
import styles from "./TitleBar.module.css";

interface TitleBarProps {
    title: string;
    isRed: boolean;
}

const TitleBar: React.FC<TitleBarProps> = ({ title, isRed }) => {
    return (
        <div
            className={`${styles.titleContainer} ${
                isRed ? styles.titleContainerRed : styles.titleContainerBlue
            }`}
        >
            <h1>{title}</h1>
        </div>
    );
};

export default TitleBar;
