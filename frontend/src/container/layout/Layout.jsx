import Header from "../../components/Header/Header";
import Authcontext from "../../context/Authcontext";


const Layout = ({children})=>{
    return(
        <Authcontext>
            
            <Header/>
            {children}
        </Authcontext>
        
    )
}
export default Layout;