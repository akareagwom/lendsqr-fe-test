import { BsArrowLeft } from "react-icons/bs";
import Drawer from "../../components/drawer/drawer";
import Navbar from "../../components/navbar/navbar";
import './user.scss'

const User = () => {
    return ( 
        <>
        <Navbar/>
        <Drawer/>
        <div className="user-container">
            <div className="back">
            <p><BsArrowLeft/> Back to Users</p>
            </div>
            <div className="user-head">
                <div className="user-header"><h4>User Details</h4></div>
                <div className="btn-trigger">
                    <button>Blacklist User</button>
                    <button>Activate User</button>
                </div>
            </div>
            
        </div>
        </>
     );
}
 
export default User;