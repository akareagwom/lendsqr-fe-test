import {FunctionComponent} from 'react'
import Navbar from '../navbar/navbar'
import Drawer from '../drawer/drawer'

interface LayoutProps {
    children: React.ReactNode,
}
 
const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    return ( 
        <>
            <Navbar/>
            <Drawer/>
            <main>{children}</main>
        </>
     );
}
 
export default Layout;