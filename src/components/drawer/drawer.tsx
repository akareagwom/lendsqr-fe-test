import './drawer.scss'

const Drawer = () => {
    return ( 
        <>
            <div className='drawer'>
                <h5>Switch Organization</h5>
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
                
                
            </div>
        </>
     );
}
 
export default Drawer;