import { useState } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.png";
import heartIcon from "../assets/heart.png"
import logoutIcon from "../assets/logout.png"
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const [sidebarIcon, setSidebarIcon] = useState(true);
    const toggleSidebar = () => {
        setSidebarIcon(!sidebarIcon);
    };

  return (
    <>                  
    <div className={`${styles.hamburger} ${sidebarIcon ? styles.hidden : ""}`} onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={`${styles.sidebar} ${sidebarIcon ? "" : styles.closed}`}>
        <div className={styles.sideTitle}>
            <h1>MovieApp</h1>
        </div>
        <div className={styles.profileContainer}>
          <img src={homeIcon} alt="foto" className={styles.userPhoto} />
          <p className={styles.username}>Karthi Madesh</p>
        </div>
        <div className={styles.sidebarNav}>
            <ul>
                <li>
                    <div className={styles.navLinks}>
                        <NavLink className={({isActive}) => (isActive ? styles.activeLink : "")} to="/dashboard">
                            <img src={homeIcon} alt="" />
                            Home
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className={styles.navLinks}>
                        <NavLink className={({isActive}) => (isActive ? styles.activeLink : "")} to="/myMovies">
                            <img src={heartIcon} alt="" />
                            My Movies
                        </NavLink>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.logout}>
            <a href="">Logout<img src={logoutIcon} alt="" /></a>
        </div>
    </div>
    </>
  )
}

export default Sidebar
