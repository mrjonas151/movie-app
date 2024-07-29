import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import homeIcon from "../assets/home.png";
import logoutIcon from "../assets/logout.png"
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    const [sidebarIcon, setSidebarIcon] = useState(true);
    const toggleSidebar = () => {
        setSidebarIcon(!sidebarIcon);
    };
  return (
    <>                  
    <div 
        className={`${styles.hamburger}`}
        onClick={toggleSidebar}>
        <FiMenu />
    </div>
    <div className={`${styles.sidebar} ${sidebarIcon ? styles.closed : ""}`}>
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
                            <HiOutlineHome className={styles.icon}/>
                            Home
                        </NavLink>
                    </div>
                </li>
                <li>
                    <div className={styles.navLinks}>
                        <NavLink className={({isActive}) => (isActive ? styles.activeLink : "")} to="/myMovies">
                            <CiHeart className={styles.icon}/>
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
