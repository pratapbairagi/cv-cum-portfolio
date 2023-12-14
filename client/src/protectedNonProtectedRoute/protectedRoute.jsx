import {Outlet, Navigate} from "react-router-dom";
import { UserContext } from "../App";
import { useContext, memo } from "react";

const ProtectedRoute = () => {
    const {userAuth} = useContext(UserContext)

   console.log(userAuth)

    return ( userAuth.auth === true ? <Outlet/> : <Navigate replace to="/login"/>)
}

export default ProtectedRoute;