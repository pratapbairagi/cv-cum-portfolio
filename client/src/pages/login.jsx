import { useContext, memo } from "react";
import Form from "../components/form";
import { NavLink, useNavigate } from "react-router-dom"
import Popup from "../components/popup";
import axios from "axios";
import { UserContext } from "../App";


const Login = () => {
    const { setUserAuth, popupInfo, setPopupInfo} = useContext(UserContext);

    let navigate = useNavigate()

    // for popup hide
    // useMemo(() => {
    //     let timeout;
    //     timeout = setTimeout(() => {
    //         if (popupInfo.show) {
    //             setPopupInfo({
    //                 ...popupInfo,
    //                 show: false
    //             })
    //         }
    //         return clearTimeout(timeout)
    //     }, 2000)

    // }, [popupInfo.show])

    const loginFormSubmit = async (e) => {
        e.preventDefault()
        let form = document.querySelector("#loginform")

        // setLoginFormData({ email : form[0].value, password : form[1].value })

        try {
            if (form[0].value && form[1].value) {
                let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/login`;

                let  {data}  = await axios.post(
                    url,
                    { email: form[0].value, password: form[1].value },
                    { headers: { "Content-type": "application/json" }, 
                    "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
                    withCredentials : true 
                }
                )

                if (data.success === true) {
                    setPopupInfo({
                        message:data.message,
                        success: data.success,
                        show: true
                    })
                    setUserAuth({
                        user: data.user,
                        auth: data.success,
                        message: data.message
                    });
                    navigate("/dashboard")
                }
            }
        } catch (error) {
            setPopupInfo({
                message: error.response.data.error,
                success: error.response.data.success,
                show: true
            })
            console.log("error ===> ", error.response.data.error)
        }

    }

    const inputChangeHandler = (e) => {
    }
    return (
        <div className="log_container container">

            {
                popupInfo.show && <Popup  />
            }

            <div className="formWraper" style={{ width: "max-content", padding: "14px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: ".3px .3px 5px rgb(13,110,253)", borderRadius: "6px" }}>
                <strong className="text-primary" style={{ fontSize: "24px", width: "100%", background: "white" }}>LOGIN</strong>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(13,110,253)" style={{ width: "100px", background: "whitesmoke", margin: "16px 0", borderRadius: "50%" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <Form func={loginFormSubmit} inputChangeHandler={inputChangeHandler} formSubmitBtnName={"LOGIN"} css={{ display: "flex", flexWrap: "wrap", width: "max-content", maxWidth: "300px", rowGap: "10px", columnGap: "10px", justifyContent: "flex-start", padding: "16px" }} />

                <div style={{ width: "100%", minWidth: "260px", maxWidth: "660px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end", padding: "4px 22px", gap: "6px" }}>
                    <p className="p-0 m-0" style={{ padding: "0", fontSize: "10px", fontWeight: "400", listStyle: "none", textDecoration: "none", whiteSpace: "nowrap" }} to="/forget_password">I don't have account ?</p>

                    <NavLink style={{ fontSize: "12px", fontWeight: "500", listStyle: "none", textDecoration: "none", whiteSpace: "nowrap" }} to="/register">Sing-up</NavLink>
                </div>
            </div>
        </div>
    )
};

export default memo(Login);