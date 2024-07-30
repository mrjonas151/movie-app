import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar( { Icon }: { Icon: React.ElementType } ) {

    const [word, setWord] = useState<string>("");

    return (
        <div className={styles.searchContainer}>
            <input 
                onChange={(e) => setWord(e.target.value)} 
                placeholder="Search..."
                className={styles.searchBar}
            />
            <button>
                {Icon && <Icon className={styles.searchIcon}/>}
            </button>
        </div>
    );
}

export default SearchBar;
