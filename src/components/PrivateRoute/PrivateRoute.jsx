
import { useContext } from 'react';
import CardDetails from '../CardDetails/CardDetails';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span className="loading lg:mt-[380px] mt-80  ml-[800px] loading-infinity loading-lg"></span>
    }
    if(user){
        return <div>
            
            <CardDetails></CardDetails>
        </div>
    }
    return ( <Navigate state={location.pathname} to={'/login'}></Navigate>
        
    );
};

export default PrivateRoute;