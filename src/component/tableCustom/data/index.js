import React from "react"
import {DateIcon} from "../../../assest/icon"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function DataPick() {
    return (
        <div className="relative bg-[#1F2330] flex w-[100px] xl:w-[150px]  border-b-[#006d75] rounded-b-sm border-b-2">
            <div
                className="absolute left-0 top-0 flex items-center justify-center bg-[#006D75] w-[30px] h-[30px] rounded-t-sm">
                <DateIcon/></div>
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                inputClass="date"
                portal
            />
        </div>
    )
}