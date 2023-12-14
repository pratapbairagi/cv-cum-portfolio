import { useRef } from "react";
import "./inputStyle.css"

const Input = ({ type, placeholder, defaultValue, func, css, clss, id, inputChangeHandler, required, name, pattern = null, key }) => {
    console.log("ranger ==> ", type)
    let ref = useRef(0)

    console.log("ref => ", ref.current)
    return (
        
        type === "file" ?
            <div className="imageUploaderInput_container">
                <input key={key} accept="image/*" pattern={pattern} className={`${clss} imageUploaderInput`} name={name} defaultValue={""} required={required} onChange={inputChangeHandler} type={type} id={id} placeholder={placeholder} />
            </div>
            :
            type === "range" ?
            
                <div className="inputRanger_container">
                    <span style={{color:"white", width:"30px", height:"30px", background:"black", display:"block", marginLeft:`calc(${ref.current}% - 15px)`, fontSize:"12px", borderRadius:"50%", lineHeight:"30px", textAlign:"center"}}>{ref.current}</span>
                    <input key={key} pattern={pattern} min={0} title={defaultValue} max={100} step={1} className={clss} name={name} defaultValue={defaultValue} required={required} onChange={(e)=>{
                        inputChangeHandler(e)
                        ref.current = e.target.value
                        
                        }} type={type} id={id} placeholder={placeholder} style={{width:'100%'}} />
                        <span style={{fontWeight:"700"}}>Set Your Level</span>
                </div>
                :
                <input key={key} pattern={pattern} className={clss} name={name} defaultValue={defaultValue} required={required} onChange={inputChangeHandler} type={type} id={id} placeholder={placeholder} style={css} />
    )
};

export default Input;