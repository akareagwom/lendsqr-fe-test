import Layout from "../../components/Layout/layout";
import './dashboard.scss'
import {SlPeople} from 'react-icons/sl'
import{useState,useEffect} from 'react'
// FaUsers

const Dashboard = () => {

    // const URL = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
    const [users, setUsers] = useState([])
    const [error, setError] = useState({})

    interface User{
        orgName: string;
        userName: string;
        email: string;
        phoneNumber: string;
        createdAt: string;
        lastActiveDate: string;
        start: number;
        end: number;
    }
    function test ({start,end}:User){
        return (start + end);
        // test(4)
    }
   
    console.log(test)

    const fetchUserData = () => {
      fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        .then(response => response.json()
        )
        .then(res => setUsers(res.slice(0,20)))
        .catch(err => setError(err))
    }
    useEffect(() => {
        return fetchUserData()
      }, [])
    return ( 
        <>
       <Layout>
        <div className="users">
            <h2>Users</h2>
            <div className="tabs">
                    <div className="tab1">
                        <SlPeople className="tabs1" />
                        <h4>users</h4>
                        <h2>23456</h2>
                    </div>
                    <div className="tab1">
                    <SlPeople className="tabs1" />
                    <h4>users</h4>
                    <h2>23456</h2>
                    </div>
                    <div className="tab1">
                    <SlPeople className="tabs1" />
                    <h4>users</h4>
                    <h2>23456</h2>
                    </div>
                </div>
                
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
        </div>
   
       
        </Layout>

        </>
     );
}
 
export default Dashboard;