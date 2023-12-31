import EditBtnLogo from "../../../assets/editBtnLogo";


const ProfileCard = ({ userAuth, _id, heading }) => {

    return (
        <>
            <div className="col col-12 col-md-5 p-2" style={{ boxShadow: ".3px .3px 3px #2a2a66", height: "max-content", minHeight: "35vh", marginTop: "6px", background: "white", borderRadius: "6px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "white", background: "linear-gradient(to right,rgb(53, 53, 120), #5A5AB7, #8080ca)", padding: "5px 0" }}>{heading}</h3>

                {Object.keys(userAuth).map((v, i) => {
                    return  <div key={i} className="d-flex align-items-center" style={{ fontSize: "16px", fontWeight: "600", color: "#5A5AB7", textAlign: "left" }}>
                        <span style={{ width: "35%", padding: "2px 10px", textAlign: "left", fontWeight: "700", whiteSpace:"nowrap" }}>{v} : </span>
                        <span style={{ width: "60%", padding: "2px 10px", textAlign: "left", fontSize: "14px", textTransform: "capitalize", wordBreak:"break-word" }}>{Object.values(userAuth)[i]}</span>
                        <EditBtnLogo style={{ width: "20px", stroke: "red", cursor: "pointer", marginLeft: "auto" }} to={`/profile/edit/${_id}`} heading={v} defaultData={ !userAuth[v] ? "Any" : userAuth[v] }/>
                    
                    </div>
                })
                }
            </div>
        </>
    )
};

export default ProfileCard;