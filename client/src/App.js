import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/register';
import NavBar from './components/navbar';
import {  useState, createContext, useMemo, useEffect } from 'react';
import axios from 'axios';
import NonProtectedRoute from './protectedNonProtectedRoute/nonProtectedRoute';
import ProtectedRoute from './protectedNonProtectedRoute/protectedRoute';
import Dashboard from './pages/dashboard';
import ResumeForm from './components/ui/resumeForm.jsx/resumeForm';
import ResumeDownload from './components/resumeDownload/resumeDownload';
// bacnic IT company
// delhi nirman vihar
// pi, hr
// 8-11
export const UserContext = createContext("")

function App() {

  // popup
  const [popupInfo, setPopupInfo] = useState({
    success : false,
    message : "",
    show : false
});

// userlogged
const [userAuth, setUserAuth] = useState({
  user : {},
  auth : false,
  message : ""
})
useMemo(()=>{
  if(popupInfo.show){
    setPopupInfo({
      ...popupInfo,
      show : false
    })
  }
logged();
},[ userAuth.user, userAuth.auth, popupInfo]);


async function logged(){
  try {
    let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/loggedme`
    if(userAuth.auth === false){
    let {data} = await axios.get(
      url,
      {
        headers : { "Content-Type" : "application/json"},
        "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
        withCredentials : true
      }
    );
    if(data.success){
      setUserAuth({
        user : data.user,
        auth : data.success,
        message : data.message
      })
    }
    }

  } catch (error) {
    console.log("logged error", error.response)
  }
}

const [location, setLocation] = useState(window.location.pathname)


  return (
    <div className="App"  style={{minWidth:`${location === "/" ? "542px" : "100%"}`}}>
      <UserContext.Provider value={{userAuth:userAuth, setUserAuth: setUserAuth, popupInfo, setPopupInfo}}>
      <BrowserRouter>


        <Routes>
          <Route element={<ProtectedRoute userAuth={userAuth}/>}>
            <Route path='/resume/add/:id' element={<ResumeForm />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/resume/edit/:id' element={<ResumeForm />}/>
            <Route path='/profile/edit/:id' element={<ResumeForm />}/>
            <Route path='/' element={<ResumeDownload />}/>

          </Route>

          
          <Route element={<NonProtectedRoute userAuth={userAuth}/>} >
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          </Route>

        </Routes>
        <NavBar/>

      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
