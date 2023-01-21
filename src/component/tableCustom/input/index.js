import React from "react";
import { SearchIcon } from "../../../assest/icon";


const Input = ({name,handleChange}) => {

    return (
        <>
            <div className="w-[100px] xl:w-[150px] flex justify-center border-b-2  border-[#006d75] rounded-b-sm  bg-black-100">
                <input className="bg-black-100 w-[70px] xl:w-[120px] h-[30px] rounded-t-sm" onChange={(e)=>handleChange(e.target.value,name)}/>
                <div className="bg-[#006d75] w-[30px] h-[30px]  flex items-center justify-center rounded-t-sm"><SearchIcon /></div>
            </div>
        </>
    )
}

export default Input