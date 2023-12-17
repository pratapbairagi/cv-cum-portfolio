import axios from "axios";
import AddBtnLogo from "../../../assets/addBtnLogo";
import DeleteBtnLogo from "../../../assets/deleteBtnLogo";
import EditBtnLogo from "../../../assets/editBtnLogo";
import { useNavigate } from "react-router-dom"
import { useMemo, useState } from "react";
import ResumeContentCol from "./resumeContentCol";
import ToggleBtn from "../toggleBtn/toggleBtn";
import Popup from "../../popup";




const ResumeTab = ({ userAuth, setPopupInfo, popupInfo, getPdfFun, setUserAuth }) => {
    let navigate = useNavigate()

    const deleteContentHandler = async (e) => {

        try {

            // console.log(state.heading)
            let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/resume/edit/${userAuth.user._id}`

            if (typeof e.details === "object" && typeof e.details !== "undefined") {

                let { data } = await axios.put(url, { content: e.details, editingContentName: e.content, process: "delete" }, { Headers: { "Content-Type": "application/json" } });
                if (data.success) {
                    setPopupInfo({
                        message: "data.message",
                        success: true,
                        show: true
                    });

                    window.location.reload()

                    navigate("/dashboard")
                }
            }

            if (typeof e.details === "string" && typeof e.details !== "undefined") {
                let { data } = await axios.put(url, { content: e.details, editingContentName: e.content, process: "delete" }, { Headers: { "Content-Type": "application/json" } });
                if (data.success) {
                    setPopupInfo({
                        message: data.message,
                        success: true,
                        show: true
                    });
                    navigate("/dashboard")

                }

            }

        } catch (error) {
            setPopupInfo({
                message: error.response.data.error,
                success: false,
                show: true
            });
            navigate("/dashboard")

        }
    }

    // useMemo(() => {
    //     let timeout;
    //     timeout = setTimeout(() => {
    //         if (popupInfo.show) {
    //             setPopupInfo({
    //                 ...popupInfo,
    //                 message: "",
    //                 show: false
    //             })
    //         }
    //         return clearTimeout(timeout)
    //     }, 2000)
    // }, [popupInfo]);

    // styling for colums
    let [resumeDownloadClass, setResumeDownloadClass] = useState(true)
    const activeResumeDownloadfClass_fun = () => {
        setResumeDownloadClass(false);
        return setTimeout(() => {
            // document.getElementById("toggleBtn").style.display = "flex"
            setResumeDownloadClass(true);
            // return window.location.reload()
        }, 5000);
    }


    return (
        <>
            <h4 id="resume" style={{ color: "black", fontWeight: "700", marginBottom: "6px", margin: "10px auto" }}>Resume</h4>
            <Popup />
            {/* {resumeDownloadClass === true && <div style={{ width: "100%", maxWidth: "100%", overflowX: "auto", height: "max-content", border: "1px solid red", display: "flex", gap: "8px", padding: "8px", margin: "10px auto" }}>
                <ToggleBtn clss="resume" />
                <ToggleBtn clss="objective" />
                <ToggleBtn clss="qualification" />
                <ToggleBtn clss="course" />
                <ToggleBtn clss="experience" />
                <ToggleBtn clss="project" />
                <ToggleBtn clss="skill" />
                <ToggleBtn clss="language" />
            </div>} */}

            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Objective
                    </h6>
                </div>
                <div className="col col-12 mt-0" style={{ textAlign: "left", padding: "8px", background: "rgb(228, 226, 226)", fontSize: "12px", fontWeight: "500", color: "grey", width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>

                    <span style={{ width: "calc( 100% )", display: "block", fontSize: "9px" }}>{userAuth.user.objective}</span>

                    {resumeDownloadClass === true && <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} to={`/resume/edit/${userAuth.user._id}`} heading="objective" />}

                </div>
            </div>


            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex mt-3" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Qualification
                    </h6>
                </div>
                {userAuth.user.qualification?.map((v, i) => {
                    return v.education !== "" && v.organization !== "" && <div key={i} className={`col col-12 col-lg-6 p-2 ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content" }}>
                        {/* <div className="col col-12 d-flex p-0" style={{ fontSize: "16px", fontWeight: "600", justifyContent: "space-between", gap: "10px" }}>
                        <span style={{ textAlign: "left", padding: "0 15px", background: "orangered", color: "white", borderRadius: "10px", fontSize:"8px", height:"20px", lineHeight:"20px" }}>{v.education ? v.education : "Ex : Schooling"}</span>
                        <span style={{ padding: "0 15px", background: "orangered", color: "white", borderRadius: "10px", textAlign: "left", fontSize:"8px", height:"20px", lineHeight:"20px" }}>{v.organization ? v.organization : "Ex : Shyama Prasad Mukherji (CBSE)"}</span>
                    </div> */}
                        {/* <div className="col d-flex mt-1" style={{ columnGap: "20px", borderBottom: "2px solid grey", padding: "3px 4px", alignItems: "center" }}>
                        <span style={{ color: "red", fontWeight: "700", fontSize: "10px" }}>Start : {v.start ? v.start : "ex : 2005"}</span>
                        <span style={{ color: "red", fontWeight: "700", fontSize: "10px" }}>End : {v.end ? v.end : "ex : 2016"}</span>
                    </div> */}
                        <ResumeContentCol colClass="col col-12 d-flex p-0" colStyle={{ fontSize: "16px", fontWeight: "600", justifyContent: "space-between", gap: "10px" }} childrenStyle={{ textAlign: "left", padding: "0 15px", background: "rgb(228,226,226)", color: "grey", borderRadius: "10px", fontSize: "8px", height: "20px", lineHeight: "20px" }} children1Value={`${v.education ? v.education : "Ex : Schooling"}`} children2Value={`${v.organization ? v.organization : "Ex : Shyama Prasad Mukherji (CBSE)"}`} />
                        <ResumeContentCol colClass="col d-flex mt-1" colStyle={{ columnGap: "20px", borderBottom: "2px solid grey", padding: "3px 4px", alignItems: "center" }} childrenStyle={{ color: "red", fontWeight: "700", fontSize: "10px" }} children1Value={`Start : ${v.start ? v.start : "ex : 2005"}`} children2Value={`End : ${v.end ? v.end : "ex : 2016"}`} />
                        <div className="col col-12 mt-1" style={{ textAlign: "left", padding: "8px", background: "rgb(228, 226, 226)", fontSize: "9px", fontWeight: "500", color: "grey" }}>
                            {v.description ? v.description : "ex : Anything about your education related organization!"}
                            <br />

                            {resumeDownloadClass === true && <div className="mt-1" style={{ width: "100%", marginRight: "auto", textAlign: "center", fontSize: "10px", color: "white", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "5px 0", color: "red" }}>
                                <span style={{ width: "max-content", height: "20px", letterSpacing: ".5px", lineHeight: "19px", padding: "0 15px", borderRadius: "16px", background: "red", color: "whitesmoke" }}> Result : {v.result ? v.result : "ex : 50% or 54 CGPA"} </span>
                                <DeleteBtnLogo deleteContentHandler={() => deleteContentHandler({ details: v, content: "qualification" })} style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} />
                                <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "14px" }} to={`/resume/edit/${userAuth.user._id}`} heading="qualification" defaultData={v} />
                            </div>}

                        </div>

                    </div>
                })
                }

                {resumeDownloadClass === true && <div className="col col-12 col-lg-6 p-2 resumeDownloadClass" style={{ display: "grid", placeItems: "center", margin: "auto" }}>
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="qualification" />
                </div>}

            </div>


            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex mt-3" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Course
                    </h6>
                </div>
                {
                    userAuth.user.course?.map((v, i) => {
                        return v.course !== "" && <div key={i} className={`col col-12 col-lg-6 p-2 ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content" }}>

                            <ResumeContentCol colClass="col col-12 d-flex p-0" colStyle={{ fontSize: "16px", fontWeight: "600", justifyContent: "space-between", gap: "10px" }} childrenStyle={{ textAlign: "left", padding: "0 15px", background: "rgb(228,226,226)", color: "grey", borderRadius: "10px", fontSize: "8px", height: "20px", lineHeight: "20px" }} children1Value={`${v.course ? v.course : "ex : Telly ERP"}`} children2Value={`${v.organization ? v.organization : "ex : ABC Institute"}`} />
                            <ResumeContentCol colClass="col d-flex mt-1" colStyle={{ columnGap: "20px", borderBottom: "2px solid grey", padding: "3px 4px", alignItems: "center" }} childrenStyle={{ color: "red", fontWeight: "700", fontSize: "10px" }} children1Value={`Start : ${v.start ? v.start : "ex : 2016"}`} children2Value={`End : ${v.end ? v.end : "ex : 2016"}`} />

                            <div className="col col-12 mt-1" style={{ textAlign: "left", padding: "8px", background: "rgb(228, 226, 226)", fontSize: "9px", fontWeight: "500", color: "grey" }}>
                                {v.description ? v.description : "ex : Anything about your course!"}
                                <br />

                                {resumeDownloadClass === true && <div className="mt-1" style={{ width: "100%", marginRight: "auto", textAlign: "center", fontSize: "10px", color: "white", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "5px 0", color: "red" }}>
                                    <span style={{ width: "max-content", height: "20px", letterSpacing: ".5px", lineHeight: "19px", padding: "0 15px", borderRadius: "16px", background: "red", color: "whitesmoke" }}> Result : {v.result ? v.result : "ex : 50% or 54 CGPA"} </span>
                                    <DeleteBtnLogo deleteContentHandler={() => deleteContentHandler({ details: v, content: "course" })} style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} />
                                    <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "14px" }} to={`/resume/edit/${userAuth.user._id}`} heading="course" defaultData={v} />
                                </div>}

                            </div>

                        </div>
                    })
                }

                {resumeDownloadClass === true && <div className="col col-12 col-lg-6 p-2 resumeDownloadClass" style={{ display: "grid", placeItems: "center", margin: "auto" }}>
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="course" />
                </div>}
            </div>

            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex mt-3" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Experience
                    </h6>
                </div>

                {userAuth.user.experience?.map((v, i) => {
                    return v.company !== "" && <div key={i} className={`col col-12 col-lg-6 p-2 ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content" }}>

                        <ResumeContentCol colClass="col col-12 d-flex p-0" colStyle={{ fontSize: "16px", fontWeight: "600", justifyContent: "space-between", gap: "10px" }} childrenStyle={{ textAlign: "left", padding: "0 15px", background: "rgb(228,226,226)", color: "grey", borderRadius: "10px", fontSize: "8px", height: "20px", lineHeight: "20px" }} children1Value={`${v.company ? v.company : "ex : Facebook"}`} children2Value={`${v.designation ? v.designation : "ex : Customer Care Executive"}`} />
                        <ResumeContentCol colClass="col d-flex mt-1" colStyle={{ columnGap: "20px", borderBottom: "2px solid grey", padding: "3px 4px", alignItems: "center" }} childrenStyle={{ color: "red", fontWeight: "700", fontSize: "10px" }} children1Value={`Start : ${v.start ? v.start : "ex : 2016"}`} children2Value={`End : ${v.end ? v.end : "ex : 2016"}`} />

                        <div className="col col-12 mt-1" style={{ textAlign: "left", padding: "8px", background: "rgb(228, 226, 226)", fontSize: "9px", fontWeight: "500", color: "grey" }}>
                            {v.description ? v.description : "Anything about your past job or it's experience."}
                            <br />
                            {resumeDownloadClass === true && <div className="mt-1" style={{ width: "100%", marginRight: "auto", textAlign: "center", fontSize: "10px", color: "white", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "5px 0", color: "red" }}>
                                <span style={{ width: "max-content", height: "20px", letterSpacing: ".5px", lineHeight: "19px", padding: "0 15px", borderRadius: "16px", background: "red", color: "whitesmoke" }}> Salary : {v.salary ? v.salary : "ex : 30000"} </span>
                                <DeleteBtnLogo deleteContentHandler={() => deleteContentHandler({ details: v, content: "experience" })} style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} />
                                <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "14px" }} to={`/resume/edit/${userAuth.user._id}`} heading="experience" defaultData={v} />
                            </div>}
                        </div>
                    </div>
                })}

                {resumeDownloadClass === true && <div className="col col-12 col-lg-6 p-2 resumeDownloadClass" style={{ margin: "auto", display: "grid", placeItems: "center" }}>
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="experience" />
                </div>}
            </div>

            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex mt-3" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Project
                    </h6>
                </div>
                {userAuth.user.project?.map((v, i) => {
                    return v.project_name !== "" && <div key={i} className="col col-12 d-flex flex-column-reverse flex-lg-row mt-2 flex-wrap" style={{ alignItems: "center" }}>
                        <div className={`col col-12 col-lg-6 p-2 py-2 m-0 d-flex flex-column ${resumeDownloadClass === false ? "col-lg-12" : "col-lg-6"}`} style={{ height: "max-content", minHeight: "max-content", maxHeight: "220px", justifyContent: "center" }}>
                            <div className="col col-12" style={{ textAlign: "center", padding: "8px", fontSize: "8px", fontWeight: "500", color: "grey" }}>
                                {v.project_description ? v.project_description : "Anything about your project details, what technologies you have used, how long it took etc."}
                            </div>
                            <div className="col col-12 d-flex flex-wrap justify-content-center align-items-center mt-2" style={{ fontSize: "10px", fontWeight: "600", columnGap: "10%" }}>
                                <span style={{ padding: "3px 10px", borderBottom: "1px solid orangered", color: "red", whiteSpace: "nowrap" }}>{v.project_name ? v.project_name : "ex : E-Commerce"}</span>
                                <span style={{ padding: "3px 10px", borderBottom: "1px solid orangered", color: "red", textAlign: "left", whiteSpace: "nowrap" }}>{v.project_url ? v.project_url : "ex : https://shop-now-green.vercel.app"}</span>
                            </div>
                        </div>

                        <div className={`col col-12 col-lg-6 p-2 m-0 ${resumeDownloadClass === false ? "d-none" : "d-flex"}`} style={{ height: "max-content", border: "1px solid red" }}>
                            <div className="col col-12 d-flex p-0 m-0" style={{ fontSize: "16px", fontWeight: "600", justifyContent: "space-between", gap: "10px" }}>
                                {v.url ?
                                    <img src={v.url} style={{ width: "100%", aspectRatio: "1/.6", maxHeight: "220px", objectFit: "cover" }} alt="" />
                                    :
                                    <img src="https://cdn.dribbble.com/users/3445491/screenshots/7368748/media/f2a515ac4e3a68a77f099dbf07537c0c.gif" style={{ width: "100%", aspectRatio: "1/.6", maxHeight: "220px", objectFit: "cover" }} alt="this is example set of image" />
                                }
                            </div>
                        </div>
                        {resumeDownloadClass === true && <div className="col order-3" style={{ width: "100%", marginRight: "auto", textAlign: "center", fontSize: "16px", display: "flex", justifyContent: "flex-end", columnGap: "12px", alignItems: "center", padding: "5px", color: "red" }}>
                            <DeleteBtnLogo deleteContentHandler={() => deleteContentHandler({ details: v, content: "project" })} style={{ width: "20px", stroke: "red", cursor: "pointer" }} />
                            <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer" }} to={`/resume/edit/${userAuth.user._id}`} heading="project" defaultData={v} />
                        </div>}
                    </div>
                })}

                {resumeDownloadClass === true && <div className="col col-12 d-flex flex-column-reverse flex-lg-row resumeDownloadClass" style={{ justifyContent: "center", alignItems: "center", minHeight: "140px" }}>
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="project" />
                </div>}
            </div>

            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex mb-3" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Skill
                    </h6>
                </div>
                {userAuth.user.skill?.map((v, i) => {
                    return v.skill !== "" && <div key={i} className="col col-12 d-flex flex-wrap p-0">
                        <div className="col col-8 px-4 m-0 py-2" style={{ height: "50px", display: "flex", alignItems: "center" }}>
                            <div style={{ height: "22px", width: "90%", background: `linear-gradient(to right, green ${v.skill && v.level + "%"}, white 0)`, color: "black", fontWeight: "700", lineHeight: "22px", textAlign: "left", padding: "0 20px", fontSize: "10px", borderRadius: "20px", boxShadow: "0 0 2px grey" }}>{v.skill ? v.skill : "HTML"}</div>
                        </div>
                        <div className="col col-4 py-2" style={{ color: "orangered", fontSize: "10px", fontWeight: "600", justifyContent: "center", height: "50px", display: "flex", alignItems: "center" }}>
                            {v.skill ? v.level <= 33 ? "Beginner" : v.level >= 66 ? "Expert" : "Intermediate" : "Intermediate"}
                        </div>
                        {resumeDownloadClass === true && <div className="col mt-1" style={{ width: "100%", marginRight: "auto", textAlign: "center", fontSize: "16px", display: "flex", justifyContent: "flex-end", columnGap: "12px", alignItems: "center", padding: "5px", color: "red" }}>
                            <DeleteBtnLogo deleteContentHandler={() => deleteContentHandler({ details: v, content: "skill" })} style={{ width: "20px", stroke: "red", cursor: "pointer" }} />
                            <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer" }} to={`/resume/edit/${userAuth.user._id}`} defaultData={v} heading="skill" />
                        </div>}
                    </div>
                })}


                {resumeDownloadClass === true && <div className="col col-12 d-flex resumeDownloadClass" style={{ minHeight: "100px", justifyContent: "center", alignItems: "center" }}>
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="skill" />
                </div>}
            </div>

            <div className="p-0" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col col-12 p-0 d-flex mt-3" style={{ borderBottom: "2px solid red" }}>
                    <h6 style={{ width: "max-content", padding: "4px 16px 4px 16px", background: "rgb(214, 12, 12)", color: "white", margin: "0", borderTopLeftRadius: "8px", borderTopRightRadius: "8px", fontSize: "10px" }}>
                        Language
                    </h6>
                </div>
                <div className="py-2" style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
                    {userAuth.user.language?.map((v, i) => {
                        return v.language !== "" && <div key={i} className="col col-12 col-md-6 col-lg-4 col-xl-3 d-flex flex-wrap gap-0 mt-1">
                            <div className="col col-7  px-4 py-2 m-0" style={{ height: `${resumeDownloadClass === true ? "120px" : "30px"}`, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center" }}>
                                {resumeDownloadClass === true && <div style={{ height: "70px", width: "70px", borderRadius: "50%", background: `conic-gradient(green  ${v.language ? (v.level / 100) * 360 : 280}deg, transparent 0)`, color: "black", fontWeight: "700", lineHeight: "80px", textAlign: "left", padding: "0", fontSize: "14px", border: "2px solid white", boxShadow: "0 0 0 2px grey", display: "grid", placeItems: "center", margin: "0 auto" }}>
                                    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", display: "block", textAlign: "center", lineHeight: "40px" }}>{v.language ? v.level : "80%"}</span>
                                </div>}
                                <span style={{ display: "block", color: 'green', fontSize: "10px", fontWeight: "700", padding: "2px 6px", marginTop: "4px" }}>{v.language}</span>
                            </div>
                            <div className="col col-5 " style={{ background: "white", color: "orangered", fontSize: "10px", fontWeight: "600", justifyContent: "center", height: `${resumeDownloadClass === true ? "120px" : "30px"}`, display: "flex", alignItems: "center" }}>
                                {v.language ? v.level <= 33 ? "Beginner" : v.level >= 66 ? "Expert" : "Intermediate" : "Intermediate"}
                            </div>
                            {resumeDownloadClass === true && <div className="col" style={{ width: "100%", marginRight: "auto", textAlign: "center", fontSize: "16px", display: "flex", justifyContent: "flex-end", columnGap: "12px", alignItems: "center", padding: "5px", color: "red" }}>
                                <DeleteBtnLogo deleteContentHandler={() => deleteContentHandler({ details: v, content: "language" })} style={{ width: "20px", stroke: "red", cursor: "pointer" }} />
                                <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer" }} to={`/resume/edit/${userAuth.user._id}`} defaultData={v} heading="language" />
                            </div>}
                            {/* i 1756, 2nd floor left side, shiv mandir, ariston hospital,chhoti park */}
                        </div>
                    })}
                </div>

                {resumeDownloadClass === true && <div className="col col-12 d-flex mb-md-0 resumeDownloadClass" style={{ minHeight: "100px", justifyContent: "center", alignItems: "center" }}>
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="language" />
                </div>}
            </div>

            {/* {resumeDownloadClass === true && <button onClick={async () => {
                await activeResumeDownloadfClass_fun();
                return await getPdfFun()
            }} className="btn btn-primary mb-5">GET PDF</button>} */}

        </>
    )
};
export default ResumeTab;