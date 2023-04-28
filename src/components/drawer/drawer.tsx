import './drawer.scss'
import {IoChevronDownSharp,IoBriefcase} from 'react-icons/io5'
const Drawer = () => {
    return ( 
        <>
            <div className='drawer'>
                
                <div className='drawer-head'>
                    <IoBriefcase className='IoBriefcase'/>
                    <h5>Switch Organization</h5>
                    <IoChevronDownSharp/>
                </div>
                <h5>Dashboard</h5>
                <div>
                <h5>Customers</h5>
                <ul>
                <li>Users</li>
                <li>Guarantors</li>
                <li>Loans</li>
                <li>Descision Models</li>
                <li>Savings</li>
                <li>Loan Request</li>
                <li>White List</li>
                <li>Karma</li>
                
                </ul>
                </div>

                <div>
                <h5>Businesses</h5>
                <ul>
                <li>Organisation</li>
                <li>Loan Products</li>
                <li>Savings Products</li>
                <li>Fees and Charges</li>
                <li>Transactions</li>
                <li>Services</li>
                <li>Services Account</li>
                <li>Settlements</li>
                <li>Reports</li>
                </ul>
                </div>

                <div>
                    <h5>Settings</h5>
                    <ul>
                        <li>Prefrences</li>
                        <li>Fees and Pricing</li>
                        <li>Audit Logs</li>
                    </ul>
                </div>
                
                
            </div>
        </>
     );
}
 
export default Drawer;