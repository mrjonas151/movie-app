import { useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import Card from "../../components/Card/Card";
import heart from "../../assets/heart.png";

const Dashboard: React.FC = () => {
    useEffect(() => {
        document.title = "MovieApp - Home";
    }, []);
  return (
    <>
        <Sidebar/>
        <Card icon={heart} title="My Movies" number={222} />
    </>
  )
}

export default Dashboard
