import logo from '../../assets/Union.svg'
import sign from '../../assets/pablo-sign-in 1.svg'
import { Link } from 'react-router-dom'
import './dashboard.scss'

const Dashboard = () => {
    return ( 
        <>
        <div className='dashboard'>
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
                    <Link to=''>FORGOT PASSWORD?</Link>
                    <button>LOG IN</button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Dashboard;