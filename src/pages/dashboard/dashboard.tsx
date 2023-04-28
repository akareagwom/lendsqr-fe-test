import Drawer from "../../components/drawer/drawer";
import Navbar from "../../components/navbar/navbar";

const Dashboard = () => {
    return ( 
        <>
        <div className="dash-naV">
            <Navbar/>
        </div>
        <div className="dash-drawer">
            <Drawer/>   
        </div>


        </>
     );
}
 
export default Dashboard;