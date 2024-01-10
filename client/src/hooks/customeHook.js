import axios from "axios";
import { useEffect, useState } from "react";


export default function useLoggednHook(initialState) {
    let ignore = false;
    const [userAuth, setUserAuth] = useState({
        user: {},
        auth: false,
        message: ""
    });

     useEffect(()=>{
if(!ignore){
    async function logged() {
        try {
            let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/loggedme`
            // if (userAuth.auth === false) {
                let { data } = await axios.get(
                    url,
                    {
                        headers: { "Content-Type": "application/json" },
                        "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
                        withCredentials: true
                    }
                );
                if (data.success) {
                    return setUserAuth(
                        {
                            user: data.user,
                            auth: data.success,
                            message: data.message
                          }
                    )
                }
            // }
    
        } catch (error) {
            console.log("logged error", error.response)
            return error
        }
    };

    logged();
}

   return ()=> ignore = true;

    },[userAuth.auth])


return [userAuth]

}

