import axios from "axios";

import { useNavigate } from "react-router-dom"
import { useMemo, useState } from "react";
import ToggleBtn from "../ui/toggleBtn/toggleBtn";
import EditBtnLogo from "../../assets/editBtnLogo";
import AddBtnLogo from "../../assets/addBtnLogo";
import ResumeContentCol from "../ui/resume/resumeContentCol";
import DeleteBtnLogo from "../../assets/deleteBtnLogo";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CheckCircleFill, EnvelopeAtFill, House, TelephoneFill, Whatsapp } from "react-bootstrap-icons";
import "./resumeDownload.css"




const ResumeDownload = () => {
    let pdfRef = useRef()
    const { userAuth, popupInfo, setPopupInfo } = useContext(UserContext);

    useMemo(() => {
        let timeout;
        timeout = setTimeout(() => {
            if (popupInfo.show) {
                setPopupInfo({
                    ...popupInfo,
                    message: "",
                    show: false
                })
            }
            return clearTimeout(timeout)
        }, 2000)
    }, [popupInfo]);

    // styling for colums
    let [resumeDownloadClass, setResumeDownloadClass] = useState(true)
    const activeResumeDownloadfClass_fun = () => {
        setResumeDownloadClass(false);
        return setTimeout(() => {
            setResumeDownloadClass(true);
            return window.location.reload()
        }, 5000);
    };


    // convert and download pdf
    const getPdfFun = async () => {
        let refElem = pdfRef.current;
        refElem.style.width = "595px"
        refElem.style.height = "842px"

        html2canvas(refElem).then((canvas) => {
            let imgData = canvas.toDataURL("image/png");
            let pdf = new jsPDF("p", "px", "a4", true);
            let pdfWidth = pdf.internal.pageSize.getWidth();
            let pdfHeight = pdf.internal.pageSize.getHeight();
            let imgWidth = canvas.width;
            let imgHeight = canvas.height;

            let ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            let imgX = (pdfWidth - imgWidth * ratio) / 2;
            let imgY = 0;

            pdf.addImage(imgData, "PNG", imgX, 0, imgWidth * ratio, imgHeight * ratio);
            pdf.save("resume.pdf")
        });
    };

    // const getPdfFun = async (e) => {
    //     // e.preventDefault();

    //     let refElem = pdfRef.current;
    //     // refElem.style.width = "595px";
    //     refElem.style.width = "395px"; // 70.665%
    //     refElem.style.height = "842px";
      
    //     // Create a new jsPDF instance
    //     let pdf = new jsPDF("p", "px", "a4", true);
      
    //     // Get the content height of the element
    //     let contentHeight = refElem.scrollHeight;
      
    //     // Set the page height
    //     let pageHeight = pdf.internal.pageSize.getHeight();

    //     console.log("contentHeight => ", contentHeight);
    //     console.log("pageHeight => ", pageHeight);
      
    //     // Calculate the number of pages needed
    //     let totalPages = Math.ceil(contentHeight / pageHeight);
      
    //     // Initialize current height
    //     let currentPosition = 0;
      
    //     // Loop through each page
    //     for (let i = 0; i < totalPages; i++) {


    //       // Capture the content container using html2canvas
    //       const canvas = await html2canvas(refElem, {
    //         y: currentPosition,
    //         windowHeight: pageHeight
    //       });
      
    //       // Convert the canvas to an image data URL
    //       let imgData = canvas.toDataURL("image/png");

    //        // Add padding to the bottom of the first page
    // if (i === 0) {
    //     currentPosition += 20; // Add padding
    //   }
      
    //       // Add padding to the top of the last page
    // if (i === totalPages - 1) {
    //     pdf.addPage();
    //     pdf.text(20, 20, 'Padding for top of last page');
    //   }
      
    //       // Add the captured image to the PDF page
    //       pdf.addImage(imgData, "PNG", 0, 0);
      
    //       // Move to the next position
    //       currentPosition += pageHeight ;
    //     }
      
    //     // Save the PDF document
    //     pdf.save("resume.pdf");
    //   };

      

    


    return (
        <div className="container" style={{ width: `100%`, position:"relative", margin:"0 auto", padding:"0"}}>
               <h6 style={{width:"100%", fontSize:"12px",color:"rgb(32, 30, 30)", margin:"10px auto"}}>HIDE SECTION IN RESUME PDF</h6>
             {resumeDownloadClass === true && <div className="justify-content-start justify-content-md-center px-2" style={{ width: "100%", overflowX: "auto", height: "max-content", display: "flex",  justifyContent:"center", gap: "10px", padding: "8px 0", margin: "10px auto", marginTop:"0" }}>
                <ToggleBtn clss="top_details" />
                <ToggleBtn clss="objective" />
                <ToggleBtn clss="experience" />
                <ToggleBtn clss="qualification" />
                <ToggleBtn clss="project" />
                <ToggleBtn clss="skill" />
                <ToggleBtn clss="course" />
                <ToggleBtn clss="personal" />
            </div>}


        <div className="resumeDownload_area_printing_red_mark" ref={pdfRef} style={{ width: `100%`, boxShadow:"0 0 2px red", overflow:"visible", padding:"44px 20px 14px 16px", margin:"auto" }}>


            <div className="p-0" id="top_details" style={{ display: "flex", flexWrap: "wrap" }}>
                <div  className="col col-12 p-0 d-flex flex-wrap">
                    
                    <div className="col col-12 px-0" style={{ display: "flex",  height:"13px", justifyContent: "flex-end" }}  >
                        <span className="col col-5" style={{ fontSize: "65%", fontWeight: "700", color: "black", textAlign: "left", textTransform:"capitalize" }}>{userAuth.user.name }</span>
                        <span className="col col-7" style={{ fontSize: "58%", height:"20px", fontWeight: "500", color: "black", textAlign: "right", display:"flex", flexDirection:"row", alignItems:"flex-center", justifyContent:"flex-end", columnGap:"10px" }}>
                        <span style={{maxWidth:"90%", wordBreak:"break-word", height:"100%", lineHeight:"13px", display:"block"}}>{userAuth.user.email }</span>
                            <EnvelopeAtFill viewBox="-2 -2 20 20" style={{padding:"0 2px 2px 0", aspectRatio:"1/1", width:"15px", height:"15px"}}/>
                        </span>
                    </div>
                    <div className="col col-12 px-0" style={{ display: "flex", height:"13px", justifyContent: "flex-end" }}  >
                        <span className="col col-7" style={{ fontSize: "58%", fontWeight: "500", color: "grey", textAlign: "left" }}>{userAuth.user.profession}</span>
                        <span className="col col-5" style={{ fontSize: "58%", height:"20px", fontWeight: "500", color: "black", textAlign: "right", display:"flex", flexDirection:"row", alignItems:"flex-center", justifyContent:"flex-end", columnGap:"10px" }}>
                        <span style={{maxWidth:"90%", wordBreak:"break-word", height:"100%", lineHeight:"13px", display:"block"}}> +91 {userAuth.user.number ? userAuth.user.number : "Phone Number"} </span>
                            <TelephoneFill viewBox="-2 -2 20 20" style={{padding:"0 2px 2px 0", aspectRatio:"1/1", width:"15px", height:"15px"}}/>
                            
                        </span>
                    </div>

                    <div className="col col-12 px-0" style={{ display: "flex", justifyContent: "flex-end",  height:"13px", }}  >
                        <span className="col col-4" style={{ fontSize: "58%", fontWeight: "500", color: "grey", textAlign: "left" }}></span>
                        <span className="col col-8 p-0" style={{ fontSize: "58%", height:"20px", fontWeight: "500", color: "black", textAlign: "right", display:"flex", flexDirection:"row", alignItems:"flex-center", justifyContent:"flex-end", columnGap:"10px" }}>
                           <span style={{maxWidth:"90%", wordBreak:"break-word", height:"100%", lineHeight:"13px", display:"block"}}>  {userAuth.user.address}, {userAuth.user.city}, {userAuth.user.state} - {userAuth.user.pincode}. </span>
                            <House viewBox="-2 -2 20 20" style={{padding:"0 2px 2px 0", aspectRatio:"1/1", width:"15px", height:"15px"}}/>
                        </span>
                    </div>


                </div>
            </div>
                <div id="objective" className="col col-10 pb-2" style={{ textAlign: "left", background: "transparent", color: "rgb(34, 31, 31)", display: "flex", flexDirection: "row", flexWrap: "wrap", borderTop: "1px solid grey", borderBottom: "1px solid grey", margin: "15px auto", marginTop:"20px" }}>

                    <span className="p-0" style={{ width: "100%", display: "block", fontSize: "55%", fontWeight: "400" }}>{userAuth.user.objective}</span>
                </div>


            <div id="experience" className="p-0 mt-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col col-12 p-0 d-flex mt-2">
            <h6 className=" pl-2.5 pb-1" style={{ width: "100%", height:"1rem", borderBottom:"1px solid grey", color: "orange", textAlign:"left", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "70%", fontFamily:"cursive", display:"flex", alignItems:"center" }}>  
                    <CheckCircleFill className="p-0 mr-3"/>
                    <span className="relative m-0 pb-2.5">Qualification</span> 
                    </h6>
                </div>

                {userAuth.user.experience?.map((v, i) => {
                    return v.company !== "" && <div key={i} className={`col col-12 col-lg-6 p-0 px-2 ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content" }}>

                        <ResumeContentCol index={i} colClass="col col-12 d-flex p-0" colStyle={{ fontSize: "16px", fontWeight: "600", justifyContent: "space-between", gap: "10px" }} childrenStyle={{ textAlign: "left", padding: "0 15px", background: "transparent", color: "black", borderRadius: "10px", fontSize: "50%", height: "20px", lineHeight: "20px" }} children1Value={`${v.company ? v.company : "ex : Facebook"}`} children2Value={`${v.designation ? v.designation : "ex : Customer Care Executive"}`} />

                        <div className="col col-12 mt-1 px-3" style={{ textAlign: "left", background: "transparent", fontSize: "55%", fontWeight: "400", color: "rgb(34, 31, 31)" }}>
                            {v.description ? v.description : "Anything about your past job or it's experience."}
                        </div>
                            <ResumeContentCol index={""} colClass="col d-flex px-3 mt-1.5" colStyle={{ columnGap: "20px", alignItems: "center" }} childrenStyle={{ color: "grey", paddingBottom:"4px", fontWeight: "500", fontSize: "55%", borderBottom:"1px solid grey" }} children1Value={`Start : ${v.start ? v.start : "ex : 2016"}`} children2Value={`End : ${v.end ? v.end : "ex : 2016"}`} />
                    </div>
                })}

            </div>


            <div id="qualification" className="p-0 mt-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col col-12 p-0 d-flex mt-2">
            <h6 className=" pl-2.5 pb-1" style={{ width: "100%", height:"1rem", borderBottom:"1px solid grey", color: "orange", textAlign:"left", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "70%", fontFamily:"cursive", display:"flex", alignItems:"center" }}>
                    <CheckCircleFill className="p-0 mr-3"/>
                    <span className="relative m-0 pb-2.5">Qualification</span> 
                    </h6>
                </div>
                {userAuth.user.qualification?.map((v, i) => {
                    return v.education !== "" && v.organization !== "" && <div key={i} className={`col col-12 col-lg-6 p-0 px-2 mt-2 ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content" }}>
                        <ResumeContentCol index={i} colClass="col col-12 d-flex p-0" colStyle={{ fontSize: "110%", fontWeight: "600", justifyContent: "space-between", gap: "10px" }} childrenStyle={{ textAlign: "left", padding: "0 15px", background: "transparent", color: "black", borderRadius: "10px", fontSize: "50%", height: "20px", lineHeight: "20px" }} children1Value={`${v.education ? v.education : "Ex : Schooling"}`} children2Value={`${v.organization ? v.organization : "Ex : Shyama Prasad Mukherji (CBSE)"}`} />
                        <div className="col col-12 mt-1 px-3" style={{ textAlign: "left", background: "transparent", fontSize: "55%", fontWeight: "400", color: "rgb(34, 31, 31)" }}>
                            {v.description ? v.description : "ex : Anything about your education related organization!"}

                        </div>
                            <ResumeContentCol  index={""} colClass="col d-flex px-3 mt-1.5" colStyle={{ columnGap: "20px", alignItems: "center" }} childrenStyle={{ color: "grey", paddingBottom:"4px", fontWeight: "500", fontSize: "55%", borderBottom:"1px solid grey" }} children1Value={`Start : ${v.start ? v.start : "ex : 2005"}`} children2Value={`End : ${v.end ? v.end : "ex : 2016"}`} />

                    </div>
                })
                }

            </div>


            <div id="project" className="p-0 mt-3" style={{ display: "flex", flexWrap: "wrap", rowGap:"0" }}>
            <div className="col col-12 p-0 d-flex mt-2">
                    <h6 className=" pl-2.5 pb-1" style={{ width: "100%", height:"1rem", borderBottom:"1px solid grey", color: "orange", textAlign:"left", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "70%", fontFamily:"cursive", display:"flex", alignItems:"center" }}>
                    <CheckCircleFill className=" p-0 mr-3 relative" />
                      <span className="relative m-0 pb-2.5">Project</span>  
                    </h6>
                </div>
                {userAuth.user.project?.map((v, i) => {
                    return v.project_name !== "" && <div key={i} className="col col-12 d-flex flex-row flex-lg-row mt-0 flex-wrap px-1 pl-3" style={{ alignItems: "center", justifyContent:"start", columnGap:"6px" }}>
                        <div className={` p-2 py-1 m-0 d-flex flex-column ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content", width:"100%", minHeight: "max-content", maxHeight: "220px", justifyContent: "flex-start" }}>
                            <div className="col col-12 d-flex flex-wrap justify-content-between align-items-center" style={{ fontSize: "60%", fontWeight: "600", columnGap: "10%", position:"relative" }}>
                                <span style={{ padding: "3px 10px", color: "rgb(34, 31, 31)", whiteSpace: "nowrap" }}>{v.project_name ? v.project_name : "ex : E-Commerce"}</span>
                                <span style={{ padding: "3px 10px", color: "rgb(34, 31, 31)", textAlign: "left", whiteSpace: "wrap" }}>{v.project_url ? v.project_url : "ex : https://shop-now-green.vercel.app"}</span>
                            </div>
                            <div className="col col-12 m-0" style={{ textAlign: "left", padding:"0 11px", fontSize: "55%", fontWeight: "400", color: "rgb(34, 31, 31)" }}>
                               {v.project_description ? v.project_description : "Anything about your project details, what technologies you have used, how long it took etc."}
                            </div>
                        </div>

                    </div>
                })}

            </div>


            
            <div id="skill" className="p-0 mt-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col col-12 p-0 d-flex mt-1">
            <h6 className=" pl-2.5 pb-1" style={{ width: "100%", height:"1rem", borderBottom:"1px solid grey", color: "orange", textAlign:"left", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "70%", fontFamily:"cursive", display:"flex", alignItems:"center" }}>
                    
                    <CheckCircleFill className=" p-0 mr-3 relative" />
                        <span className="m-0 pb-2.5">Skill</span>
                    </h6>
                </div>
                {userAuth.user.skill?.map((v, i) => {
                    return v.skill !== "" && <div key={i} className="col col-12 d-flex flex-wrap p-0 gap-0 g-0" style={{gap:"0"}}>
                        <div className="col col-9 px-1 m-0 py-0 m-0" style={{ height: "16px", display: "flex", alignItems: "center" }}>
                            <div style={{ height: "16px", width: "90%", color: "rgb(34, 31, 31)", fontWeight: "400", lineHeight: "16px", textAlign: "left", padding: "0 20px", fontSize: "50%"}}> {i+" ."} {v.skill ? v.skill : "HTML"}</div>
                        </div>
                      
                    </div>
                })}
            </div>


            <div id="course" className="p-0 mt-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col col-12 p-0 d-flex mt-1">
            <h6 className=" pl-2.5 pb-1" style={{ width: "100%", height:"1rem", color: "orange", textAlign:"left", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "70%", fontFamily:"cursive", display:"flex", alignItems:"center" }}>
                        <CheckCircleFill className="p-0 mr-3"/>
                        <span className="m-0 pb-2.5">Course</span>
                    </h6>
                </div>
                {
                    userAuth.user.course?.map((v, i) => {
                        return v.course !== "" && <div key={i} className={`col col-12 col-lg-6 p-0 px-2 ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content" }}>

                            <ResumeContentCol index={i} colClass="col col-12 d-flex p-0" colStyle={{ fontSize: "110%", fontWeight: "600", justifyContent: "space-between", gap: "10px" }} childrenStyle={{ textAlign: "left", padding: "0 15px", background: "transparent", color: "black", borderRadius: "10px", fontSize: "50%", height: "20px", lineHeight: "20px" }} children1Value={`${v.course ? v.course : "ex : Telly ERP"}`} children2Value={`${v.organization ? v.organization : "ex : ABC Institute"}`} />

                            <div className="col col-12 mt-2 px-3" style={{ textAlign: "left", background: "transparent", fontSize: "55%", fontWeight: "400", color: "rgb(34, 31, 31)" }}>
                                {v.description ? v.description : "ex : Anything about your course!"}

                            </div>
                                <ResumeContentCol index={""} colClass="col d-flex px-3 mt-1.5" colStyle={{ columnGap: "20px", paddingBottom:"4px", alignItems: "center" }} childrenStyle={{ color: "grey", fontWeight: "500", fontSize: "55%", borderBottom:"1px solid grey" }} children1Value={`Start : ${v.start ? v.start : "ex : 2016"}`} children2Value={`End : ${v.end ? v.end : "ex : 2016"}`} />
                        </div>
                    })
                }
            </div>


            <div id="personal" className="p-0 mt-3" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col col-12 p-0 d-flex mt-1">
            <h6 className=" pl-2.5 pb-1" style={{ width: "100%", height:"1rem", borderBottom:"1px solid grey", color: "orange", textAlign:"left", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "70%", fontFamily:"cursive", display:"flex", alignItems:"center" }}>
                    
                    <CheckCircleFill className="p-0 mr-3"/>
                    <span className="m-0 pb-2.5">Personal details</span>
                    </h6>
                </div>
                <div className="py-2 px-2" style={{ flexDirection: "row", width:"100%", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems:"center" }}>
                
                <div className="col col-3 m-0 mt-1" style={{ fontSize:"55%", fontWeight:"600", color:"black", lineHeight:"20px", height:"20px", textAlign:"left", paddingLeft:"3%"}}>Date Of Birth</div>
                <div className="col col-9 p-0 m-0 mt-1" style={{ fontSize:"55%", fontWeight:"600", color:"rgb(34, 31, 31)", lineHeight:"20px", height:"20px", textAlign:"left"}}>{userAuth.user.dob}</div>
                   
                <div className="col col-3 m-0 mt-1" style={{ fontSize:"55%", fontWeight:"600", color:"black", lineHeight:"20px", height:"20px",  paddingLeft:"3%", textAlign:"left"}}>Status</div>
                <div className="col col-9 p-0 m-0 mt-1" style={{ fontSize:"55%", fontWeight:"600", color:"rgb(34, 31, 31)", lineHeight:"20px", height:"20px", textAlign:"left"}}>Unmarried</div>
                   

                    <div className="col col-3 m-0 mt-1" style={{ fontSize:"55%", fontWeight:"600", color:"black", lineHeight:"20px", height:"20px", textAlign:"left",  paddingLeft:"3%",alignSelf:"flex-start"}}>Language</div>
                    <div className="col col-9 d-flex flex-wrap gap-0 mt-1 flex-column" style={{justifyContent:"flex-start"}}>
                    {userAuth.user.language?.map((v, i) => {
                        return v.language !== "" && <div className="d-flex gap-0" style={{ width:"max-content", whiteSpace:"nowrap"}}>
                            <div className="px-0 py-2 m-0" style={{ height: `20px`, minWidth:"60px", textAlign:"left",  display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center"}}>
                              
                                <span style={{ display: "block", color: 'rgb(34, 31, 31)', fontSize: "50%", fontWeight: "600", padding: "2px 0", width:"100%" }}>{v.language}</span>
                            </div>
                        
                        </div>
                    })}
                    </div>
                </div>

            </div>

        </div>
       <button onClick={async () => {
                await activeResumeDownloadfClass_fun();
                return await getPdfFun()
            }} className="btn btn-primary btn-sm px-3" style={{position:"fixed", bottom:"12vh", transform:"translate(-50%, -50%)"}}>GET PDF</button>
        </div>
    )
};
export default ResumeDownload;