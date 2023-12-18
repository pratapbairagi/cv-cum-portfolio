import { memo, useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

const NavBar = () => {
  let userAuth = useContext(UserContext);
  let navigate = useNavigate()
  let {pathname} = useLocation()
  const [location, setLocation] = useState(pathname)
  useEffect(() => {
    setLocation(pathname)
  }, []);

  // logout fun
  const logout = async () => {
try {
  let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/logoutme`
  let {data} = await axios.get(url, {
    headers : { "Content-Type" : "application/json"},
    "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
    withCredentials : true
  });

  if(data.success){
    navigate("/login")
    window.location.reload()
  }

} catch (error) {
  
}

  }

  return (<>
     <div className="navbar_container container m-0 p-0" >
      <ul className="p-0 m-0">
        <NavLink to="/" className="navlink"  >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </NavLink>
        <NavLink to="/about" className="navlink" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>

        </NavLink>
        <NavLink to="/search" className="navlink active" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

        </NavLink>
        <NavLink to={userAuth.auth ? "/dashboard" : "/login"} className="navlink" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </NavLink>
        <div onClick={logout} className="navlink">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

        </div>
      </ul>
    </div>
  </>
  )
};
export default memo(NavBar);