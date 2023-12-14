

const Button = ({btnName,css,clss,func, type}) => {
    return (
        <div type={type} onClick={func} className="btn btn-primary" style={css}>{btnName}</div>
    )
};

export default Button