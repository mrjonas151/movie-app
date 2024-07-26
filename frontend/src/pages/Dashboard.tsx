import { useEffect } from "react"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
    useEffect(() => {
        document.title = "MovieApp - Home";
    }, []);
  return (
    <>
        <Sidebar/>
    </>
  )
}

export default Dashboard
