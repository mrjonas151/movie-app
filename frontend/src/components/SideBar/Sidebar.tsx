import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { HiOutlineHome } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import logoutIcon from "../../assets/logout.png";
import styles from "./Sidebar.module.css";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthContext";

const Sidebar = () => {
    const [sidebarIcon, setSidebarIcon] = useState(true);
    const [username, setUsername] = useState("");
    const [initials, setInitials] = useState("");
    const { signOut } = useContext(AuthContext);

    const toggleSidebar = () => {
        setSidebarIcon(!sidebarIcon);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auth = getAuth();
                const user = auth.currentUser;

                if (user) {
                    try {
                        const token = await user.getIdToken(true);
                        const response = await axios.get("http://localhost:3333/users", {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });

                        const { name, last_name } = response.data;
                        const fullName = `${name} ${last_name}`;
                        setUsername(fullName);

                        const userInitials = `${name[0].toUpperCase()}${last_name[0].toUpperCase()}`;
                        setInitials(userInitials);
                    } catch (error) {
                        console.error("Error user data:", error);
                    }
                } else {
                    console.error("User is not logged in");
                }
            } catch (error) {
                console.error("Error getting auth token:", error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(); 
        } catch (error) {
            return;
        }
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
            <div className={styles.userInitials}>{initials}</div>
            <p className={styles.username}>{username}</p>
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
            <button onClick={handleLogout}>Logout<img src={logoutIcon} alt="" /></button>
        </div>
    </div>
    </>
  )
}

export default Sidebar;