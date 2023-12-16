import { UserContext } from "../../../App";
import EditBtnLogo from "../../../assets/editBtnLogo";
import ProfileCard from "./profileCard";
import { useContext } from "react"

const ProfileTab = () => {
    const { userAuth } = useContext(UserContext)

    return (
        <>'

            <div className="col col-12 p-1" style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "rgb(228, 226, 226)", position: "relative" }}>
                <div style={{ height: "50%", top: "10%", borderRadius: "50%", aspectRatio: "1/1", boxShadow: "1px 1px 4px grey", background: "#5A5AB7", position: "absolute" }}></div>

                <div style={{ width: "100%", height: "60%", display: "flex", gap: "4px", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", background: "white", marginTop: "auto", padding: "12px 0" }}>
                    <strong style={{ color: "#5A5AB7", fontWeight: "800", textTransform: "uppercase", padding: "3px 9px" }}>{userAuth.user.name}</strong>
                    <p className=" m-0" style={{ color: "rgb(228, 226, 226)", width: "65%", maxWidth: "130px", fontWeight: "500", fontSize: "12px", padding: " 3px", border: "1px solid rgb(228, 226, 226)" }}>29/11/2029</p>
                </div>
            </div>
            <div className="col col-12 p-2" style={{ minHeight: "calc(98vh - 220px)", background: "whitesmoke", width: "100%", boxShadow: ".5px .5px 2px grey", margin: "20px auto", marginBottom: "0" }}>

                <div className="row p-0 m-0 d-flex" style={{ width: "100%", height: "max-content", minHeight: "50vh", justifyContent: "space-around", position: "relative" }}>
                    <div className="col col-12 w-100 px-2 m-0 my-1" style={{ height: "20px", textAlign: "right" }}>
                        {/* <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} to={`/profile/edit/${userAuth.user._id}`} heading="objective" /> */}

                    </div>


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

                </div>
            </div>

        </>
    )
};
export default ProfileTab;