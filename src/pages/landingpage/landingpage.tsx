import logo from '../../assets/Union.svg'
import sign from '../../assets/pablo-sign-in 1.svg'
import { Link } from 'react-router-dom'
import './landingpage.scss'

const LandingPage = () => {
    return ( 
        <>
        <div className='landingPage'>
            <div className='container'>
                <div className='head'>
                    <img src={logo} alt=""  />
                    <h1>lendsqr</h1>
                </div>
                <div className='image-container'>
                    <img className='pablo' src={sign} alt="" />
                </div>
            </div>
            <div className='form'>
                <div className='form-container'>
                    <h1>
                        Welcome!
                    </h1>
                    <p>
                        Enter details to login.
                    </p>
                    <form action="">
                        <input type="email" placeholder='Email' name="" id="" />
                        <input type="password" placeholder='Password' name="" id="" />
                    </form>
                    <Link className='link' to=''>FORGOT PASSWORD?</Link>
                    
                        <Link to='/Dashboard'><button>LOG IN</button></Link>
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default LandingPage;