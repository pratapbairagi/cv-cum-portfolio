

const ResumeContentCol = ({colClass, colStyle, childrenClass, childrenStyle, children1Value, children2Value }) => {
    return(
        <>
            <div className={colClass} style={colStyle}>
                <span style={childrenStyle}>{children1Value}</span>
                <span style={childrenStyle}>{children2Value}</span>
            </div>
        </>
    )
};

export default ResumeContentCol;