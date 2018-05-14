import React from "react";

export default ({input, label,type, YOLO,meta:{error, touched}})=>{
    // console.log("YOLO, ", YOLO)
    return(
        <div>
        <label>{label}</label>
        <input {...input} type={type} required style={{marginBottom: "5px"}}/>
            <div className="red-text" style={{marginBottom: "20px"}}>
            {touched && error}
            </div>
        </div>
    )
}