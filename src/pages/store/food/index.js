import React, { useState } from 'react';
import ff from "../../../assest/image/top-view-table-full-delicious-food-composition_23-2149141353.avif"
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setBuy } from '../../../redux/slices/buyBox';



const FoodInfo = () => {
    const buy = useSelector(state => state.buyBox.value)
    const dispatch = useDispatch()
    const handleBuy = (itm, type) => {
        let filter = buy.map((item, index) => {
            if (item.key === itm.key) {
                if (type === "plus") {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                } else {
                    return {
                        ...item,
                        count:item.count != 0 ? item.count - 1 : 0
                    }
                }
            }else {
                return item
            }
        })

        console.log("filter",filter);
        dispatch(setBuy(filter))
        // if (type === "plus") {
        //     dispatch(setBuyPlus(itm))
        // }
        // if (type === "minus") {
        //     dispatch(setBuyMinus(itm))
        // }
    }
    return (
        <>
            <div className="grid grid-cols-12 gap-3 px-1">
                {buy.map((itm, ind) => (
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
                                <span className="font-bold text-base mx-1 cursor-pointer hover:text-red-400" onClick={() => handleBuy(itm, "minus")}>
                                    <MinusOutlined />
                                </span>
                                <span className="font-bold text-base mx-3">
                                    {itm.count}
                                </span>
                                <span className="font-bold text-base mx-1 cursor-pointer hover:text-green-400" onClick={() => handleBuy(itm, "plus")}>
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