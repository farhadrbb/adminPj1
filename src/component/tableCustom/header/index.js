import React from "react";
import {FilterIcon} from "../../../assest/icon";
import Licon from "../../../assest/image/LIcon.png";

const HeaderTable = ({header, button, customData}) => {
    return (
        <>
            <div className="w-full h-[150px] bg-[#1F2330]">
                <div className="flex flex-col">
                    <div className="w-full h-[100px] py-[30px] px-[24px] flex justify-between items-center ">
                        <h1 className="text-[24px]">{header}</h1>
                        {
                            customData
                        }
                        {
                            button &&
                            <button className="btn-cyan  flex items-center justify-center ml-[20px] " onClick={button}>
                                ایجاد
                                <img src={Licon} className="pr-[12px]" alt="plusIcon"/>
                            </button>
                        }

                    </div>

                    <div className="w-full h-[50px] pr-[25px] pt-[16px] border-b border-b-[#40455C] ">
                        <FilterIcon/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTable;
