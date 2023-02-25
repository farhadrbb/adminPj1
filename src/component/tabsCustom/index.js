import React from "react";
import { useState } from "react";

export const TabsCustom = ({data,type,center}) => {
  const [state, setState] = useState(0);
  
  const clickTab = (ind) => {
    setState(ind);
  };

  const handleType =()=>{
    if(type === "border-b"){
        return "border-b border-current text-cyan-500"
    }else{
        return "border border-b-0 border-current text-cyan-500"
    }
  }

  return (
    <>
      <div className="w-full h-full flex flex-col ">
        <div className={`w-full mb-3 overflow-y-auto pb-2 ${center ? "flex md:justify-center" : ''}`}>
          <ul className="flex border-b border-gray-100 text-sm font-medium ">
            {data.map((itm, ind) => (
              <li
                className={`-mb-px mx-1 whitespace-nowrap  cursor-pointer rounded-t-lg transition-all px-5 py-2 ${
                  state === ind
                    ? handleType()
                    : "border-gray-300 hover:text-cyan-500 text-gray-400"
                }`}
                onClick={() => clickTab(ind)}
              >
                {itm.label}
              </li>
            ))}

            {/* <li className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
              Silver
            </li>

            <li className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
              Gold
            </li>

            <li className="-mb-px border-b border-transparent p-4 hover:text-cyan-500">
              Platinum
            </li> */}
          </ul>
        </div>
        {/* {console.log("state", state)} */}
        {data.map((itm, ind) => (
          <>
            {ind === state ? (
              <div className="w-full  text-black">{itm.children}</div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};
