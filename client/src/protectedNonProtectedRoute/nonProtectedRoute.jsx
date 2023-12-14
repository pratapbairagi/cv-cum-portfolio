import { Outlet, Navigate} from "react-router-dom";
import {useContext, memo} from "react"
import { UserContext } from "../App";

const NonProtectedRoute = ({userAuth}) => {
    // const {userAuth} = useContext(UserContext)
   console.log(userAuth)
    
    return ( userAuth.auth === false ? <Outlet/> : <Navigate replace to="/dashboard"/> )
};
export default memo(NonProtectedRoute);