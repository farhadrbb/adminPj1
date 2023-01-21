import React, {useEffect, useRef, useState} from "react";
import Vector from "../../assest/image/Vector.png";

const InputSelector = ({options, selectedItem, setSelectedItem}) => {
    const [select, setSelect] = useState();
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref?.current?.contains(event.target)) {
                return;
            }
            setSelect();
        });
    }, []);
    const handleClick = () => {
        setSelect(!select);
    };


    return (
        <>
            <div className="relative" ref={ref}>
                <div
                    className="w-full bg-black-100 flex justify-between h-[40px] border-b-2 border-cyan cursor-pointer rounded-sm "
                    onClick={() => handleClick()}
                >
                    <input
                        className="bg-black-100 w-full p-[10px] outline-none cursor-pointer"
                        readOnly={true}
                        value={selectedItem?.label}
                    />
                    <div className="flex justify-center items-center ml-[10px]">
                        <img src={Vector} alt="dropDown"/>
                    </div>
                </div>
                <ul
                    className={`z-[1] absolute top-[45px] right-0 ${
                        select
                            ? "visible text-white bg-black-100 w-full "
                            : "invisible opacity-0 h-0 w-0"
                    }`}
                    onClick={() => handleClick()}
                >
                    {options.map((option, index) => (
                        <li key={`optionStatus${index}`} className="li-style" onClick={() => setSelectedItem(option)}>
                            {option?.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

};

export default InputSelector;
