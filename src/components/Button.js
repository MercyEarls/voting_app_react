import React from "react"


const Button = (handleClick, label)=>{
    return (
        <button onClick={handleClick} className="bg-green-600 text-center w-full h-12 rounded-sm text-white"> 
            {label}
        </button>
    )
}
export default Button