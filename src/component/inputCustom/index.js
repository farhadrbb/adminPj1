import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assest/icon';

const InputCustom = ({ width, height, itm, field, setChange, placeholder, clickIcon, inputClass, iconClass }) => {
    const [state, setstate] = useState({});

    const handleChange = (value, type) => {
        setstate(prev => ({
            ...prev,
            [type]: value
        }))
    }

    useEffect(() => {
        if (state) {
            setChange(prev => ({ ...prev, ...state }))
        }
    }, [state]);


    return (
        <>
            <div className={`${width ? width : 'w-[220px]'} flex ${height ? height : 'h-[32px]'} rounded relative  ${inputClass ? inputClass : 'border-gray-400'}`}>
                <div className='absolute bottom-0 w-full h-[2px] bg-cyan-50'></div>

                <input
                    className={`bg-slate-400 text-black w-full focus:outline-none focus:border-none rounded text-sm pr-3`}
                    placeholder={placeholder}
                    name={itm?.field ? itm?.field : field}
                    value={state?.field}
                    onChange={(e) => handleChange(e.target.value, (itm?.field ? itm?.field : field))}
                />
                <div
                    className={`bg-cyan-50  flex justify-center items-center ${iconClass ? iconClass : ''} ${clickIcon ? "cursor-pointer" : ''} icon-input ${height ? height : 'h-[32px]'} w-[32px]`}
                    onClick={clickIcon ? () => clickIcon() : () => null} >
                    <SearchIcon />
                </div>
            </div>
        </>
    );
}

export default InputCustom;
