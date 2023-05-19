import React from "react";

const Button = ({data}) =>{
    return(
         <input type="button" style={{borderRadius: "5px",height:"30px", backgroundColor:"orange"}} value={data}/>
    )
};


export default Button