import styles from './MyMovies2.module.css';
import Sidebar from '../../components/SideBar/Sidebar';
import SearchBar from '../../components/SearchBar/SearchBar';
import TopBar from '../../components/TopBar/TopBar';

function MyMovies2() {

    return (
        <div className={styles.mymoviesContainer}>
            <Sidebar />
            <SearchBar />
            <TopBar />
        </div>
    );
   
}

export default MyMovies2;
