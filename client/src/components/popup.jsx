import { useContext } from "react";
import "./popup.css"
import { UserContext } from "../App";

const Popup = () => {
    const { popupInfo, setPopupInfo} = useContext(UserContext);

    
    return (
        <div style={{ width:"96%", background:`${popupInfo.success ? "green" : "red"}`, position:"fixed", display:`${popupInfo.show ? "grid" : "none"}`, placeItems:"center", zIndex:"2", top:"6px", borderRadius:"6px", maxWidth:"250px", right:"30px", minHeight:"45px", height:"max-content"}}>
            <p className="p-0" style={{color:"white", fontSize:"14px", fontWeight:"400", transform:"translateY(10px)", position:"relative"}}>{popupInfo.message}</p>
        <div className="activePopup"></div>
        </div>
    )
}

export default Popup;