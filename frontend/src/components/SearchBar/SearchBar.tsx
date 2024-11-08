import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
    Icon: React.ElementType;
    onSearchChange: (newValue: string) => void;
};

function SearchBar({ Icon, onSearchChange }: SearchBarProps) {
    const [word, setWord] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setWord(newValue);
        onSearchChange(newValue);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                onChange={handleChange}
                placeholder="Search..."
                className={styles.searchBar}
            />
            <div className={styles.searchIcon}>
                <CiSearch />
            </div>
        </div>
    );
}

export default SearchBar;
