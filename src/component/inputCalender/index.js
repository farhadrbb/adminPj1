import {DateIcon} from "../../assest/icon"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function InputCalender({setDate}) {


    return (
        <div className="relative bg-black-100 flex w-full  border-b-cyan-100 h-[40px] rounded-b-sm border-b-2">
            <div
                className="absolute left-0 top-0 flex items-center justify-center bg-cyan-50 w-[40px] h-[40px] rounded-t-sm">
                <DateIcon/></div>
            <DatePicker
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                inputClass=" w-[250px] h-[40px]"
                onChange={setDate}
                portal
            />
        </div>
    )
}