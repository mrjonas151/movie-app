import { useState } from 'react';
import styles from './ToggleButton.module.css';

interface ToggleButtonProps {
    isRed: boolean;
    toggleColor: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isRed, toggleColor }) => {
    return (
      <div className={`${styles.toggleButton} ${isRed ? styles.redBackground : styles.blueBackground}`}
      onClick={toggleColor}>
        <div className={`${styles.toggleCircle} ${isRed ? styles.toggled : ''}`}></div>
      </div>
    );
  };

export default ToggleButton;
