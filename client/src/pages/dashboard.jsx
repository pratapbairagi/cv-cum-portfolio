

import "./dashboard.css";
import {  CaretDown, CaretRight, Nut } from "react-bootstrap-icons";
import img from "./images/WhatsApp Image 2023-09-26 at 14.14.19.jpg";
import Tabs from "../components/tabs";
import { memo, useContext, useMemo, useRef } from "react"
import { UserContext } from "../App";
import {useNavigate} from "react-router-dom"
import ProfileTab from "../components/ui/profile/profileTab";
import ResumeTab from "../components/ui/resume/resumeTab";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";

const Dashboard = () => {
const navigate = useNavigate()
    const {userAuth, popupInfo, setPopupInfo, setUserAuth} = useContext(UserContext);
    const pdfRef = useRef();

    useMemo(()=>{
        async function callUser (){
            try {
                let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/loggedme`
                if(popupInfo.show === true){
                    let {data} = await axios.get(
                        url,
                        {
                            headers: { "Content-Type": "application/json" },
                            "access-control-allow-origin": `${process.env.REACT_APP_SERVER_URL}`,
                            withCredentials: true
                        }
                    );
                    if (data.success) {
                        setUserAuth({
                            user: data.user,
                            auth: data.success,
                            message: data.message
                        })
                    }
                }
            } catch (error) {
                
            }
        }
        callUser();
    },[popupInfo])

    // convert and download pdf
    const getPdfFun = async () => {
        // alert("kk")
        let refElem = pdfRef.current;
        html2canvas(refElem).then((canvas)=>{
            let imgData = canvas.toDataURL("image/png");
            let pdf = new jsPDF("p", "px", "a4", true);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = pdf.internal.pageSize.getHeight();
            let imgWidth = canvas.width;
            let imgHeight = canvas.height;

            let ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
            let imgX = (pdfWidth - imgWidth * ratio) /2;
            let imgY = 0;

            pdf.addImage(imgData, "PNG", imgX, 0, imgWidth * ratio, imgHeight * ratio);
            pdf.save("resume.pdf")
        }) 

    }

    return (
        <div className="container-fluid dasboard-container p-0" style={{ height: "100%", minHeight: "100vh", width: "100%", background: "rgb(4, 4, 64)" }}>

            <div className="row m-0" style={{ minHeight: "100vh", height: "100%", width: "100%" }}>

                <div className="col col-2 col-md-3 col-lg-2 col1 py-4 px-1 px-md-3 m-0" style={{ background: "rgb(4 4 64)", display: "flex", flexDirection: "column", position: "sticky", top: "0", border: "none" }}>

                    <div className="dashboardLogo_andname_container">
                        <Nut onClick={()=>{ 
                             navigate("/") 
                             window.location.reload()}} className="dashboardLogo"  color="whitesmoke" size="24px" />
                        <h6 className="p-0 m-0 d-none d-md-block " style={{ height: "100%", fontWeight: "600", color: "whitesmoke", lineHeight: "130%" }}>DASHBOARD</h6>
                    </div>



                    <Tabs userAuth={userAuth} />


                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "6px 12px", borderRadius: "4px", backgroundColor: "rgb(90, 90, 183)", marginTop: "10px", cursor: "pointer" }}>
                        <img src={img} style={{ width: "28px", borderRadius: "50%" }} alt="" />
                        <div className="d-none d-md-flex" style={{ display: "flex", flexDirection: "column", marginLeft: "6px" }}>
                            <p className="p-0 m-0" style={{ fontSize: "8px", color: "whitesmoke", textAlign: "left", fontWeight: "600" }}>Pratap</p>
                            <p className="p-0 m-0" style={{ fontSize: "8px", color: "rgb(224, 213, 213)" }}>Project Manager</p>

                        </div>
                        <CaretDown style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                    </div>

                </div>


                <div id="tabs_container" className="col col-10 col-md-9 col-lg-10 col2 px-1 py-0 m-0" style={{ background: "whitesmoke", position: "relative" }}>

                    {/* toggle dashboard button : start */}
                    <button
                        onClick={() => {
                            document.querySelector(".col1").classList.toggle("activeDash");
                            document.querySelector("#arrowToggle_dashboardNav").classList.toggle("activeDasboardToggle")
                            document.querySelector("#tabs_container").classList.toggle("col2")


                        }} className="d-flex d-md-none" style={{ width: "36px", height: "36px", display: "flex", justifyContent: "center", alignItems: "center", border: "none", background: "rgba(53, 53, 120, 0.605)", transform: "translateX(-100%)", zIndex: "10", position: "absolute", top: "25px", left: "10%" }} >

                        <CaretRight id="arrowToggle_dashboardNav" style={{ margin: "auto", transition: ".5s ease" }} size="24px" color="white" />
                    </button>
                    {/* toggle dashboard button : end */}

                    <div ref={pdfRef} className="row p-0 m-0 mb-4 px-3 py-2 m-0" style={{ alignContent: "flex-start", margin:"0 auto", width:"100%", aspectRatio:"0.7/1", border:"2px double red" }}>
                        <ResumeTab popupInfo={popupInfo} setPopupInfo={setPopupInfo} userAuth={userAuth} getPdfFun={getPdfFun} resumeDownloadClass="resumeDownloadClass"/>
                    </div>

                    <div className="row p-0 m-0" style={{ minHeight: "98vh", position: "relative", display: `${userAuth.user.role === "user" ? "none" : "flex"}` }}>
                        dashboard
                    </div>

                    <div className="row p-0 m-0" style={{ minHeight: "98vh" }}>
                        <ProfileTab />
                    </div>

                    {userAuth.user.role === "admin" && <div className="row p-0 m-0" style={{ minHeight: "98vh", }}>
                        <h2>Profiles</h2>
                    </div>}


                    <div className="row p-0 m-0" style={{ minHeight: "98vh" }}>
                        <h2>Contact</h2>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default memo(Dashboard);