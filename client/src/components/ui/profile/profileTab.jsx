import { UserContext } from "../../../App";
import ProfileCard from "./profileCard";
import { useContext } from "react"

const ProfileTab = () => {
    const userAuth = useContext(UserContext)

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
                        <div className="col col-12 w-100 px-2 m-0 my-2" style={{ height: "20px", textAlign: "right" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5A5AB7" style={{ width: "20px", margin: "0" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                        </div>

                        {
                            userAuth.user.name &&
                            <ProfileCard heading="PERSONAL INFO" userAuth={{ name: userAuth.user.name, number: userAuth.user.number, email: userAuth.user.email, dob: userAuth.user.dob }} />
                        }

                        {
                            userAuth.user.name &&
                            <ProfileCard heading="ADDRESS" userAuth={{ country: userAuth.user.country, state: userAuth.user.state, city: userAuth.user.city, pincode: userAuth.user.pincode }} />
                        }

                    </div>
                </div>

        </>
    )
};
export default ProfileTab;