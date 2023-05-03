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
                    <button className="btn-red">Blacklist User</button>
                    <button className="btn-green">Activate User</button>
                </div>
            </div>
            <div className="user-first">
                <div className="content">
                    <img src="profile.png" alt="" />
                    <div className="user-flex">
                        <div className="bla">
                            <h5>Grace Effiom</h5>
                            <p>LSQFf587g90</p>
                        </div>
                        <div className="bla">
                            <h5>Grace Effiom</h5>
                            <p>LSQFf587g90</p>
                        </div>
                        <div className="bla">
                            <h5>Grace Effiom</h5>
                            <p>LSQFf587g90</p>
                        </div>
                    </div>
                </div>
                <ul className="user-tabs">
                    <li>General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                </ul>
            </div>
            <div className="info">
                <div className="personal-info">

                </div>
                <div className="edu-info">

                </div>
                <div className="socials-info">

                </div>
                <div className="guarantor-info">

                </div>
                <footer>
                    
                </footer>
            </div>
        </div>
        </>
     );
}
 
export default User;