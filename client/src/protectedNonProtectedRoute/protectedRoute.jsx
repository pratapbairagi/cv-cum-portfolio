import {Outlet, Navigate} from "react-router-dom";
import { UserContext } from "../App";
import { useContext, memo } from "react";

const ProtectedRoute = ({userAuth}) => {
    // const {userAuth} = useContext(UserContext)

   console.log(userAuth)
   console.log(userAuth.userAuth)
   console.log(userAuth.auth)
    return ( userAuth.auth === true ? <Outlet/> : <Navigate replace to="/login"/>)
}

export default memo(ProtectedRoute);