import logo from '../../assets/Union.svg'
import './navbar.scss'

const Navbar = () => {
    return (  
        <>
        <div>
            <div className='nav-head'>
                <img src={logo} alt=""  />
                <h1>lendsqr</h1>
            </div>
        </div>
        </>
    );
}
 
export default Navbar;