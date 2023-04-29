import Drawer from "../../components/drawer/drawer";
import Navbar from "../../components/navbar/navbar";
import './dashboard.scss'
import {SlPeople} from 'react-icons/sl'
import{useState,useEffect} from 'react'
// FaUsers

const Dashboard = () => {

    const URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    const [users, setUsers] = useState([])
    const [error, setError] = useState({})

    interface User{
        orgName: string;
        userName: string;
        email: string;
        phoneNumber: string;
        createdAt: string;
        lastActiveDate: string;
    }

    const fetchUserData = () => {
      fetch(URL)
        .then(response => response.json()
        )
        .then(res => setUsers(res))
        .catch(err => setError(err))
        // .then(data => {
        //   setUsers(data)
        // })
    }
    useEffect(() => {
        return fetchUserData()
      }, [])
    return ( 
        <>
        <div className="dash-naV">
            <Navbar/>
        </div>
        <div className="dash-drawer">
            <Drawer/>   
        </div>
        <div className="tabs">
            <div className="tab1">
                <SlPeople className="tabs1" />
            </div>
            <div>hla</div>
            <div>hla</div>
        </div>
        {/* {users.length > 0 ? users.map((user: User) => console.log(user.phoneNumber)):('loading')} */}
      {users.length > 0 &&(
        <table>
            <tr>
                <th>ORGANIZATION</th>
                <th>USERNAME</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th>
                <th>DATE JOINED</th>
                <th>STATUS</th>
            </tr>
            {users.map((user:User)=>(
                <tr key={user.createdAt}>
                <td>{user.orgName}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastActiveDate}</td>
               </tr>
            ))
       
            
        

        }
        </table>
      )}  
       


        </>
     );
}
 
export default Dashboard;