import img from "../images/undraw_portfolio_feedback_6r17.svg"
// import me from "./images/WhatsApp Image 2023-09-26 at 14.14.19.jpg"
// import background from "./images/background_.jpg"
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import { UserContext } from "../../App";
import Social_app from "../../components/social_app/socialApp";
import axios from "axios";
import "./portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import prof from "./WhatsApp_Image_2024-02-17_at_17.11.42_8bfd0746-removebg-preview.png"
import designImg from "./ui_design.png"
import designImg2 from "./ui_design2.jpg"
import designImg3 from "./ui_design3.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useState } from "react";
import { useReducer } from "react";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Portfolio = () => {
    let { id } = useParams();


    let { userAuth, popupInfo, setPopupInfo, setUserAuth } = useContext(UserContext);

    let reducer = { selectedProjectCategory: "", projects: [], selectedProject_categories: [], uniqueCategories: [] }

    let [categoryState, dispatch] = useReducer(
        reducer = (state,
            action) => {
            switch (action.type) {
                case "INITIAL_STATE": return {
                    selectedProjectCategory: action.selectProject,
                    projects: action.project_categories,
                    selectedProject_categories: action.selectedProject_categories,
                    uniqueCategories: action.uniqueCategories
                }
                case "SELECT_PROJECT_CATEGORY": return {
                    ...state,
                    selectedProjectCategory: action.projectCategory,
                    selectedProject_categories: state.projects.filter(v => v.project_category === action.projectCategory)
                }
                default: return state;
            }
        },
    );


    const getSearchedPortfolioFun = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER_URL}/portfolio/user/${id}`
            let { data } = await axios.get(
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
                    auth: true,
                    message: ""
                });
            }
        } catch (error) {

        }
    };

    useMemo(() => {
        if (id) {
            getSearchedPortfolioFun()
        }
    }, [id]);

    let navigate = useNavigate();


    useEffect(() => {
        if (userAuth.user) {
            dispatch({
                type: "INITIAL_STATE",
                selectProject: userAuth?.user?.project?.length > 0 && userAuth?.user?.project !== "undefined" ? userAuth?.user?.project[1]?.project_category : "",
                project_categories: userAuth?.user?.project?.length > 0 && userAuth?.user?.project != "undefined" ? userAuth?.user?.project : [],
                selectedProject_categories: userAuth?.user?.project?.length > 0 && userAuth?.user?.project != "undefined" ? userAuth?.user?.project?.filter(v => v.project_category === userAuth?.user?.project[1]?.project_category) : [],
                uniqueCategories: userAuth?.user?.project?.length > 0 && userAuth?.user?.project != "undefined" ? [...new Set(userAuth.user.project.map(v => v.project_category))] : []
            })
        }
    }, [userAuth]);

    return (
        <div className=" p-0 portfolio_container py-0 px-0" style={{ width: "100%" }}>
            <div className="row h-full sm:h-full md:h-full lg:h-5/6 xl:h-5/6 d-flex flex-column flex-md-row p-0 m-0 align-items-center justify-content-md-center justify-content-lg-between ">
                <div className="lg:h-5/6 sm:h-2/4 col-12 col-md-7 col-lg-6 order-2 sm:order-2 md:order-2 lg:order-1 order-md-1 justify-content-center justify-content-md-center align-items-center d-flex flex-column pb-5 pb-md-6">
                    <div className="w-full min-w-full mt-4 pl-0 sm:pl-0 md:pl-5 lg:pl-6" >
                        <div className="bootstrap- text-center text-md-start tailwind- w-full text-red-800 mx:0 px:0 font-extrabold text-sm lg:text-2xl uppercase">Hey there,</div>
                        <div className="bootstrap- justify-content-center justify-content-md-start p-0 m-0 tailwind w-full flex gap-2 text-3xl lg:text-5xl font-extrabold text-red-800 uppercase text-nowrap text-gray-600 mt-1 lg:mt-12"> <span className=" text-3xl  lg:text-5xl font-extrabold text-nowrap text-gray-800">I AM </span>  {userAuth.user.name ? userAuth.user.name : "Your Name"}</div>
                        <div className="bootstrap- text-center text-md-start w-full text-sm md:text-base lg:text-2xl text-left text-gray-500 lowercase max-w-full lg:max-w-md lg:max-w-2xl xl:max-w-2xl mt-3 mt-md-4 line-clamp-4"> I'm {userAuth.user.profession ? userAuth.user.profession : "my profession : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae saepe obcaecati aliquid est architecto voluptatibus!"} {userAuth.user.objective ? userAuth.user.objective : "Fill your career objective to print here."}</div>

                        <div className="bootstrap- d-flex flex-column column-gap-5 row-gap-2 flex-md-row tailwind- mt-12 lg:mt-14">
                            <div onClick={() => navigate("/")} className="w-auto px-4 h-9 lg:h-11 text-base lg:text-2xl flex items-center rounded-sm justify-center font-bold bg-red-800 text-gray-200 border-1 border-red-800" >Resume</div>
                            <div onClick={() => navigate("/dashboard")} className="text-red-800 border-1 border-red-800 w-auto px-4 h-9 lg:h-11 lg:text-2xl flex items-center justify-center text-base font-semibold">Projects</div>
                        </div>
                    </div>

                    {/* <div className="col mt-5" style={{ width: "100%", padding: "0 20px", maxWidth: "100%", display: "flex", maxHeight: "40px", gap: "15px", justifyContent: "flex-end" }}>
                        {userAuth.user.social?.length <= 1 && <h6 style={{ width: "100%", height: "40px", lineHeight: "40px", color: "grey", fontSize: "10px", marginRight: "auto", textAlign: "right" }}>ADD SOCIAL MEDIA LINKS HERE</h6>}
                        {userAuth.user.social?.map((v, i) => {
                            return v.id !== 0 && <Social_app _key={i} key={i} parentStyle={{ width: "30px", height: "30px", borderRadius: "50%", boxShadow: "0 0 3px grey", display: "grid", placeItems: "center" }} social_app_style={{ width: "25px", height: "25px", boxShadow: "0 0 0 3px white", background: "rgba(13, 109, 253, 0.667)", borderRadius: "50%", display: "grid", placeItems: "center" }} v={v} />
                        })}
                    </div> */}
                    {/* <h6 className="mt-2" style={{width:"90%", fontSize:"10px", padding:"3px", margin:"0", marginLeft:"auto", textAlign:"right", borderTop:"1px solid rgb(13, 110, 253)", color:"rgb(13, 110, 253)"}}>Connect with me</h6> */}

                </div>
                <div style={{ position: "relative" }} className=" col-12 col-md-5 col-lg-5 p-0 py-0 order-1 sm:order-1 md:order-1 lg:order-2 h-80 sm:h-80 md:h-96 lg:h-5/6">
                    {/* <span style={{position:"absolute", width:"max-content", border:"1px solid grey", padding:"0 1rem", color:"grey", left:".5rem", zIndex:"2", top:"2rem", fontSize:"14px", fontWeight:"500", borderRadius:"2rem", borderBottomRightRadius:"0"}}> Skills </span>
                    <span style={{position:"absolute", width:"max-content", border:"1px solid grey", padding:"0 1rem" , color:"grey", right:".5rem", zIndex:"2", top:"2rem", fontSize:"14px", fontWeight:"500", borderRadius:"2rem", borderBottomLeftRadius:"0"}}> Projects </span>
                    <span style={{position:"absolute", width:"max-content", border:"1px solid grey", padding:"0 1rem" , color:"grey", left:".5rem", zIndex:"2", top:"49%", fontSize:"14px", fontWeight:"500", borderRadius:"2rem", borderBottomRightRadius:"0"}}> Qualification </span>
                    <span style={{position:"absolute", width:"max-content", border:"1px solid grey", padding:"0 1rem" , color:"grey", right:".5rem", zIndex:"2", top:"49%", fontSize:"14px", fontWeight:"500", borderRadius:"2rem", borderBottomLeftRadius:"0"}}> Contact </span>
                    <span style={{position:"absolute", width:"max-content", border:"1px solid grey", padding:"0 1rem", color:"grey", left:".5rem", zIndex:"2", bottom:"2rem", fontSize:"14px", fontWeight:"500", borderRadius:"2rem", borderTopRightRadius:"0"}}> Expeirence </span>
                    <span style={{position:"absolute", width:"max-content", border:"1px solid grey", padding:"0 1rem", color:"grey", right:".5rem", zIndex:"2", bottom:"2rem", fontSize:"14px", fontWeight:"500", borderRadius:"2rem", borderTopLeftRadius:"0"}}> more </span> */}
                    {/* <img src={img} style={{ width: "100%", height: "95%", objectFit: "contain", position: "absolute", zIndex: "1", margin: "10px auto" }} alt="" /> */}
                    <span className="absolute size-3/6 bg-red-800 rounded-tr-3xl rounded-bl-3xl left-0.5 top-0.5"></span>
                    <span className="absolute size-3/6 bg-red-800 bottom-0 rounded-tr-3xl right-0.5"></span>
                    {/* <span className="absolute h-2/4 aspect-square  border-2 border-gray-100 rounded-full top-1/4 left-1/4"></span> */}

                    <img src={prof} className="" style={{ width: "auto", height: "100%", objectFit: "contain", position: "relative", zIndex: "2", margin: "0 auto" }} alt="" />

                </div>
            </div>

            <div style={{ minHeight: "100dvh", columnGap: "2rem" }} className="bg-gray-100 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-content-center p-2 px-3 g-4 py-3">
                {/* <h5 className="mt-2 mb-3" style={{  }}>
                   <span> ABOUT ME </span>
                </h5> */}

                {/* <div className="col col-12 col-md-5 d-flex justify-content-center justify-content-md-center" style={{ boxShadow: "0 0 3px grey", padding: "30px", borderRadius: "50%", maxWidth:"360px" }}>
                    {
                    userAuth.user.image?.length > 1 ? <img className="" src={userAuth.user.image[1].url} style={{ width: "40%", minWidth: "220px" }} alt="" /> 
                        :
                        <div style={{ width: "40%", minWidth: "220px", aspectRatio:"1/1", lineHeight:"220px"}}>NO IMAGE</div>
                }   
                </div> */}

                {/* <div className="col col-12 col-md-5 d-flex justify-content-center justify-content-md-center" style={{ height: "100%", position:"relative" }}>
                    <span style={{width:"80px", position:"absolute", top:"7px", height:"20px", border:"1px solid rgb(13, 110, 253)", left:"40px", background:"whitesmoke"}}></span>
                    <p className="col col-12 col-md-10 mt-3 py-4" style={{ fontSize: "90%", color: "grey", fontWeight: "500", maxWidth: "90%", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "2px solid rgb(13, 110, 253)", borderBottom: "2px solid rgb(13, 110, 253)", padding: "10px" }}>{userAuth.user.about}</p>
                    <span style={{width:"80px", position:"absolute", bottom:"7px", height:"20px", border:"1px solid rgb(13, 110, 253)", right:"50px", background:"whitesmoke"}}></span>

                
                </div> */}

                <div className="bg-white col-span-1 h-full mt-3">
                    <h5 className="mt-4 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Personal</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-1.5 border-b-2 pb-4 border-dashed">

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="text-start font-normal text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">Profession</span>
                            <span className="text-end text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">{userAuth?.user?.profession}</span>
                        </li>

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="text-start font-normal text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">D.O.B</span>
                            <span className="text-end text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">{userAuth?.user?.dob}</span>
                        </li>

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="text-start font-normal text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">Residence</span>
                            <span className="text-end text-sm sm:text-sm md:text-sm lg:text-base xl:text-base" style={{ maxWidth: "60%" }}>{userAuth?.user?.city}, {userAuth?.user?.state}, {userAuth?.user?.country}</span>
                        </li>

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="text-start font-normal text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">Phone</span>
                            <span className="text-end text-sm sm:text-sm md:text-sm lg:text-base xl:text-base" style={{ maxWidth: "60%", wordBreak: "break-all" }}>{userAuth?.user?.number}</span>
                        </li>

                    </ul>

                    <h5 className="mt-5 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Languages</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-4 border-b-2 pb-5 border-dashed mt-2.5">

                        {userAuth?.user?.language?.map((v, i) => {
                            return v.language != "" && <li key={i} className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                                <span className="font-normal text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">{v.language.toUpperCase()}</span>
                                <span className="text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">{v.level}%</span>
                                <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                            </li>
                        })}

                        {/* <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Hindi</span>
                            <span>90%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Bengali</span>
                            <span>80%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li> */}
                    </ul>

                    <h5 className="mt-5 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Skills</h5>
                    <ul className="flex flex-column p-0 items-center py-4 mt-2.5  gap-y-4 border-b-2 pb-5 border-dashed">
                        {userAuth?.user?.skill?.map((v, i) => {
                            return v.skill != "" && <li key={i} className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                                <span className="font-normal text-start text-sm sm:text-sm md:text-sm lg:text-base xl:text-base" style={{ maxWidth: "75%" }}>{v.skill.toUpperCase()}</span>
                                <span className="font-semibold text-sm sm:text-sm md:text-sm lg:text-base xl:text-base" >{v.level}%</span>
                                <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                            </li>
                        })}

                        {/* <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">CSS</span>
                            <span>90%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">JavaScript</span>
                            <span>80%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">ReactJs</span>
                            <span>70%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Redux & Bootstrap</span>
                            <span>70%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Figma</span>
                            <span>50%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Git</span>
                            <span>40%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li> */}
                    </ul>

                    <h5 className="mt-5 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Other Skills</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-3.5 border-b-2 pb-5 border-dashed">

                        {userAuth?.user?.other_skill?.map((v, i) => {
                            return v.skill != "" && <li key={i} className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                                <span className="font-normal text-start text-sm sm:text-sm md:text-sm lg:text-base xl:text-base" style={{ maxWidth: "75%" }}>{v.skill}</span>
                                <span className="font-semibold text-end text-sm sm:text-sm md:text-sm lg:text-base xl:text-base">Excellent</span>
                            </li>
                        })}

                        {/* <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Communication</span>
                            <span>Excellent</span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Problem Solving</span>
                            <span>Excellent</span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Creativity</span>
                            <span>Excellent</span>
                        </li> */}

                    </ul>
                </div>
                <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2  bg-gray-100 h-full mt-md-3">
                    <h4 className="mt-5 mt-md-3 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Education & Qualification</h4>

                    <div className=" w-full flex flex-wrap px-0 items-center py-4 pb-4 justify-center">

                        {userAuth?.user?.qualification?.map((v, i) => {
                            return v.education != "" && <div key={i} className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8 border-b-2 border-dashed">
                                <div className="flex flex-wrap gap-x-3 gap-y-3 sm:gap-y-3 md:gap-y-5 items-center self-start">
                                    <h6 className="w-full font-semibold text-red-800 text-start">{v.education}</h6>
                                    <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Student </span>
                                    <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> {v.start} - {v.end}</span>
                                </div>

                                <div className="flex flex-col gap-x-1 justify-content-between gap-y-2 sm:gap-y-2 md:gap-y-4">
                                    <h6 className="w-full font-semibold text-gray-600 text-start">{v.organization}</h6>
                                    <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a ut adipisci nemo laudantium voluptatibus.</p>
                                </div>
                            </div>
                        })}

                        {/* <div className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8">
                            <div className="flex flex-wrap gap-x-3 gap-y-5 items-center self-start">
                                <h6 className="w-full font-semibold text-red-800 text-start">Bechalor Of Commerce</h6>
                                <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Student </span>
                                <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> Jan, 2016 - Jan, 2021</span>
                            </div>

                            <div className="flex flex-col gap-x-1 justify-content-between gap-y-4">
                                <h6 className="w-full font-semibold text-gray-600 text-start">School Of Open Learning (DU)</h6>
                                <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a ut adipisci nemo laudantium voluptatibus.</p>
                            </div>
                        </div> */}

                    </div>

                    <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Courses</h4>
                    <div className=" w-full flex flex-wrap items-center py-4 pb-4 justify-center">

                        {userAuth?.user?.course?.map((v, i) => {
                            return v.course != "" && <div key={i} className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8 border-b-2 border-dashed">
                                <div className="flex flex-wrap gap-x-3 gap-y-3 sm:gap-y-3 md:gap-y-5 items-center self-start">
                                    <h6 className="w-full font-semibold text-red-800 text-start">{v.course}</h6>
                                    <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Student </span>
                                    <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> {v.start} - {v.end}</span>
                                </div>

                                <div className="flex flex-col gap-x-1 justify-content-between gap-y-2 sm:gap-y-2 md:gap-y-4">
                                    <h6 className="w-full font-semibold text-gray-600 text-start">{v.organization}</h6>
                                    <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">{v.description}</p>
                                </div>
                            </div>
                        })}

                    </div>

                    <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Work Experience</h4>
                    <div className=" w-full flex flex-wrap items-center py-4 pb-4 justify-center">

                        {userAuth?.user?.experience?.map((v, i) => {
                            return v.company != "" && <div key={i} className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8 border-b-2 border-dashed">
                                <div className="flex flex-wrap gap-x-3 gap-y-3 sm:gap-y-3 md:gap-y-5 items-center self-start">
                                    <h6 className="w-full font-semibold text-red-800 text-start">{v.company.toUpperCase()}</h6>
                                    <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Employee </span>
                                    <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> {v.start} - {v.end}</span>
                                </div>

                                <div className="flex flex-col gap-x-1 justify-content-between gap-y-2 sm:gap-y-2 md:gap-y-4">
                                    <h6 className="w-full font-semibold text-gray-600 text-start">{v.designation}</h6>
                                    <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">{v.description}</p>
                                </div>
                            </div>
                        })}

                    </div>

                    <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Projects</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 items-center py-4 pb-4 justify-center gap-y-1 gap-x-2">

                        <div className="col-span-1 h-12 sm:h-12 md:h-12 lg:h-full xl:h-full bg-white ">
                            <ul className="d-flex pt-2.5 sm:pt-3 md:pt-3 lg:pt-1 px-2 px-sm-2 px-md-2 px-lg-1 flex-row flex-sm-row flex-md-row flex-lg-column justify-content-start align-items-center max-w-full overflow-x-auto gap-x-1">
                                {categoryState?.uniqueCategories.map((v, i) => {
                                    return v !== "" && <li key={i} onClick={() => dispatch({ type: "SELECT_PROJECT_CATEGORY", projectCategory: v })} className={`text-gray-700 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1 ${v == categoryState.selectedProjectCategory ? "bg-gray-100" : "bg-white"}`}>{v}</li>
                                })}
                                {/* <li className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">Frontend</li>
                                <li className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">Backend</li>
                                <li className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">Other</li> */}
                            </ul>
                        </div>

                        <div className="col-span-1 p-3 h-auto sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-2 gap-x-3">

                            {categoryState?.selectedProject_categories.map((v, i) => {
                                return <div key={i} className="w-full aspect-square bg-gray-100 relative overflow-hidden flex flex-col justify-center items-center gap-y-3">
                                    <img src={v.url} className=" absolute h-full w-full object-cover opacity-40 hover:opacity-100 cursor-pointer transition-all duration-500" alt="" />
                                    <h6 className=" z-10 text-green-600 text-sm font-bold">{v.project_name}</h6>
                                    <button className=" z-10 text-green-600 text-sm font-bold border-2 border-green-600 py-0.5 px-3.5" >DEMO</button>
                                </div>
                            })}

                            {/* <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex flex-col justify-center items-center gap-y-3">
                                <img src={designImg2} className="absolute h-full w-full object-cover opacity-40 hover:opacity-100 cursor-pointer transition-all duration-500" alt="" />
                                <h6 className=" z-10 text-green-600 text-sm font-bold">PRODUCT DETAILS</h6>
                                <button className=" z-10 text-green-600 text-sm font-bold border-2 border-green-600 py-0.5 px-3.5" >DEMO</button>
                            </div>

                            <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex flex-col justify-center items-center gap-y-3">
                                <img src={designImg3} className="absolute h-full w-full object-cover opacity-40 hover:opacity-100 cursor-pointer transition-all duration-500" alt="" />
                                <h6 className=" z-10 text-green-600 text-sm font-bold">PRODUCT DETAILS</h6>
                                <button className=" z-10 text-green-600 text-sm font-bold border-2 border-green-600 py-0.5 px-3.5" >DEMO</button>
                            </div> */}

                        </div>

                    </div>


                    {/* <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Projects</h4> */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-9 xl:grid-cols-9 items-center py-4 pb-4 justify-center gap-y-1 gap-x-2">

                        <div className="col-span-1 p-3 h-auto sm:col-span-1 md:col-span-1 lg:col-span-5 xl:col-span-5 bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-2 gap-x-3 d-flex flex-column">
                            <h5 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Leave Your Info</h5>

                            <fieldset className="flex flex-col justify-start items-start mt-3">
                                <label htmlFor="fullName" className="text-sm font-semibold text-gray-400">Full Name</label>
                                <input className="w-full h-10 bg-gray-100 mt-1 text-sm text-gray-400 px-3 py-3 outline-0" type="text" id="fullName" />
                            </fieldset>

                            <fieldset className="flex flex-col justify-start items-start mt-2">
                                <label htmlFor="fullName" className="text-sm font-semibold text-gray-400">Email</label>
                                <input className="w-full h-10 bg-gray-100 mt-1 text-sm text-gray-400 px-3 py-3 outline-0" type="text" id="fullName" />
                            </fieldset>

                            <fieldset className="flex flex-col justify-start items-start mt-2">
                                <label htmlFor="fullName" className="text-sm font-semibold text-gray-400">Subject</label>
                                <input className="w-full h-10 bg-gray-100 mt-1 text-sm text-gray-400 px-3 py-3 outline-0" type="text" id="fullName" />
                            </fieldset>

                            <fieldset className="flex flex-col justify-start items-start mt-2">
                                <label htmlFor="fullName" className="text-sm font-semibold text-gray-400">Message</label>
                                <textarea rows="8" className="w-full bg-gray-100 mt-1 text-sm text-gray-400 px-3 py-3 outline-0" type="text" id="fullName" />
                            </fieldset>

                            <button className="w-full text-base sm:text:base md:text:base lg:text-xl text-gray-400 font-extrabold border py-2.5 mt-2 hover:text-gray-600 transition-all duration-500">SEND</button>
                        </div>

                        <div className="col-span-1 p-3 h-auto min-h-full sm:col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-2 gap-x-3 d-flex flex-column">
                            <h5 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Contacts</h5>

                            <ul className="w-full bg-gray-100 h-auto d-flex px-3 py-3 flex-column align-items-center gap-y-1.5 mt-4">
                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Country</span>
                                    <span className="text-gray-500 text-sm font-bold">{userAuth?.user?.country}</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">State</span>
                                    <span className="text-gray-500 text-sm font-bold">{userAuth?.user?.state}</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Pincode</span>
                                    <span className="text-gray-500 text-sm font-bold">{userAuth?.user?.pincode}</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Address</span>
                                    <span className="text-gray-500 text-sm font-bold" style={{ maxWidth: "60%", wordBreak: "break-all" }}>{userAuth?.user?.address}</span>
                                </li>
                            </ul>

                            <ul className="w-full bg-gray-100 gap-x-1 gap-y-6 py-4 h-auto grid grid-cols-4 px-4 py-3 flex-column align-items-center gap-y-1.5 mt-2">
                                {/* <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Github</span>
                                    <span className="text-gray-500 text-sm font-bold">India</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">LinkedIn</span>
                                    <span className="text-gray-500 text-sm font-bold">Delhi</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Twitter</span>
                                    <span className="text-gray-500 text-sm font-bold">110019</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Facebook</span>
                                    <span className="text-gray-500 text-sm font-bold" style={{ maxWidth: "60%", wordBreak: "break-all" }}>RZ, Kalkaji, South Delhi</span>
                                </li> */}
                                {userAuth.user.social?.length == 0 || userAuth.user.social == undefined &&
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-400 hover:fill-gray-600 transition-all duration-500 cursor-pointer">
                                            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z">
                                            </path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-400 hover:fill-gray-600 transition-all duration-500 cursor-pointer">
                                            <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z">
                                            </path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-400 hover:fill-gray-600 transition-all duration-500 cursor-pointer">
                                            <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z">
                                            </path>
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-gray-400 hover:fill-gray-600 transition-all duration-500 cursor-pointer">
                                            <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z">
                                            </path>
                                        </svg>
                                    </>
                                }

                                {userAuth.user.social?.map((v, i) => {
                                    return v.id !== 0 && <Social_app _key={i} key={i} parentStyle_css=" aspect-video size-12" social_app_style_css="w-12 h-12 fill-gray-400 hover:fill-gray-600 transition-all duration-500" v={v} />
                                })}

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div style={{ minHeight: "100vh" }} className="py-4 px-2 m-0 portfolio_row_3 grid grid-cols-4"> */}
            {/* <h5 className="mt-4 mb-4" style={{ height:"max-content"  }}>
                   <span> PROJECTS </span>
            </h5> */}


            {/* {userAuth.user.project?.map((v, i) => {
                    return v.project_name !== "" && <div key={i} className="col col-12 d-flex flex-column-reverse flex-lg-row py-3 flex-wrap" style={{ alignItems: "center", justifyContent:"center", rowGap:"40px" }}>
                        <div className="col col-12 col-lg-6 p-2 py-2 m-0 d-flex flex-column col-lg-6 align-items-center" style={{ height: "max-content", minHeight: "max-content", maxHeight: "220px", justifyContent: "center", rowGap:"16px", position:"relative" }}>
                        <a href={v.project_url} className="btn btn-primary btn-sm" style={{ padding: "3px 20px", borderRadius:"20px", whiteSpace: "nowrap", position:"absolute", top:"-7px", left:"0px" }}>{v.project_name ? v.project_name : "ex : E-Commerce"}</a>
                            
                            <div className="col col-10 py-4" style={{ textAlign: "center", borderTop:"1px solid rgb(13, 110, 253)", borderBottom:"1px solid rgb(13, 110, 253)", padding: "18px 8px", fontSize: "10px", fontWeight: "500", color: "grey" }}>
                                {v.project_description ? v.project_description : "Anything about your project details, what technologies you have used, how long it took etc."}
                            </div>

                            <div className="col col-12 d-flex flex-wrap justify-content-center align-items-center mt-0" style={{ fontSize: "10px", fontWeight: "600", columnGap: "10%", rowGap:"10px", position:"absolute", bottom:"-7px", right:"10px", width:"max-content", background:"white" }}>
                                <a href={v.url} style={{ padding: "8px 18px", borderRadius:"18px", border:"1px solid rgb(13, 110, 253)", borderBottom: "1px solid rgb(13, 110, 253)", color: "rgb(13, 110, 253)", textAlign: "left", whiteSpace: "nowrap", cursor:"pointer" }}>{v.project_url ? v.project_url : "ex : https://shop-now-green.vercel.app"}</a>
                            </div>
                        </div>

                        <div className="col col-12 col-lg-6 p-2 m-0 d-flex" style={{ height: "max-content", display:"flex", justifyContent:"center" }}>
                            <div className="col col-12 d-flex p-0 m-0 p-2 d-flex justify-content-center" style={{ fontSize: "16px", fontWeight: "600", justifyContent: "center", gap: "10px", width:"max-content", border:"1px solid grey", minWidth:"200px" }}>
                                {v?.url ?
                                    <img className="w-100" src={v?.url} style={{ maxHeight: "50vh", maxWidth:"280px", minWidth:"220px", objectFit: "contain" }} alt="" />
                                    :
                                    <img src="https://cdn.dribbble.com/users/3445491/screenshots/7368748/media/f2a515ac4e3a68a77f099dbf07537c0c.gif" style={{ width: "90%", aspectRatio: "1/.6", maxHeight: "220px", objectFit: "cover" }} alt="this is example set of image" />
                                }
                            </div>
                        </div>
                    </div>
                })} */}
            {/* 
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >


                    {userAuth.user.project?.map((v, i) => {
                        return v.project_name !== "" && <SwiperSlide key={i} className="col col-12 d-flex flex-column-reverse flex-lg-row py-3 mt-4 flex-wrap" style={{ alignItems: "center", justifyContent: "center", rowGap: "40px" }}>
                            <div className="col col-12 col-lg-6 p-2 py-2 m-0 d-flex flex-column col-lg-6 align-items-center" style={{ height: "max-content", minHeight: "max-content", maxHeight: "220px", justifyContent: "center", rowGap: "16px", position: "relative" }}>
                                <a href={v.project_url} className="btn btn-primary btn-sm" style={{ padding: "3px 20px", borderRadius: "20px", whiteSpace: "nowrap", position: "absolute", top: "-7px", left: "10px" }}>{v.project_name ? v.project_name : "ex : E-Commerce"}</a>

                                <div className="col col-10 py-4" style={{ textAlign: "center", borderTop: "1px solid rgb(13, 110, 253)", borderBottom: "1px solid rgb(13, 110, 253)", padding: "18px 8px", fontSize: "10px", fontWeight: "500", color: "grey" }}>
                                    {v.project_description ? v.project_description : "Anything about your project details, what technologies you have used, how long it took etc."}
                                </div>

                                <div className="col col-12 d-flex flex-wrap justify-content-center align-items-center mt-0" style={{ fontSize: "10px", fontWeight: "600", columnGap: "10%", rowGap: "10px", position: "absolute", bottom: "-7px", right: "10px", width: "max-content", background: "white" }}>
                                    <a href={v.url} style={{ padding: "8px 18px", borderRadius: "18px", border: "1px solid rgb(13, 110, 253)", borderBottom: "1px solid rgb(13, 110, 253)", color: "rgb(13, 110, 253)", textAlign: "left", whiteSpace: "nowrap", cursor: "pointer" }}>{v.project_url ? v.project_url : "ex : https://shop-now-green.vercel.app"}</a>
                                </div>
                            </div>

                            <div className="col col-12 col-lg-6 p-2 m-0 d-flex" style={{ height: "max-content", display: "flex", justifyContent: "center" }}>
                                <div className="col col-12 d-flex p-0 m-0 p-2 d-flex justify-content-center" style={{ fontSize: "16px", fontWeight: "600", justifyContent: "center", gap: "10px", width: "max-content", border: "1px solid grey", minWidth: "200px" }}>
                                    {v?.url ?
                                        <img className="w-100" src={v?.url} style={{ maxHeight: "50vh", maxWidth: "280px", minWidth: "220px", objectFit: "contain" }} alt="" />
                                        :
                                        <img src="https://cdn.dribbble.com/users/3445491/screenshots/7368748/media/f2a515ac4e3a68a77f099dbf07537c0c.gif" style={{ width: "90%", aspectRatio: "1/.6", maxHeight: "220px", objectFit: "cover" }} alt="this is example set of image" />
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper> */}
            {/* </div> */}

            {/* <div className=" portfolio_row_4 py-1 px-1" style={{ background: "whitesmoke", minHeight: "100dvh", rowGap: "0" }}>
                <h5 className=" mt-4 mb-4" style={{ height: "max-content" }}>
                    <span> SKILLS </span>
                </h5>

                <div className="m-0 align-items-center justify-content-center" style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", gap: "4dvh", padding: "20px 0 80px 0" }}>
                    {userAuth.user.skill?.map((v, i) => {
                        return v.skill !== "" && <div key={i} style={{ justifyContent: "center", maxWidth: "160px" }} className="col col-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-wrap gap-0 mt-1">
                            <div className="col col-12  p-0 m-0" style={{ height: `180px`, display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", justifyContent: "flex-start", maxWidth: "100%" }}>
                                <div style={{ height: "80px", width: "80px", borderRadius: "50%", background: `conic-gradient( rgb(13, 110, 253)  ${v.skill ? (v.level / 100) * 360 : 280}deg, transparent 0)`, color: "black", fontWeight: "700", lineHeight: "80px", textAlign: "left", padding: "0", fontSize: "14px", border: "2px solid white", boxShadow: "0 0 0 2px grey", display: "grid", placeItems: "center", margin: "0 auto" }}>
                                    <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", display: "block", textAlign: "center", lineHeight: "40px" }}>{v.level + "%"}</span>
                                </div>
                                <span className="mt-3" style={{ display: "block", color: 'rgb(13, 110, 253)', fontSize: "16px", fontWeight: "700", padding: "2px 6px", marginTop: "4px" }}>{v.skill}</span>
                                <span className="mt-1" style={{ fontWeight: "500", fontSize: "12px" }}>{v.level < 26 ? "Basic" : v.level < 61 && v.level >= 26 ? "Intermediate" : v.level > 89 ? "Expert" : "Advance"}</span>
                            </div>
                        </div>
                    })}
                </div>

            </div> */}

        </div>
    )
};

export default Portfolio;