import React, { useEffect, useState } from 'react';
import BtnCustom from '../../../component/btn'
import {
    DeleteOutlined
} from '@ant-design/icons';
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { setBuy } from '../../../redux/slices/buyBox';
import { useDispatch, useSelector } from 'react-redux';
const BuyBox = ({ mobile }) => {
    const [sum, setsum] = useState(0);
    const [isFill, setisFill] = useState(false);
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
                        count: item.count != 0 ? item.count - 1 : 0
                    }
                }
            } else {
                return item
            }
        })

        dispatch(setBuy(filter))

    }

    const handleSumPrice = (itm) => {
        let sum = 0
        buy.map((item, index) => {
            if (item.count > 0) {
                sum += item.count * item.price
            }
        })
        if (sum > 0) {
            setisFill(true)
        } else {
            setisFill(false)
        }
        setsum(sum.toFixed(3))

    }

    useEffect(() => {
        handleSumPrice()
    }, [buy]);



    if (isFill) {

        return (
            <>

                <div className={`px-2 text-black h-[450px] overflow-y-auto ${mobile && "h-[320px]"}`}>
                    {buy.map((itm, ind) => (
                        <>
                            {itm.count > 0 && (
                                <div className={`w-full h-[80px] border-b flex flex-col justify-center border-gray-300  p-2 ${ind === 0 ? "border-t" : ''}`}>
                                    <div className="text-lg">{itm.title}</div>
                                    <div className="mt-2 text-xs flex justify-between">
                                        <div className="flex">
                                            <span>{itm.price}</span>
                                            <span>تومان</span>
                                        </div>
                                        <div>
                                            <div className="w-full flex justify-end ">
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
                                </div>
                            )}
                        </>
                    ))}
                </div>
                {/* <div className="flex justify-between mb-1 mt-5 px-3 text-black">
                <div>مالیات کل</div>
                <div>۱۲.۵۰۰</div>
            </div> */}
                <div className="flex justify-between px-3 text-black">
                    <div className="text-base font-bold">هزینه کل</div>
                    <div className="text-base font-bold">{sum}</div>
                </div>
                <div className="w-full flex justify-center mt-5 text-cyan-50">کد تخفیف دارید؟</div>
                <BtnCustom title={"خرید سفارش"} className={"mt-3"} />
            </>
        );
    }
    if(!isFill){
        return(
            <div className="flex justify-center w-full text-gray-400 text-lg mt-5">سبد خرید شما خالی است</div>
        )
    }
}

export default BuyBox;