import { UserContext } from "../../../App";
import EditBtnLogo from "../../../assets/editBtnLogo";
import ProfileCard from "./profileCard";
import { memo, useContext, useRef } from "react";
import prof from "../../../pages/images/WhatsApp Image 2023-09-26 at 14.14.19.jpg"
import { Upload } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import DeleteBtnLogo from "../../../assets/deleteBtnLogo";
import AddBtnLogo from "../../../assets/addBtnLogo";
import Social_app from "../../social_app/socialApp";

const ProfileTab = () => {
    const { userAuth } = useContext(UserContext);
    const location = useNavigate();

    let social_app_style = {
        width: "80%", 
        height: "80%", 
        borderRadius: "50%", 
        position:"absolute", 
        top:"5px", 
        left:"5px",
        boxShadow:"0 0 0 4px white "
    }

    return (
        <>'


            <div className="col col-12 p-1" style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgb(228, 226, 226)", position: "relative" }}>
                <div style={{ height: "50%", top: "10%", borderRadius: "50%", aspectRatio: "1/1", boxShadow: "1px 1px 4px grey", background: "transparent", position: "absolute" }}>
                    <img style={{ width: "102px", height: "97px", marginTop:"2px", borderRadius: "50%" }} src={userAuth.user.image.length > 1 ? userAuth.user.image[1].url : ""} alt="" />

                    <div onClick={() => location(`/profile/edit/${userAuth.user._id}`, { state: { heading: "image", defaultData: userAuth.user.image.length > 1 ? userAuth.user.image[1] : userAuth.user.image, process: `${userAuth.user.image.length > 1 ? "edit" : "add"}` } })} style={{ position: "relative", width: "24px", height: "24px", borderRadius: "50%", boxShadow: "0 0 4px grey", cursor: "pointer", top: "-24px", right: "-72px", background: "white" }}>
                        <Upload style={{ width: "16px", height: "16px", transform: "translateY(-4px)", color: "#5A5AB7" }} />
                    </div>

                </div>

                <div style={{ width: "100%", height: "60%", display: "flex", gap: "4px", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", background: "white", marginTop: "auto", padding: "12px 0" }}>
                    <strong style={{ color: "#5A5AB7", fontWeight: "800", textTransform: "uppercase", padding: "3px 9px" }}>{userAuth.user.name}</strong>
                    <p className=" m-0" style={{ color: "rgb(228, 226, 226)", width: "65%", maxWidth: "130px", fontWeight: "500", fontSize: "12px", padding: " 3px", border: "1px solid rgb(228, 226, 226)" }}>29/11/2029</p>
                </div>
            </div>
            <div className="col col-12 p-2 pb-5" style={{ minHeight: "calc(98vh - 220px)", background: "whitesmoke", width: "100%", boxShadow: ".5px .5px 2px grey", margin: "20px auto", marginBottom: "0" }}>

                <div className="row p-0 m-0 d-flex" style={{ width: "100%", height: "max-content", minHeight: "50vh", justifyContent: "space-around", position: "relative" }}>


                    <div className="my-2" style={{ width: "92%", height: "max-content", minHeight: "10vh" }}>
                        <div style={{ fontWeight: "800", color: "#5A5AB7" }}>ABOUT</div>
                        <p style={{ fontSize: "14px", marginTop: "10px", display: "flex", color: "grey", width: "100%" }}>
                            <span style={{ display: "block", width: "100%", padding: "0 10px" }}>  {userAuth.user.about} </span>
                            <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} to={`/profile/edit/${userAuth.user._id}`} heading={"about"} defaultData={userAuth.user.about} />
                        </p>

                    </div>

                    {
                        userAuth.auth === true &&
                        <ProfileCard _id={userAuth.user._id} heading="PERSONAL INFO" userAuth={{ name: userAuth.user.name, number: userAuth.user.number, email: userAuth.user.email, dob: userAuth.user.dob, status: userAuth.user.status }} />
                    }

                    {
                        userAuth.auth === true &&
                        <ProfileCard _id={userAuth.user._id} heading="ADDRESS" userAuth={{ country: userAuth.user.country, state: userAuth.user.state, city: userAuth.user.city, pincode: userAuth.user.pincode, profession: userAuth.user.profession }} />
                    }

                    <div className="py-2 col col-12 mt-4 mb-5" style={{ flexDirection: "row", display: "flex", flexWrap: "wrap", justifyContent: "flex-start", position:"relative", columnGap:"40px", width:"92%" }}>
                       <h6 className="mb-4" style={{width:"100%", color:"#5A5AB7", fontWeight:"700"}}>CONTACTS</h6>
                        {userAuth.user.social?.map((v, i) => {
                            return v.id !== 0 &&  <div key={i} style={{ width: "45px", height: "45px", borderRadius: "50%", background: "#5A5AB7", position:"relative"}}>
                            <Social_app _key={i} parentStyle={{ width: "100%", height: "100%", borderRadius: "50%", display:"grid", placeItems:"center" }} social_app_style={social_app_style} v={v}/>
                                <Upload onClick={() => location(`/profile/edit/${userAuth.user._id}`, { state: { heading: "social", defaultData: v, process: `edit` } })} style={{ position: "absolute", width: "20px", padding:"3px", stroke:"grey", height: "20px", borderRadius: "50%", boxShadow: "0 0 4px grey", cursor: "pointer", bottom: "-3px", right: "-3px", background: "white" }} />
                        </div>
                        })}
                    <AddBtnLogo clss="addBtnLogo" to={`/resume/add/${userAuth.user._id}`} heading="social" />

                    </div>

                </div>
            </div>

        </>
    )
};
export default  memo(ProfileTab);