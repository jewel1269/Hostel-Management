
import { useContext } from 'react';
import CardDetails from '../CardDetails/CardDetails';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span className="loading mt-[480px] ml-[800px] loading-infinity loading-lg"></span>
    }
    if(user){
        return <CardDetails></CardDetails>
    }
    return ( <Navigate state={"hello ami here"} to={'/login'}></Navigate>
        
    );
};

export default PrivateRoute;