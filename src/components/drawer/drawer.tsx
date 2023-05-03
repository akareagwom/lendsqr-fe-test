import './drawer.scss'
import {IoChevronDownSharp,IoBriefcase,IoBarChartSharp} from 'react-icons/io5'
import {FaHome,FaPiggyBank,FaHandHoldingUsd,FaRegHandshake,FaUsers,FaCoins,FaClipboardList} from 'react-icons/fa'
import {FiUsers,FiUserCheck,FiUserX} from 'react-icons/fi'
import {AiOutlineBank} from 'react-icons/ai'
import {BsPhoneFlip} from 'react-icons/bs'
import {BiAbacus} from 'react-icons/bi'
import {TbWindmillFilled,TbDiscount2,} from 'react-icons/tb'
import { RiUserSettingsFill,RiFilePaper2Fill} from 'react-icons/ri'

const Drawer = () => {
    return ( 
        <>
            <div className='drawer'>
                
                <div className='drawer-head'>
                    <IoBriefcase className='IoBriefcase'/>
                    <h5>Switch Organization</h5>
                    <IoChevronDownSharp/>
                </div>
                       
                <h5><FaHome/>Dashboard</h5>
                <div>
                <h5>Customers</h5>
                <ul>
                <li><FiUsers/> Users</li>
                <li><FaUsers/>Guarantors</li>
                <li><FaHandHoldingUsd/>Loans</li>
                <li><FaRegHandshake/>Descision Models</li>
                <li><FaPiggyBank/>Savings</li>
                <li><FaHandHoldingUsd/>Loan Request</li>
                <li><FiUserCheck/>White List</li>
                <li><FiUserX/>Karma</li>
                
                </ul>
                </div>

                <div>
                <h5>Businesses</h5>
                <ul>
                <li><IoBriefcase/>Organisation</li>
                <li><FaHandHoldingUsd/>Loan Products</li>
                <li><AiOutlineBank/>Savings Products</li>
                <li><FaCoins/>Fees and Charges</li>
                <li><BsPhoneFlip/>Transactions</li>
                <li><TbWindmillFilled/>Services</li>
                <li><RiUserSettingsFill/>Services Account</li>
                <li><RiFilePaper2Fill/>Settlements</li>
                <li><IoBarChartSharp/>Reports</li>
                </ul>
                </div>

                <div>
                    <h5>Settings</h5>
                    <ul>
                        <li><BiAbacus/>Prefrences</li>
                        <li><TbDiscount2/>Fees and Pricing</li>
                        <li><FaClipboardList/>Audit Logs</li>
                    </ul>
                </div>
                
                
            </div>
        </>
     );
}
 
export default Drawer;