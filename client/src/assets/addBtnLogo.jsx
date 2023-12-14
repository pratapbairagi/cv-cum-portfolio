import { useNavigate } from "react-router-dom";
import "./buttonLogoCss.css"

const AddBtnLogo = ({ style, to, heading, clss="" }) => {
    const location = useNavigate()
    return (
        <>
            {/* <NavLink to={to} state={{value : heading}}> */}

            <svg onClick={() => location(to, { state:{ heading : heading, defaultData : "", process : "add" }})} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={clss} style={style}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            {/* </NavLink> */}
        </>
    )
};

export default AddBtnLogo;