import { NavLink } from "react-router-dom";
import Input from "./input";
import Button from "./button";



const Form = ({ css, clss, func, inputChangeHandler, formSubmitBtnName, loginFormSubmit, required }) => {
    const location = window.location.pathname;

    return (
        <div className="container p-0 m-0" style={{ border: "2px solid rgb(13,110,253)", width: "max-content", minWidth: "260px", padding: "0" }}>
            <form onSubmit={func} id="loginform" className="m-0 d-flex flex-column flex-md-row flex-wrap" style={css}>

                {location === "/register" && <>
                    <Input required={required} inputChangeHandler={inputChangeHandler} name="name" type={`text`} placeholder={`Enter your fullname`} css={{ width: "100%", height: "32px", maxWidth: "300px", minWidth: "260px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", outline: "1px solid grey", border: "none", borderRadius: "4px" }} />
                    <Input required={required} inputChangeHandler={inputChangeHandler} name="number" type={`number`} placeholder={`Enter your mobile number`} css={{ width: "100%", height: "32px", maxWidth: "300px", minWidth: "260px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", outline: "1px solid grey", border: "none", borderRadius: "4px" }} />
                </>
                }

                <Input required={required} inputChangeHandler={inputChangeHandler} name="email" type={`email`} placeholder={`Enter your email`} css={{ width: "100%", height: "32px", maxWidth: "300px", minWidth: "260px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", outline: "1px solid grey", border: "none", borderRadius: "4px" }} />
                <Input required={required} inputChangeHandler={inputChangeHandler} name="password" type={`password`} placeholder={`Enter your password`} css={{ width: "100%", height: "32px", maxWidth: "300px", minWidth: "260px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", outline: "1px solid grey", border: "none", borderRadius: "4px" }} />

                {location === "/register" &&
                    <Input required={required} inputChangeHandler={inputChangeHandler} name="repassword" type={`password`} placeholder={`Re-enter your password`} css={{ width: "100%", height: "32px", maxWidth: "300px", minWidth: "260px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", outline: "1px solid grey", border: "none", borderRadius: "4px" }} />
                }
                {location === "/login" && <div style={{ width: "100%", minWidth: "260px", maxWidth: "300px", display: "flex", flexDirection: "row", alignItems: "center", padding: "4px" }}>
                    <Input inputChangeHandler={inputChangeHandler} name="remember" id={"rememberMe"} type={`checkbox`} placeholder={`Enter your password`} css={{ height: "12px", maxWidth: "300px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", border: "none", borderRadius: "4px" }} />
                    <label htmlFor="rememberMe" style={{ fontSize: "10px", fontWeight: "400", color: "grey", marginLeft: "5px" }} >Remember me</label>
                    <NavLink style={{ fontSize: "12px", fontWeight: "500", listStyle: "none", textDecoration: "none", whiteSpace: "nowrap", marginLeft: "auto" }} to="/forget_password">Forget password ?</NavLink>
                </div>
                }

                {location === "/register" && <div style={{ width: "100%", minWidth: "260px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: "4px" }}>
                    <Input func={func} id={"tnc"} type={`checkbox`} defaultValue={false} name="tnc" placeholder={`Enter your password`} css={{ height: "12px", padding: "3px 12px", fontSize: "14px", color: "grey", fontWeight: "400", border: "none", borderRadius: "4px" }} />
                    <label htmlFor="tnc" style={{ fontSize: "10px", fontWeight: "400", color: "grey", marginLeft: "5px" }} >I agree with term and condition</label>
                </div>
                }

                <Input clss="btn btn-primary" type="submit" defaultValue={formSubmitBtnName} css={{ width: "100%" }} btnName={formSubmitBtnName} />

            </form>
        </div>
    )
};

export default Form;