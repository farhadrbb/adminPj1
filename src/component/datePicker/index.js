import React, { useEffect, useState } from 'react'
import DatePicker from 'react-multi-date-picker';
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateIcon } from '../../assest/icon';
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import { convertDateShamsiToMiladi, convertPersianDigitInEnglish } from '../../utils/commonFn';
import moment from "moment-jalaali"


const DatePickerCustom = ({ setChangeDate, placeholder,itm,setChange }) => {
    const [value, setValue] = useState()
    function handleChange(value) {
        setValue(value)
    }

    useEffect(() => {
        if (value) {
            let obj={[itm]:convertDateShamsiToMiladi(convertPersianDigitInEnglish(value.format()))}
            setChange(prev=>({...prev,...obj}))
        } else if (!value) {
            let obj={[itm]:value}
            setChange(prev=>({...prev,...obj}))
        }
    }, [value]);

    return (
        <>
            <div className="flex rounded relative mt-2">
                <div className='absolute bottom-0 w-full h-[2px] bg-cyan-50'></div>
                <DatePicker
                    plugins={[
                        <Toolbar position="bottom" />
                    ]}
                    portal
                    inputClass="input-date pr-1 "
                    placeholder={placeholder}
                    calendar={persian}
                    locale={persian_fa}
                    format={"YYYY/MM/DD"}
                    value={value}
                    calendarPosition="bottom-right"
                    onChange={handleChange}
                    animations={[
                        opacity(),
                        transition({ from: 35, duration: 500 })
                    ]}
                />
                <div className='min-w-[30px] max-w-[32px] h-[32px] bg-cyan-50 rounded flex justify-center items-center absolute top-0 left-0'>
                    <DateIcon />
                </div>
            </div>
        </>
    );
}

export default DatePickerCustom;