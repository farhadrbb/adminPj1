import InputCustom from '../../inputCustom';

import DatePickerCustom from '../../datePicker';
import {FilterIcon} from '../../../assest/icon';
import BtnCustom from '../../btn';


const FilterTable = ({setFilter, infoTable, handleClickFilter}) => {


    const handleFilterInput = (itm) => {

        switch (itm.filter) {
            case "search":
                return <InputCustom
                    placeholder={"شماره درخواست/ نام متقاضی"}
                    itm={itm}
                    setChange={setFilter}/>
            case "date":
                return <div className='mx-2'>
                    <DatePickerCustom
                        setChange={setFilter}
                        placeholder="تاریخ"
                        itm={itm.field}
                    />
                </div>
            case "dateFromTo":
                return <>
                    <div className='mx-2'>
                        <DatePickerCustom
                            setChange={setFilter}
                            placeholder="از تاریخ"
                            itm={itm.filterField[0]}
                        />
                    </div>
                    <div>
                        <DatePickerCustom
                            setChange={setFilter}
                            placeholder="تا تاریخ"
                            itm={itm.filterField[1]}/>
                    </div>
                </>
            default:
                return;
        }
    }


    return (
        <>
            <div className='py-3 px-3 w-full flex items-center justify-between'>
                <div className='flex'>
                    {infoTable.map((itm) => {

                        return <>
                            {handleFilterInput(itm)}
                        </>
                    })}
                </div>

                <BtnCustom clickFn={()=>handleClickFilter(true)} icon={<FilterIcon/>} title={"اعمال فیلتر"}/>

            </div>
        </>
    );
}

export default FilterTable;