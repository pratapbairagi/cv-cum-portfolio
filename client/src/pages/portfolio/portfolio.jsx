import img from "../images/undraw_portfolio_feedback_6r17.svg"
// import me from "./images/WhatsApp Image 2023-09-26 at 14.14.19.jpg"
// import background from "./images/background_.jpg"
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../../App";
import Social_app from "../../components/social_app/socialApp";
import axios from "axios";
import  "./portfolio.css"

const Portfolio = () => {
    let {id} = useParams();

    
    console.log(id)
    let { userAuth, popupInfo, setPopupInfo, setUserAuth } = useContext(UserContext);

    

    const getSearchedPortfolioFun = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/user/${id}`
            let {data} = await axios.get(
                url,
          {
            headers: { "Content-Type": "application/json" },
            "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
            withCredentials: true
          }
            );
             if(data.success){
                setUserAuth({
                    user: data.user,
                    auth: true,
                    message: ""
                  })
             }
        } catch (error) {
            
        }
    };

    useMemo(()=>{
        if(id){
            getSearchedPortfolioFun()
        }
    },[id]);

    let navigate = useNavigate()
    return (
        <div className="container p-0 portfolio_container py-0 px-0">
            <div className="row portfolio_row_1 p-0 m-0 align-items-center align-items-md-center">
                <div className="col portfolio_row_1_col_1 col-12 col-md-7 order-2 order-md-1 justify-content-center justify-content-md-center">
                    <div className="col p-0" style={{ color: "grey", fontWeight: "500", fontSize: "12px", textTransform: "uppercase", height: "10px", maxHeight: "12px", padding: "0 20px", textAlign: "left", width: "max-content", maxWidth: "85%" }}>Hey there,</div>
                    <div className="col p-0 m-0" style={{ color: "rgb(13, 119, 253)", fontSize: "24px", fontWeight: "700", textTransform: "uppercase", height: "10px", minHeight: "35px", maxHeight: "6vh", padding: "0 20px", textAlign: "left", width: "max-content", maxWidth: "90%", whiteSpace: "nowrap", }}> <span style={{ color: "grey", fontWeight: "700" }}>I am </span>  {userAuth.user.name ? userAuth.user.name : "Your Name"}</div>
                    <div className="col p-0 mt-0" style={{ color: "grey", fontSize: "13px", fontWeight: "400", minHeight: "36px", maxHeight: "30vh", overflow: "hidden", padding: "0 20px", textAlign: "left", width: "max-content", maxWidth: "100%", lineHeight: "16px" }}> I'm {userAuth.user.profession ? userAuth.user.profession : "Your profession"}, {userAuth.user.objective ? userAuth.user.objective : "write your career objective which is to be printed in resume or CV as well as here in this line ."}</div>
                    <div className="col mt-3" style={{ width: "100%", maxWidth: "85%", display: "flex", maxHeight: "24px", gap: "20px", justifyContent: "flex-start" }}>
                        <div onClick={() => navigate("/")} className="btn btn-sm px-4" style={{ borderRadius: "20px", fontSize: "10px", background: "linear-gradient(to right, rgb(13, 110, 253), rgba(13, 109, 253, 0.367))", color: "white", border: "1px solid white", boxShadow: "0 0 3px grey" }}>Resume</div>
                        <div onClick={() => navigate("/dashboard")} className="btn btn-sm px-4" style={{ borderRadius: "20px", fontSize: "10px", background: "linear-gradient(to right, rgb(13, 110, 253), rgba(13, 109, 253, 0.367))", color: "white", border: "1px solid white", boxShadow: "0 0 3px grey" }}>Dashboard</div>
                    </div>
                    <div className="col mt-5" style={{ width: "100%", padding:"0 20px", maxWidth: "100%", display: "flex", maxHeight: "40px", gap: "15px", justifyContent: "flex-end" }}>
                            {userAuth.user.social?.length <= 1 && <h6 style={{width:"100%", height:"40px",  lineHeight:"40px",color:"grey", fontSize:"12px", marginRight:"auto", textAlign:"right"}}>ADD SOCIAL MEDIA LINKS HERE</h6> }
                            {userAuth.user.social?.map((v,i)=>{
                                return v.id !== 0 && <Social_app _key={i} key={i} parentStyle={{ width: "30px", height: "30px", borderRadius: "50%", boxShadow:"0 0 3px grey", display:"grid", placeItems:"center" }} social_app_style={{ width:"25px", height:"25px", boxShadow:"0 0 0 3px white", background: "rgba(13, 109, 253, 0.667)", borderRadius: "50%", display: "grid", placeItems: "center"}} v={v}/>
                            })}
                    </div>
                    {/* <h6 className="mt-2" style={{width:"90%", fontSize:"10px", padding:"3px", margin:"0", marginLeft:"auto", textAlign:"right", borderTop:"1px solid rgb(13, 110, 253)", color:"rgb(13, 110, 253)"}}>Connect with me</h6> */}

                </div>
                <div className="col portfolio_row_1_col_2 col-12 col-md-5 p-0 py-3 order-1 order-md-2">
                    <img src={img} style={{ width: "100%", height: "95%", objectFit: "contain", position: "absolute", zIndex: "1", left: "10%", margin: "10px auto" }} alt="" />

                </div>
            </div>
            <div className="row m-0 portfolio_row_2 justify-content-center p-2 g-4 py-4">
                <h5 className="" style={{  }}>
                   <span> ABOUT ME </span>
                    </h5>

                <div className="col col-12 col-md-5 d-flex justify-content-center justify-content-md-center" style={{ boxShadow: "0 0 3px grey", padding: "30px", borderRadius: "50%" }}>
                    {
                    userAuth.user.image?.length > 1 ? <img className="" src={userAuth.user.image[1].url} style={{ width: "40%", minWidth: "220px" }} alt="" /> 
                        :
                        <div style={{ width: "40%", minWidth: "220px", aspectRatio:"1/1", lineHeight:"220px"}}>NO IMAGE</div>
                }   
                </div>

                <div className="col col-12 col-md-5 d-flex justify-content-center justify-content-md-start" style={{ height: "100%", position:"relative" }}>
                    <span style={{width:"80px", position:"absolute", top:"7px", height:"20px", border:"1px solid rgb(13, 110, 253)", left:"40px", background:"whitesmoke"}}></span>
                    <p className="col col-12 col-md-10 mt-3 py-4" style={{ fontSize: "90%", color: "grey", fontWeight: "500", maxWidth: "90%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "2px solid rgb(13, 110, 253)", borderBottom: "2px solid rgb(13, 110, 253)", padding: "10px" }}>{userAuth.user.about}</p>
                    <span style={{width:"80px", position:"absolute", bottom:"7px", height:"20px", border:"1px solid rgb(13, 110, 253)", right:"50px", background:"whitesmoke"}}></span>

                
                </div>
            </div>

            <div className="row py-4 m-0 portfolio_row_3">
            <h5 className="" style={{  }}>
                   <span> PROJECTS </span>
                    </h5>

            {userAuth.user.project?.map((v, i) => {
                    return v.project_name !== "" && <div key={i} className="col col-12 d-flex flex-column-reverse flex-lg-row py-3 flex-wrap" style={{ alignItems: "center", justifyContent:"center", rowGap:"40px" }}>
                        <div className="col col-12 col-lg-6 p-2 py-2 m-0 d-flex flex-column col-lg-6 align-items-center" style={{ height: "max-content", minHeight: "max-content", maxHeight: "220px", justifyContent: "center", rowGap:"16px", position:"relative" }}>
                        <a href={v.project_url} className="btn btn-primary btn-sm" style={{ padding: "3px 20px", borderRadius:"20px", whiteSpace: "nowrap", position:"absolute", top:"-7px", left:"0px" }}>{v.project_name ? v.project_name : "ex : E-Commerce"}</a>
                            
                            <div className="col col-10 py-5" style={{ textAlign: "center", borderTop:"1px solid rgb(13, 110, 253)", borderBottom:"1px solid rgb(13, 110, 253)", padding: "18px 8px", fontSize: "10px", fontWeight: "500", color: "black" }}>
                                {v.project_description ? v.project_description : "Anything about your project details, what technologies you have used, how long it took etc."}
                            </div>
                            <div className="col col-12 d-flex flex-wrap justify-content-center align-items-center mt-0" style={{ fontSize: "10px", fontWeight: "600", columnGap: "10%", rowGap:"10px", position:"absolute", bottom:"-7px", right:"10px", width:"max-content", background:"white" }}>
                                <a href={v.url} style={{ padding: "8px 18px", borderRadius:"18px", border:"1px solid rgb(13, 110, 253)", borderBottom: "1px solid rgb(13, 110, 253)", color: "rgb(13, 110, 253)", textAlign: "left", whiteSpace: "nowrap", cursor:"pointer" }}>{v.project_url ? v.project_url : "ex : https://shop-now-green.vercel.app"}</a>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-6 p-2 m-0 d-flex" style={{ height: "max-content", display:"flex", justifyContent:"center" }}>
                            <div className="col col-12 d-flex p-0 m-0 p-2 d-flex justify-content-center" style={{ fontSize: "16px", fontWeight: "600", justifyContent: "center", gap: "10px", width:"max-content" }}>
                                {v?.url ?
                                    <img className="w-100" src={v?.url} style={{ maxHeight: "50vh", maxWidth:"300px", minWidth:"240px", objectFit: "contain" }} alt="" />
                                    :
                                    <img src="https://cdn.dribbble.com/users/3445491/screenshots/7368748/media/f2a515ac4e3a68a77f099dbf07537c0c.gif" style={{ width: "90%", aspectRatio: "1/.6", maxHeight: "220px", objectFit: "cover" }} alt="this is example set of image" />
                                }
                            </div>
                        </div>
                    </div>
                })}
            </div>

            <div className="row portfolio_row_4 m-0" style={{background:"whitesmoke"}}>
            <h5 className="" style={{  }}>
                   <span> SKILLS </span>
                    </h5>
            
                <div className="" style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", padding:"20px 0 80px 0" }}>
                    {userAuth.user.skill?.map((v, i) => {
                        return v.skill !== "" && <div key={i} className="col col-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-wrap gap-0 mt-1">
                            <div className="col col-12  p-0 m-0" style={{ height: `120px`, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                                <div style={{ height: "80px", width: "80px", borderRadius: "50%", background: `conic-gradient(rgb(13, 110, 253)  ${v.skill ? (v.level / 100) * 360 : 280}deg, transparent 0)`, color: "black", fontWeight: "700", lineHeight: "80px", textAlign: "left", padding: "0", fontSize: "14px", border: "2px solid white", boxShadow: "0 0 0 2px grey", display: "grid", placeItems: "center", margin: "0 auto" }}>
                                    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", display: "block", textAlign: "center", lineHeight: "40px" }}>{v.level+"%"}</span>
                                </div>
                                <span style={{ display: "block", color: 'rgb(13, 110, 253)', fontSize: "14px", fontWeight: "700", padding: "2px 6px", marginTop: "4px" }}>{v.skill}</span>
                            </div>
                        </div>
                    })}
                </div>

            </div>
            </div>
    )
};

export default Portfolio;