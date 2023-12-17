import img from "./images/undraw_portfolio_feedback_6r17.svg"
import me from "./images/WhatsApp Image 2023-09-26 at 14.14.19.jpg"
import background from "./images/background_.jpg"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import Social_app from "../components/social_app/socialApp";

const Portfolio = () => {
    const { userAuth, popupInfo, setPopupInfo } = useContext(UserContext);

    console.log(userAuth)

    let navigate = useNavigate()
    return (
        <div className="container p-0 portfolio_container py-0 px-0" style={{ minHeight: "100vh", width: "100%", margin: "0 auto", height: "max-content" }}>
            <div className="row portfolio_row_1 p-0 m-0 align-items-center align-items-md-center" style={{ background: "white", width: "100%", maxWidth: "100%", display: "flex", flexWrap: "wrap", maxHeight: "100vh", minHeight: "max-content", height: "max-content" }}>
                <div className="col col-12 col-md-7 order-2 order-md-1 justify-content-center justify-content-md-center" style={{ display: "flex", flexDirection: "column", height: "max-content", minHeight: "45vh", maxHeight: "100vh", padding: "0 10%", }}>
                    <div className="col p-0" style={{ color: "grey", fontWeight: "500", fontSize: "12px", textTransform: "uppercase", height: "10px", maxHeight: "12px", padding: "0 20px", textAlign: "left", width: "max-content", maxWidth: "85%" }}>Hey there,</div>
                    <div className="col p-0 m-0" style={{ color: "rgb(13, 119, 253)", fontSize: "24px", fontWeight: "700", textTransform: "uppercase", height: "10px", minHeight: "35px", maxHeight: "6vh", padding: "0 20px", textAlign: "left", width: "max-content", maxWidth: "90%", whiteSpace: "nowrap", }}> <span style={{ color: "grey", fontWeight: "700" }}>I am </span>  {userAuth.user.name ? userAuth.user.name : "Your Name"}</div>
                    <div className="col p-0 mt-0" style={{ color: "grey", fontSize: "13px", fontWeight: "400", minHeight: "36px", maxHeight: "10vh", overflow: "hidden", padding: "0 20px", textAlign: "left", width: "max-content", maxWidth: "100%", lineHeight: "16px" }}> I'm {userAuth.user.profession ? userAuth.user.profession : "Your profession"}, {userAuth.user.objective ? userAuth.user.objective : "write your career objective which is to be printed in resume or CV as well as here in this line ."}</div>
                    <div className="col mt-3" style={{ width: "100%", maxWidth: "85%", display: "flex", maxHeight: "24px", gap: "20px", justifyContent: "flex-start" }}>
                        <div onClick={() => navigate("/")} className="btn btn-sm px-4" style={{ borderRadius: "20px", fontSize: "10px", background: "linear-gradient(to right, rgb(13, 110, 253), rgba(13, 109, 253, 0.367))", color: "white", border: "1px solid white", boxShadow: "0 0 3px grey" }}>Resume</div>
                        <div onClick={() => navigate("/dashboard")} className="btn btn-sm px-4" style={{ borderRadius: "20px", fontSize: "10px", background: "linear-gradient(to right, rgb(13, 110, 253), rgba(13, 109, 253, 0.367))", color: "white", border: "1px solid white", boxShadow: "0 0 3px grey" }}>Dashboard</div>
                    </div>
                    <div className="col mt-5" style={{ width: "100%", maxWidth: "85%", display: "flex", maxHeight: "30px", gap: "20px", justifyContent: "flex-start" }}>
                            {userAuth.user.social?.length <= 1 && <h6 style={{width:"90%", transform:"translateY(80%)", color:"grey", margin:"o auto", marginLeft:"auto"}}>ADD SOCIAL MEDIA LINKS HERE</h6> }
                            {userAuth.user.social?.map((v,i)=>{
                                return v.id !== 0 && <Social_app _key={i} parentStyle={{ width: "35px", height: "35px", borderRadius: "50%", border:"1px solid green", display:"grid", placeItems:"center" }} social_app_style={{ width:"25px", height:"25px", boxShadow:"0 0 0 3px white", background: "rgba(13, 109, 253, 0.667)", borderRadius: "50%", display: "grid", placeItems: "center"}} v={v}/>
                            })}
                    </div>
                    <h6 className="mt-3" style={{width:"90%", borderTop:"1px solid rgb(13, 110, 253)", color:"rgb(13, 110, 253)"}}>Connect with me</h6>

                </div>
                <div className="col col-12 col-md-5 p-0 py-3 order-1 order-md-2" style={{ maxHeight: "100vh", overflow: "hidden", height: "max-content", minHeight: "320px", maxHeight: "100vh", position: "relative", display: "grid", background: "linear-gradient(to left, rgb(13, 110, 253), white)" }}>
                    <img src={img} style={{ width: "100%", height: "95%", objectFit: "contain", position: "absolute", zIndex: "1", left: "10%", margin: "10px auto" }} alt="" />

                </div>
            </div>
            <div className="row m-0 justify-content-center p-2 g-4" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "40vh", background: "whitesmoke", margin: "0 auto", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                <h5 className="mt-3 col col-12 mb-1" style={{ fontWeight: "700", color: "rgb(13, 110, 253)" }}>ABOUT ME</h5>

                <div className="col col-12 col-md-5 d-flex justify-content-center justify-content-md-center" style={{ boxShadow: "0 0 3px grey", padding: "30px", borderRadius: "50%" }}>
                    <img className="" src={me} style={{ width: "40%", minWidth: "220px" }} alt="" />
                </div>

                <div className="col col-12 col-md-5 d-flex justify-content-center justify-content-md-start" style={{ height: "100%" }}>
                    <p className="col col-12 col-md-10 mt-3" style={{ fontSize: "90%", color: "grey", fontWeight: "500", maxWidth: "90%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "2px solid rgb(13, 110, 253)", borderBottom: "2px solid rgb(13, 110, 253)", padding: "10px" }}>{userAuth.user.about}</p>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;