import { BsArrowLeft,BsFillPersonFill } from "react-icons/bs";
// import Drawer from "../../components/drawer/drawer";
// import Navbar from "../../components/navbar/navbar";
import Layout from "../../components/Layout/layout";

import './user.scss'

const User = () => {
    return ( 
        <>
        <Layout>
        {/* <Navbar/>
        <Drawer/> */}
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
                    <BsFillPersonFill className="img"/>
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
                    <h4>Personal Information</h4>
                </div>
                <div className="edu-info">
                <h4>Education and Employment</h4>
                </div>
                <div className="socials-info">
                    <h4>Socials</h4>
                </div>
                <div className="guarantor-info">
                    <h4>Guarantor</h4>
                </div>
                <footer>

                </footer>
            </div>
        </div>
        </Layout>
        </>
     );
}
 
export default User;