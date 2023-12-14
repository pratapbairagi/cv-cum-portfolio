import { Outlet, Navigate} from "react-router-dom";
import {useContext, memo} from "react"
import { UserContext } from "../App";

const NonProtectedRoute = () => {
    const {userAuth} = useContext(UserContext)
   console.log(userAuth)
    
    return ( userAuth.auth === false ? <Outlet/> : <Navigate replace to="/dashboard"/> )
};
export default NonProtectedRoute;