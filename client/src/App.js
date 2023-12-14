import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/register';
import NavBar from './components/navbar';
import {  useState, createContext, useMemo } from 'react';
import axios from 'axios';
import NonProtectedRoute from './protectedNonProtectedRoute/nonProtectedRoute';
import ProtectedRoute from './protectedNonProtectedRoute/protectedRoute';
import Dashboard from './pages/dashboard';
import ResumeForm from './components/ui/resumeForm.jsx/resumeForm';
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
  async function logged(){
  try {
    console.log("user logged in app.jsx=> ")

    let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/loggedme`
    if(userAuth.user.auth === false){
      console.log("user logged in app.jsx=> ")
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
    };

    // if(popupInfo.show){
    //   let {data} = await axios.get(
    //     url,
    //     {
    //       headers : { "Content-Type" : "application/json"},
    //       "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
    //       withCredentials : true
    //     }
    //   );

    // console.log("logged  => ",data)

    //   if(data.success){
    //     setUserAuth({
    //       user : data.user,
    //       auth : data.success,
    //       message : data.message
    //     })
    //   }
    // }

  } catch (error) {
    console.log("logged error", error.response)
  }
}
logged();
},[popupInfo, userAuth])


  return (
    <div className="App">
      <UserContext.Provider value={{userAuth:userAuth, setUserAuth: setUserAuth, popupInfo, setPopupInfo}}>
      <BrowserRouter>


        <Routes>
          {/* <Route element={<ProtectedRoute auth={{userAuth: userAuth.auth, setUserAuth: setUserAuth}}/>}> */}
          <Route element={<ProtectedRoute userAuth={userAuth}/>}>

            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/resume/edit/:id' element={<ResumeForm />}/>
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
