import React, { useState } from 'react';
import BtnCustom from '../../../component/btn'
import {
    DeleteOutlined
} from '@ant-design/icons';
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';
const BuyBox = ({mobile}) => {
    const [counter, setcounter] = useState(0);
    let data = [
        {
            name: "پیتزا یونانی",
            price: '۲۶۲/۰۰۰'
        },
        {
            name: "پیتزا سبزیجات",
            price: '۱۵۰/۰۰۰'
        },
        {
            name: "پیتزا پپرونی",
            price: '۱۲۰/۰۰۰'
        },
        {
            name: "پیتزا پپرونی",
            price: '۱۲۰/۰۰۰'
        },
        {
            name: "پاستا",
            price: '۱۲۰/۰۰۰'
        },
        {
            name: "سالاد سزار",
            price: '۱۲۰/۰۰۰'
        },
    ]
    

    return (
        <>
            <div className={`px-2 text-black h-[450px] overflow-y-auto ${mobile && "h-[320px]"}`}>
                {data.map((itm, ind) => (

                    <div className={`w-full h-[80px] border-b flex flex-col justify-center border-gray-300  p-2 ${ind === 0 ? "border-t" : ''}`}>

                        <div className="text-lg">{itm.name}</div>
                        <div className="mt-2 text-xs flex justify-between">
                            <div className="flex">
                                <span>{itm.price}</span>
                                <span>تومان</span>
                            </div>
                            <div>
                                <div className="w-full flex justify-end ">
                                    <span className="font-bold text-base mx-1 cursor-pointer hover:text-red-400" onClick={() => setcounter(counter >= 0 ? counter - 1 : counter)}>
                                        <MinusOutlined />
                                    </span>
                                    <span className="font-bold text-base mx-3">
                                        {counter}
                                    </span>
                                    <span className="font-bold text-base mx-1 cursor-pointer hover:text-green-400" onClick={() => setcounter(counter + 1)}>
                                        <PlusOutlined />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mb-1 mt-5 px-3 text-black">
                <div>مالیات کل</div>
                <div>۱۲.۵۰۰</div>
            </div>
            <div className="flex justify-between px-3 text-black">
                <div className="text-base font-bold">هزینه کل</div>
                <div className="text-base font-bold">۱۲.۵۰۰</div>
            </div>
            <div className="w-full flex justify-center mt-5 text-cyan-50">کد تخفیف دارید؟</div>
            <BtnCustom title={"خرید سفارش"} className={"mt-3"} />
        </>
    );
}

export default BuyBox;