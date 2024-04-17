import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Contact from "../Contact/Contact";


const PrivateContact = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span className="loading mt-[280px] ml-[800px] loading-infinity loading-lg"></span>
    }
    if(user){
        return <div>
            <Contact></Contact>
        </div>
    }
    return ( <Navigate state={location.pathname} to={'/login'}></Navigate>);
};


export default PrivateContact;