import { memo, useContext, useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axios from "axios";

const NavBar = () => {
  let userAuth = useContext(UserContext);
  let navigate = useNavigate();

  const location = useLocation()

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

  const [menuOpen, setMenuOpen] = useState("close");

  const navClose_fun = () => {
    setMenuOpen("close")
  }

  return (
     <div className=" m-0 z-20 h-16 sm:h-16 md:h-20 lg:h-20 xl:h-20 fixed sm:fixed md:relative lg:relative xl:sticky bottom-8 sm:bottom-0 md:bottom-initial lg:bottom-initial top-initail md:top-0 w-3/4  sm:w-3/4 md:w-full d-flex justify-between align-items-center pr-2.5 pl-2.5 sm:pr-2.5 sm:pl-2.5 md:pr-6 lg:pr-8 xl:pr-10 left-12 sm:left-12 md:left-0 rounded-full sm:rounded-full md:rounded-none lg:rounded-none bg-white shadow-sm sm:shadow-sm md:shadow-none" >
      <ul className={` ${menuOpen === "open" ? "bottom-4 sm:bottom-4" : "bottom-minus sm:bottom-minus"} transition-all duration-1000 m-0 fixed sm:fixed md:relative lg:relative flex sm:flex p-0 justify-center sm:justify-center md:justify-start align-items-center  gap-x-3 sm-gap-3 md:gap-x-5  h-28 sm:h-28 md:h-full lg:h-full w-3/4 sm:w-3/4 left-12 sm:left-12 md:left-2 md:w-8/12 z-30 shadow-md sm:shadow-md md:shadow-none  md:bottom-initial md:top-0 rounded-2 bg-white`}>
        
        <button onClick={()=> setMenuOpen("close")} className="size-6 block sm:block md:hidden absolute top-2 right-2 text-gray-400 font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        </button>

        <NavLink onClick={()=> navClose_fun()} to="/" className={`no-underline w-12 sm:w-12 md:w-24  font-bold size-12 text-gray-600 d-flex flex-column justify-content-center align-items-center ${location.pathname == "/" ? "bg-gray-100" : ""} hover:bg-gray-100 rounded-2 transition-all duration-500`}  >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 block sm:block md:hidden" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className="d-block text-gray-500 text-xs sm:text-xs md:text-base lg:text-2xl">Home</span>
        </NavLink>

        <NavLink onClick={()=> navClose_fun()} to="/portfolio" className={`no-underline w-14 sm:w-14 md:w-32 font-bold size-12 text-gray-600 d-flex flex-column justify-content-center align-items-center ${location.pathname == "/portfolio" ? "bg-gray-100" : location.pathname == "/portfolio/" ? "bg-gray-100" : ""} hover:bg-gray-100 rounded-2 transition-all duration-500`} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 block sm:block md:hidden" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
          <span className="d-block text-gray-500 text-xs sm:text-xs md:text-base lg:text-2xl">Portfolio</span>

        </NavLink>

        <NavLink onClick={()=> navClose_fun()} to="/search" className={`no-underline w-12 sm:w-12 md:w-20 size-12 text-gray-600 d-flex flex-column justify-content-center align-items-center ml-0 sm:ml-0 md:ml-2 lg:ml-4 ${location.pathname == "/search" ? "bg-gray-100" : location.pathname == "/search/" ? "bg-gray-100" : "white"} hover:bg-gray-100 rounded-2 transition-all duration-500`} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} className="w-12 size-6 sm:size-6 md:size-8 sm:w-12 md:w-24 lg:w-32  aspect-video text-gray-500 block sm:block border-0 sm:border-border-0 md:border-2 lg:border-2 border-gray-100 p-0 sm:p-0 md:p-1 lg:p-2 " stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <span className="block sm:block md:hidden font-bold text-gray-500 text-xs sm:text-xs md:text-base lg:text-2xl">Search</span>
        </NavLink>

      </ul>

      <div onClick={()=> setMenuOpen("open")} className="no-underline block sm:block md:hidden size-12 font-bold text-gray-600 w-12 sm:w-12 md:w-16 lg:w-24 xl:w-28 justify-content-center align-items-center hover:bg-gray-100 rounded-full sm:rounded-full md:rounded-2 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1} className="w-full aspect-square text-gray-500 d-block d-sm-block d-md-block p-2 rounded-full sm:rounded-full md:rounded-2" stroke="gray">
        <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>
          {/* <span className="d-none text-gray-500 text-xs sm:text-sm md:text-base lg:text-2xl">Menu</span> */}
      </div>

        {/* <div onClick={logout} className="no-underline d-none d-sm-none d-md-none d-lg-flex d-xl-flex size-12 font-bold text-gray-600 w-12 sm:w-12 md:w-16 lg:w-24 xl:w-28 ml-auto d-flex flex-column justify-content-center align-items-center hover:bg-gray-100 rounded-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-6 d-block d-sm-block d-md-block d-lg-none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          <span className="d-block text-gray-500 text-xs sm:text-sm md:text-base lg:text-2xl">Logout</span>
        </div> */}

        <NavLink onClick={()=> navClose_fun()} to={userAuth.auth ? "/dashboard" : "/login"} className="no-underline rounded-full sm:rounded-full md:rounded-2 w-12 sm:w-12 md:w-16 md:p-2 lg:w-20 lg:p-2.5 xl:w-20 xl:p-3 text-gray-600 d-flex flex-column justify-content-center align-items-center ml-3 sm:ml-3 md:ml-5" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-full sm:w-full md:w-full aspect-square text-gray-500 d-block d-sm-block d-md-block bg-gray-100 p-2.5 rounded-full sm:rounded-full md:rounded-2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span className="d-none text-xs">Profile</span>
        </NavLink>
    </div>
  )
};
export default memo(NavBar);