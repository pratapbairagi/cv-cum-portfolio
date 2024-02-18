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
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Portfolio = () => {
    let { id } = useParams();


    let { userAuth, popupInfo, setPopupInfo, setUserAuth } = useContext(UserContext);



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
                })
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

    console.log("user => ", userAuth.user.project)

    return (
        <div className=" p-0 portfolio_container py-0 px-0" style={{ width:"100%"}}>
            <div className="row h-full sm:h-full md:h-full lg:h-5/6 xl:h-5/6 d-flex flex-column flex-md-row p-0 m-0 align-items-center justify-content-center">
                <div className="lg:h-5/6 sm:h-2/4 col-12 col-md-7 col-lg-6 order-2 sm:order-2 md:order-2 lg:order-1 order-md-1 justify-content-center justify-content-md-center align-items-center d-flex flex-column">
                    <div className="w-full min-w-full mt-4 pl-0 sm:pl-0 md:pl-5 lg:pl-6 " >
                        <div className="bootstrap- text-center text-md-start tailwind- w-full text-red-800 mx:0 px:0 font-extrabold text-sm lg:text-2xl uppercase">Hey there,</div>
                        <div className="bootstrap- justify-content-center justify-content-md-start p-0 m-0 tailwind w-full flex gap-2 text-3xl lg:text-5xl font-extrabold text-red-800 uppercase text-nowrap text-gray-600 mt-1 lg:mt-12"> <span className=" text-3xl  lg:text-5xl font-extrabold text-nowrap text-red-800">I AM </span>  {userAuth.user.name ? userAuth.user.name : "Your Name"}</div>
                        <div className="bootstrap- text-center text-md-start w-full text-sm md:text-base lg:text-2xl text-left text-gray-500 lowercase max-w-full lg:max-w-md lg:max-w-2xl mt-3 mt-md-4"> I'm {userAuth.user.profession ? userAuth.user.profession : "my profession : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae saepe obcaecati aliquid est architecto voluptatibus!"} {userAuth.user.objective ? userAuth.user.objective : "Fill your career objective to print here."}</div>

                        <div className="bootstrap- d-flex flex-column column-gap-5 row-gap-2 flex-md-row tailwind- mt-12 lg:mt-14">
                            <div onClick={() => navigate("/")} className="w-auto px-4 h-9 lg:h-11 text-base lg:text-2xl flex items-center rounded-sm justify-center font-bold bg-red-800 text-gray-200 border-1 border-red-800" >Resume</div>
                            <div onClick={() => navigate("/dashboard")} className="text-red-800 border-1 border-red-800 w-auto px-4 h-9 lg:h-11 lg:text-2xl flex items-center justify-center text-base font-semibold">Projects</div>
                        </div>
                    </div>

                    <div className="col mt-5" style={{ width: "100%", padding: "0 20px", maxWidth: "100%", display: "flex", maxHeight: "40px", gap: "15px", justifyContent: "flex-end" }}>
                        {userAuth.user.social?.length <= 1 && <h6 style={{ width: "100%", height: "40px", lineHeight: "40px", color: "grey", fontSize: "10px", marginRight: "auto", textAlign: "right" }}>ADD SOCIAL MEDIA LINKS HERE</h6>}
                        {userAuth.user.social?.map((v, i) => {
                            return v.id !== 0 && <Social_app _key={i} key={i} parentStyle={{ width: "30px", height: "30px", borderRadius: "50%", boxShadow: "0 0 3px grey", display: "grid", placeItems: "center" }} social_app_style={{ width: "25px", height: "25px", boxShadow: "0 0 0 3px white", background: "rgba(13, 109, 253, 0.667)", borderRadius: "50%", display: "grid", placeItems: "center" }} v={v} />
                        })}
                    </div>
                    {/* <h6 className="mt-2" style={{width:"90%", fontSize:"10px", padding:"3px", margin:"0", marginLeft:"auto", textAlign:"right", borderTop:"1px solid rgb(13, 110, 253)", color:"rgb(13, 110, 253)"}}>Connect with me</h6> */}

                </div>
                <div style={{ position: "relative" }} className=" col-12 col-md-5 col-lg-5 p-0 py-0 order-1 sm:order-1 md:order-1 lg:order-2">
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

                <div className="bg-white col-span-1 h-full">
                    <h5 className="mt-4 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Personal</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-1.5 border-b-2 pb-4 border-dashed">

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Profession</span>
                            <span>Frontend Developer</span>
                        </li>

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">D.O.B</span>
                            <span>18th May, 1994</span>
                        </li>

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Residence</span>
                            <span style={{ maxWidth: "60%" }}>South Delhi</span>
                        </li>

                        <li className="flex justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Phone</span>
                            <span className="text-end" style={{maxWidth:"60%", wordBreak:"break-all"}}>+91 8287889123</span>
                        </li>

                    </ul>

                    <h5 className="mt-5 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Languages</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-3.5 border-b-2 pb-5 border-dashed">

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">English</span>
                            <span>70%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Hindi</span>
                            <span>90%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Bengali</span>
                            <span>80%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>
                    </ul>

                    <h5 className="mt-5 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Skills</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-3.5 border-b-2 pb-5 border-dashed">
                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">HTML</span>
                            <span>90%</span>
                            <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span>
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
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
                        </li>
                    </ul>

                    <h5 className="mt-5 text-gray-700 font-bold text-start w-11/12 mx-auto border-b-2 py-1.5 pb-1.5 sm:pb-1.5 md:pb-1.5 lg:pb-2.5">Other Skills</h5>
                    <ul className="flex flex-column p-0 items-center py-4 gap-y-3.5 border-b-2 pb-5 border-dashed">

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Team Player</span>
                            <span>Excellent</span>
                            {/* <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span> */}
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Communication</span>
                            <span>Excellent</span>
                            {/* <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span> */}
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Problem Solving</span>
                            <span>Excellent</span>
                            {/* <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span> */}
                        </li>

                        <li className="flex flex-wrap gap-y-1 justify-between w-11/12 text-base font-medium text-gray-600">
                            <span className="font-normal">Creativity</span>
                            <span>Excellent</span>
                            {/* <span className="w-full h-0.5 bg-yellow-500 rounded-full"></span> */}
                        </li>

                    </ul>
                </div>
                <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2  bg-gray-100 h-full">
                    <h4 className="mt-5 mt-md-3 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Education & Qualification</h4>

                    <div className=" w-full flex flex-wrap px-0 items-center py-4 pb-4 justify-center">

                        <div className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8 border-b-2 border-dashed">
                            <div className="flex flex-wrap gap-x-3 gap-y-5 items-center self-start">
                                <h6 className="w-full font-semibold text-red-800 text-start">Senior Secondary School</h6>
                                <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Student </span>
                                <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> Jan, 2016 - Jan, 2021</span>
                            </div>

                            <div className="flex flex-col gap-x-1 justify-content-between gap-y-4">
                                <h6 className="w-full font-semibold text-gray-600 text-start">Govt. Boys Sr. Secondary School</h6>
                                <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a ut adipisci nemo laudantium voluptatibus.</p>
                            </div>
                        </div>

                        <div className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8">
                            <div className="flex flex-wrap gap-x-3 gap-y-5 items-center self-start">
                                <h6 className="w-full font-semibold text-red-800 text-start">Bechalor Of Commerce</h6>
                                <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Student </span>
                                <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> Jan, 2016 - Jan, 2021</span>
                            </div>

                            <div className="flex flex-col gap-x-1 justify-content-between gap-y-4">
                                <h6 className="w-full font-semibold text-gray-600 text-start">School Of Open Learning (DU)</h6>
                                <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a ut adipisci nemo laudantium voluptatibus.</p>
                            </div>
                        </div>

                    </div>

                    <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Courses</h4>
                    <div className=" w-full flex flex-wrap items-center py-4 pb-4 justify-center">

                        <div className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8 border-b-2 border-dashed">
                            <div className="flex flex-wrap gap-x-3 gap-y-5 items-center self-start">
                                <h6 className="w-full font-semibold text-red-800 text-start">Basic Web Designing</h6>
                                <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Student </span>
                                <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> Jan, 2016 - Jan, 2021</span>
                            </div>

                            <div className="flex flex-col gap-x-1 justify-content-between gap-y-4">
                                <h6 className="w-full font-semibold text-gray-600 text-start">Anudip Organization</h6>
                                <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a ut adipisci nemo laudantium voluptatibus.</p>
                            </div>
                        </div>
                    </div>

                    <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Work Experience</h4>
                    <div className=" w-full flex flex-wrap items-center py-4 pb-4 justify-center">

                        <div className="bg-white w-full px-3.5 py-4 flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-y-8 border-b-2 border-dashed">
                            <div className="flex flex-wrap gap-x-3 gap-y-5 items-center self-start">
                                <h6 className="w-full font-semibold text-red-800 text-start">R1 RCM</h6>
                                <span className=" py-0 px-0 font-semibold text-xs text-gray-700 flex items-center">Employee </span>
                                <span className="bg-red-700 py-0 px-2.5 font-normal text-xs h-5 text-gray-100 flex items-center"> Jan, 2016 - Jan, 2021</span>
                            </div>

                            <div className="flex flex-col gap-x-1 justify-content-between gap-y-4">
                                <h6 className="w-full font-semibold text-gray-600 text-start">Associate Analyst</h6>
                                <p className="text-sm sm:text-xs md:text-sm lg:text-sm text-start text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae a ut adipisci nemo laudantium voluptatibus.</p>
                            </div>
                        </div>
                    </div>

                    <h4 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Projects</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 items-center py-4 pb-4 justify-center gap-y-1 gap-x-2">

                        <div className="col-span-1 h-12 sm:h-12 md:h-12 lg:h-full xl:h-full bg-white ">
                            <ul className="d-flex pt-2.5 sm:pt-3 md:pt-3 lg:pt-1 px-2 px-sm-2 px-md-2 px-lg-1 flex-row flex-sm-row flex-md-row flex-lg-column justify-content-start align-items-center max-w-full overflow-x-auto gap-x-1">
                                <li className="text-gray-700 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">UI Design</li>
                                <li className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">Frontend</li>
                                <li className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">Backend</li>
                                <li className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-base font-semibold w-full px-3.5 py-1.5 border-b-0 sm:border-b-0 md:border-b-0 lg:border-b whitespace-nowrap hover:bg-gray-100 hover:text-gray-700 cursor-pointer rounded-1">Other</li>
                            </ul>
                        </div>

                        <div className="col-span-1 p-3 h-auto sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-2 gap-x-3">

                            <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex flex-col justify-center items-center gap-y-3">
                                <img src={designImg} className=" absolute h-full w-full object-cover opacity-40 hover:opacity-100 cursor-pointer transition-all duration-500" alt="" />
                                <h6 className=" z-10 text-green-600 text-sm font-bold">PRODUCT DETAILS</h6>
                                <button className=" z-10 text-green-600 text-sm font-bold border-2 border-green-600 py-0.5 px-3.5" >DEMO</button>
                            </div>

                            <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex flex-col justify-center items-center gap-y-3">
                                <img src={designImg2} className="absolute h-full w-full object-cover opacity-40 hover:opacity-100 cursor-pointer transition-all duration-500" alt="" />
                                <h6 className=" z-10 text-green-600 text-sm font-bold">PRODUCT DETAILS</h6>
                                <button className=" z-10 text-green-600 text-sm font-bold border-2 border-green-600 py-0.5 px-3.5" >DEMO</button>
                            </div>

                            <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex flex-col justify-center items-center gap-y-3">
                                <img src={designImg3} className="absolute h-full w-full object-cover opacity-40 hover:opacity-100 cursor-pointer transition-all duration-500" alt="" />
                                <h6 className=" z-10 text-green-600 text-sm font-bold">PRODUCT DETAILS</h6>
                                <button className=" z-10 text-green-600 text-sm font-bold border-2 border-green-600 py-0.5 px-3.5" >DEMO</button>
                            </div>

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

                            <button className="w-full text-base text-red-800 font-extrabold border py-1.5 mt-2">SEND</button>
                        </div>

                        <div className="col-span-1 p-3 h-auto min-h-full sm:col-span-1 md:col-span-1 lg:col-span-4 xl:col-span-4 bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-y-2 gap-x-3 d-flex flex-column">
                            <h5 className="mt-5 text-gray-700 font-bold text-center w-full mx-auto border-b-2 py-1.5 pb-2.5 sm:pb-2.5 md:pb-2.5 lg:pb-3.5">Contacts</h5>
                            
                            <ul className="w-full bg-gray-100 h-auto d-flex px-3 py-3 flex-column align-items-center gap-y-1.5 mt-4">
                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Country</span>
                                    <span className="text-gray-500 text-sm font-bold">India</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">State</span>
                                    <span className="text-gray-500 text-sm font-bold">Delhi</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Pincode</span>
                                    <span className="text-gray-500 text-sm font-bold">110019</span>
                                </li>

                                <li className="w-full d-flex justify-between py-1 px-2">
                                    <span className="text-gray-500 text-sm font-semibold">Address</span>
                                    <span className="text-gray-500 text-sm font-bold" style={{maxWidth:"60%", wordBreak:"break-all"}}>RZ, Kalkaji, South Delhi</span>
                                </li>
                            </ul>

                            <ul className="w-full bg-gray-100 h-auto d-flex px-3 py-3 flex-column align-items-center gap-y-1.5 mt-2">
                                <li className="w-full d-flex justify-between py-1 px-2">
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
                                    <span className="text-gray-500 text-sm font-bold" style={{maxWidth:"60%", wordBreak:"break-all"}}>RZ, Kalkaji, South Delhi</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ minHeight: "100vh" }} className="py-4 px-2 m-0 portfolio_row_3 grid grid-cols-4">
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
            </div>

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