import { memo, useState } from "react";
import "./toggleBtn.css";
import { useMemo } from "react";

const ToggleBtn = ({ clss }) => {
    const [checked, setChecked] = useState();

    useMemo(() => {
        if (clss) {
            if (checked === false) {
                document.getElementById(`${clss}`).style.display = "flex"
            }
            if(checked === true) {
                document.getElementById(`${clss}`).style.display = "none"
            }
        }
    }, [checked])


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems:"center", width: "max-content", gap: "5px" }}>
            <div className="toggleBtn_container" style={{ width: "36px", background: "white", height: "22px", boxShadow: "0 0 2px green inset", display: "flex", justifyContent: "center", position: "relative", borderRadius: "12px" }}>
                <span style={{ display: "block", width: "17px", height: "17px", background: `${checked === true ? "red" : "green"}`, position: "absolute", left: `${checked === true ? "3.5px" : "15px"}`, top: "2.5px", borderRadius: "10px" }}></span>
                <input style={{ opacity: "0", cursor: "pointer", width: "36px", height: "22px" }} onClick={(e) => {
                    setChecked(e.target.checked);
                //    document.getElementById(`${clss}`).style.display = "none" 
                    // e.target.checked ? document.getElementById(`${clss}`).style.display = "none" : document.getElementById(`${clss}`).style.display = "flex"
                    }} type="checkbox" name="" id="" />
            </div>
            <span style={{ color: 'rgb(32, 30, 30)', textTransform:"uppercase", fontSize: "7px", fontWeight: "500" }}>{clss}</span>
        </div>
    )
}

export default memo(ToggleBtn);