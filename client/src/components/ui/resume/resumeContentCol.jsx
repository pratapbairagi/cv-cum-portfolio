

const ResumeContentCol = ({colClass, colStyle, childrenClass, childrenStyle, children1Value, children2Value, index }) => {
    return(
        <>
            <div className={colClass} style={colStyle}>
                {/* <span style={{width:"10px", color:"black", fontSize:"10px", marginTop:"2.5px", position:"absolute"}}>{index}</span> */}
                <span className="" style={childrenStyle}>{children1Value}</span>
                {/* <span className="text-base font-bold text-gray-600">-</span> */}
                <span className="" style={childrenStyle}>{children2Value}</span>
            </div>
        </>
    )
};

export default ResumeContentCol;