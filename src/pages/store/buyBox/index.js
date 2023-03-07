import React, { useEffect, useState } from 'react';
import BtnCustom from '../../../component/btn'
import {
    CreditCardOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { setBuy } from '../../../redux/slices/buyBox';
import { useDispatch, useSelector } from 'react-redux';
import ModalCustom from '../../../component/modalCustom';
import { Input } from 'antd';
import { useLazyGetLinkPayQuery } from '../../../redux/api/getAllData';
import { useNavigate } from 'react-router-dom';
const BuyBox = ({ mobile }) => {
    const [sum, setsum] = useState(0);
    const [isFill, setisFill] = useState(false);
    const [payModal, setPayModal] = useState(false)
    const [inputSharzh, setinputSharzh] = useState()
    const [getLinkPay, resultGetLinkPay] = useLazyGetLinkPayQuery()
    const navigate = useNavigate()
    const buy = useSelector(state => state.buyBox.value)
    const wallet = useSelector(state => state.buyBox.wallet)
    const dispatch = useDispatch()

    const save = async (buy) => {
        await sessionStorage.setItem('buy', JSON.stringify(buy))
    }
    const handleBuy = (itm, type) => {
        let filter = buy?.map((item, index) => {
            if (item.id === itm.id) {
                if (type === "plus") {
                    return {
                        ...item,
                        count: item?.count ? item?.count + 1 : 1
                    }
                } else {
                    return {
                        ...item,
                        count: item?.count != 0 ? item.count - 1 : 0
                    }
                }
            } else {
                return item
            }
        })

        save(filter)

        dispatch(setBuy(filter))
    }

    const handleSumPrice = (itm) => {
        let sum = 0
        buy.map((item, index) => {
            if (item.count > 0) {
                sum += item.count * item.goodsPrice
            }
        })
        if (sum > 0) {
            setisFill(true)
        } else {
            setisFill(false)
        }
        setsum(sum)

    }

    useEffect(() => {
        handleSumPrice()
    }, [buy]);


    const handleAcceptBuy = async () => {
        setPayModal(true)
    }



    const handleCount = (itm) => {
        let count = buy.filter((item, ind) => itm.goodsName === item.goodsName)
        if (count[0]?.count) {
            return count[0]?.count
        } else {
            return 0
        }
    }

    const handleCLickCallApiPay = (type) => {
        if (type === "wallet") {
            getLinkPay(`PayCash/Payment?Amount=${sum}`)
        }
        if (type === "sharj") {
            getLinkPay(`PayCash/Payment?Amount=${inputSharzh}`)
        }
    }


    useEffect(() => {
        if (resultGetLinkPay.error?.data) {
            window.location.replace(resultGetLinkPay.error?.data)
        }
    }, [resultGetLinkPay])

    useEffect(() => {
        if (sum > wallet) {
            setinputSharzh(sum - wallet)
        }
    }, [sum, wallet])



    if (isFill) {

        return (
            <>

                <div className={`px-2 text-black h-[300px] overflow-y-auto`}>
                    {buy.map((itm, ind) => (
                        <>
                            {itm.count > 0 && (
                                <div className={`w-full h-[80px] border-b flex flex-col justify-center border-gray-300  p-2 ${ind === 0 ? "border-t" : ''}`}>
                                    <div className="text-lg">{itm.goodsName}</div>
                                    <div className="mt-2 text-xs flex justify-between">
                                        <div className="flex">
                                            <span>{itm.goodsPrice}</span>
                                            <span>تومان</span>
                                        </div>
                                        <div>
                                            <div className="w-full flex justify-end ">
                                                <span className="font-bold text-base mx-1 cursor-pointer hover:text-red-400" onClick={() => handleBuy(itm, "minus")}>
                                                    <MinusOutlined />
                                                </span>
                                                <span className="font-bold text-base mx-3">
                                                    {handleCount(itm)}
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
                <BtnCustom title={wallet >= sum ? "ثبت سفارش" : "پرداخت آنلاین"} className={"mt-3"} clickFn={() => handleAcceptBuy()} />

                <ModalCustom isModalOpen={payModal} setIsModalOpen={setPayModal}>
                    <div className='text-base font-bold'>{wallet >= sum ? "ثبت سفارش" : "افزایش اعتبار و ثبت سفارش"}</div>
                    {wallet < sum && (
                        <div className='mt-5 flex flex-col'>
                            <Input className='mx-2'
                                type='number' v
                                value={inputSharzh}
                                // onChange={(e) => setinputSharzh(e.target.value)}
                                prefix={<CreditCardOutlined />} />
                            <span className='flex text-xs text-red-100'>
                                <span>اعتبار شما :</span>
                                <span>{wallet}</span>
                            </span>
                        </div>
                    )}
                    {wallet >= sum && (
                        <div className='mt-5 flex flex-col'>
                            {"برای پرداخت از کیف پول مطمئن هستید؟"}
                            <span className='flex text-xs text-red-100'>
                                <span>اعتبار شما :</span>
                                <span>{wallet}</span>
                            </span>
                        </div>
                    )}
                    <div className='flex w-full justify-end mt-3'>
                        <BtnCustom title={"تایید"} clickFn={() => handleCLickCallApiPay(wallet >= sum ? "wallet" : 'sharj')} />
                        <BtnCustom title={"لغو"} className="bg-red-600" clickFn={() => setPayModal(false)} />
                    </div>
                </ModalCustom>
            </>
        );
    }
    if (!isFill) {
        return (
            <div>
                <div className="flex justify-center w-full text-gray-400 text-lg mt-5">سبد خرید شما خالی است</div>
                <div><img src="" /></div>
            </div>
        )
    }



}

export default BuyBox;