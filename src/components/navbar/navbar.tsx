import logo from '../../assets/Union.svg'
import './navbar.scss'
import {
    IoMdNotificationsOutline,} from 'react-icons/io'
import {AiOutlineCaretDown} from 'react-icons/ai'    
    //  IoSearchOutline,
    
const Navbar = () => {
    return (  
        <>
        <div className='navbar'>
            <div className='nav-head'>
                <img className='image-logo' src={logo} alt=""  />
                <h1>lendsqr</h1>
            </div>
            <div className='input'>
                <input type="search" name="" placeholder='search' id="" />
            </div>
            <div className='persona'>
                <h5>Docs</h5>
                <IoMdNotificationsOutline className='icon'/>
                
                    <img className='image-profile' src="profile.png" alt=""/>
                    <h6>Adedeji</h6>
                    <AiOutlineCaretDown className='icons'/>
               
            </div>
        </div>
        </>
    );
}
 
export default Navbar;