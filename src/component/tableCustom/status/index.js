import React, {useEffect, useRef, useState} from "react";
import dropdown from '../../../assest/image/dropdown.png';

const Status = ({options, selectedItem, setSelectedItem}) => {
    const [select, setSelect] = useState(false);

    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            if (ref?.current?.contains(event.target)) {
                return;
            }
            setSelect(false);
        });
    }, []);
    const handleClick = () => {
        setSelect(!select);
    };


    return (
        <>
            <div className="relative" ref={ref}>
                <div
                    className="w-[100px] xl:w-[150px] flex justify-center border-b-2  border-[#006d75] rounded-b-sm  bg-black-100 cursor-pointer "
                    onClick={() => handleClick()}
                >
                    <input
                        className="bg-black-100 w-[70px] xl:w-[120px] h-[30px] rounded-t-sm cursor-pointer px-2"
                        readOnly={true}
                        value={selectedItem?.label}
                    />
                    <div className="bg-cyan-100 w-[30px] h-[30px]  flex items-center justify-center rounded-t-sm">
                        <img src={dropdown} alt="dropDown"/>
                    </div>
                </div>
                <ul
                    className={`py-1 absolute  ${select ? "visible text-white bg-black-100 w-[100px] xl:w-[150px] z-10 " : "invisible opacity-0 h-0 w-0"}`}
                    onClick={() => handleClick()}>
                    {options.map((option, index) => (
                        <li key={`status${index}`} className="hover:bg-cyan-50 text-xs cursor-pointer p-2"
                            onClick={() => setSelectedItem(option)}>
                            {option?.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

};

export default Status;

