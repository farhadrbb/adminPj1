import React, { useState } from 'react';
import ff from "../../../assest/image/top-view-table-full-delicious-food-composition_23-2149141353.avif"
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';

let products = [
    {
        title: 'پیتزا مخلوط',
        price: '216.000'
    },
    {
        title: 'پیتزا گوشت ',
        price: '216.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '123.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '56.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '96.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '10.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '6565.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '64.000'
    },
    {
        title: 'پیتزا سبزیجات',
        price: '32.000'
    },
]

const FoodInfo = () => {
    const [counter, setcounter] = useState(0);
    return (
        <>
            <div className="grid grid-cols-12 gap-3 px-1">
                {products.map((itm, ind) => (
                    <div className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div className="w-full h-[320px] border shadow-lg rounded-xl">
                            <div className="w-full h-[150px]">
                                <img src={ff} className="w-full h-full rounded-xl" />
                            </div>
                            <div className="w-full flex justify-between mt-5 px-2">
                                <span className="font-bold text-base">
                                    {itm.title}
                                </span>

                            </div>
                            <div className="w-full flex justify-end mt-1 px-3">
                                <span className="font-bold">
                                    {itm.price}
                                </span>
                            </div>
                            <div className="w-full flex  mt-2 px-2">
                                <span className="font-bold text-xs text-gray-500">
                                    {"فلفل.کدو.بادمجان.زیتون.سس مخصوص"}
                                </span>
                            </div>
                            <div className="w-full flex justify-end mt-5 pl-5">
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
                ))}
            </div>
        </>
    );
}

export default FoodInfo;