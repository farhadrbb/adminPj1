import React, { useEffect, useState } from 'react'
import { SearchIcon } from '../../assest/icon';

const InputCustom = ({ width, height, field, setChange, placeholder, clickIcon, inputClass, iconClass,refresh }) => {
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

    const keyDownFn = (e) => {
        if ((e.key === 'Enter' || e.keyCode === 13) && clickIcon) {
            clickIcon();
        }
    };

    useEffect(() => {
        if (refresh) {
            setstate({[field]: null})
        }
    }, [refresh]);


    return (
        <>
            <div className={`${width ? width : 'w-[180px]'} flex ${height ? height : 'h-[32px]'} rounded relative mt-2  ${inputClass ? inputClass : 'border-gray-400'}`}>
                <div className='absolute bottom-0 w-full h-[2px] bg-cyan-50'></div>

                <input
                    className={`w-full  inputCustom focus:border-0 focus:!border-b `}
                    placeholder={placeholder}
                    name={field}
                    value={state[field] ? state[field] : ''}
                    onKeyDown={keyDownFn}
                    onChange={(e) => handleChange(e.target.value, field)}
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
