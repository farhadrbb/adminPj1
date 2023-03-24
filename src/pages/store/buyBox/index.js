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
import { setBuy, setCount, setSum } from '../../../redux/slices/buyBox';
import { useDispatch, useSelector } from 'react-redux';
import ModalCustom from '../../../component/modalCustom';
import { Input, message } from 'antd';
import { useLazyGetLinkPayQuery, useLazyGetWalletQuery, usePostDataPayMutation, useSendInvoiceMutation } from '../../../redux/api/getAllData';
import { useNavigate } from 'react-router-dom';
const BuyBox = ({ mobile, setIsModalOpen, isModalOpen, setModalLocation, modalLocation }) => {
    const [sum, setsum] = useState(0);
    const [tax, settax] = useState(0);
    const [isFill, setisFill] = useState(false);
    const [payModal, setPayModal] = useState(false)
    const [inputSharzh, setinputSharzh] = useState()
    const [getLinkPay, resultGetLinkPay] = useLazyGetLinkPayQuery()
    const [postFactor, resultPostFactor] = useSendInvoiceMutation()
    const [getWallet, resultWallet] = useLazyGetWalletQuery()
    const buy = useSelector(state => state.buyBox.value)
    const shoab = useSelector(state => state.buyBox.selectShoab)
    const wallet = useSelector(state => state.buyBox.wallet)
    const login = useSelector(state => state.buyBox.login)
    const distance = useSelector(state => state.buyBox.distance)
    const dispatch = useDispatch()
    const [messageApi, contextHolder] = message.useMessage()
    const [payStatus, resultPayStatus] = usePostDataPayMutation()



    const save = async (buy) => {
        await localStorage.setItem('buy', JSON.stringify(buy))
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
        let taxM = 0
        let count = 0
        buy.map((item, index) => {
            if (item.count > 0) {
                sum += item.count * item.goodsPrice
                count += item.count
                if (item.tax && item.tax != 0) {
                    taxM += (item.goodsPrice * item.tax) / 100 * item.count
                }
            }
        })
        if (sum > 0) {
            setisFill(true)
        } else {
            setisFill(false)
        }
        setsum(sum + taxM)
        dispatch(setSum(sum + taxM))
        dispatch(setCount(count))
        if (taxM > 0) {
            settax(taxM)
        }

    }

    useEffect(() => {
        handleSumPrice()
    }, [buy]);






    const handleAcceptBuy = async () => {
        if (!login) {
            messageApi.open({
                type: 'warning',
                content: 'برای ثبت سفارش ابتدا لاگین کنید',
            });
            setIsModalOpen(true)
            return
        }
        if (!distance) {
            messageApi.open({
                type: 'error',
                content: 'لوکیشن انتخابی در محدوده سرویس نمی باشد',
            });
            setModalLocation(true)
            return

        }
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

        let postBuy = buy.map((itm, ind) => {
            if (itm.count > 0) {
                return {
                    goodsId: itm.id,
                    count: itm.count,
                    description: itm.goodsDescription
                }
            }
        })

        let filter = postBuy.filter((itm, ind) => itm)



        let body = {
            branchId: shoab.id,
            description: "string",
            invoiceDetailDTO: [
                ...filter
            ]
        }
        if (type === "wallet") {
            postFactor({ url: "Invoice/AddNewOrder", body })
            // getLinkPay(`PayCash/Payment?Amount=${sum}`)

        }
        if (type === "sharj") {
            getLinkPay(`PayCash/Payment?Amount=${inputSharzh}`)
        }

    }

    useEffect(() => {

        if(resultPostFactor.data?.data){
            let Authority = resultPostFactor.data?.data?.trackingCode
            let body = {
                Authority,
                status:'OK'
            }
            payStatus({ url: 'PayCash/Verify', body })
        }
    }, [resultPostFactor.data?.data]);



    useEffect(() => {
        if (resultGetLinkPay.data?.data) {
            window.location.replace(resultGetLinkPay.data?.data)
        }
    }, [resultGetLinkPay])





    useEffect(() => {
        if (sum > wallet) {
            setinputSharzh(sum - wallet)
        }
    }, [sum, wallet])

    // useEffect(() => {
    //     if (resultPostFactor.data?.data && resultPostFactor.isSuccess) {
    //         getWallet("Wallet/Get")
    //     }

    // }, [resultPostFactor.data?.data]);







    if (isFill) {

        return (
            <>
                {contextHolder}
                <div className={`px-2 text-black overflow-y-auto ${mobile ? "h-[270px]" : "h-[300px]"}`}>
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
                <div className="flex justify-between mb-1 mt-5 text-xs px-3 text-black">
                    <div>مالیات کل</div>
                    <div className="flex">
                        <div >{tax}</div>
                        <div className=" mr-1">{"تومان"}</div>
                    </div>
                </div>
                <div className="flex justify-between px-3 mt-3 text-black">
                    <div className="text-base font-bold">هزینه کل</div>
                    <div className="flex">
                        <div className="text-base font-bold">{sum}</div>
                        <div className="text-base font-bold mr-1">{"تومان"}</div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-5 text-cyan-50">کد تخفیف دارید؟</div>
                <BtnCustom title={wallet >= sum ? "ثبت سفارش" : "پرداخت آنلاین"} className={wallet >= sum ? "" : "bg-red-600"} clickFn={() => handleAcceptBuy()} />

                <ModalCustom isModalOpen={payModal} setIsModalOpen={setPayModal}>
                    <div className='text-base font-bold'>{wallet >= sum ? "ثبت سفارش" : "افزایش اعتبار و ثبت سفارش"}</div>
                    {wallet < sum && (
                        <div className='mt-5 flex flex-col'>
                            <Input className='mx-2'
                                type='number' v
                                value={inputSharzh}
                                // onChange={(e) => setinputSharzh(e.target.value)}
                                prefix={<CreditCardOutlined />} />
                            <span className='flex text-xs text-red-100 mr-2 mt-1'>
                                <span>اعتبار شما :</span>
                                <div className="flex">
                                    <span>{wallet}</span>
                                    <span className="mr-1">{"تومان"}</span>
                                </div>
                            </span>
                        </div>
                    )}
                    {wallet >= sum && (
                        <div className='mt-5 flex flex-col'>
                            {"برای پرداخت از کیف پول مطمئن هستید؟"}
                            <span className='flex text-xs text-red-100'>
                                <span>اعتبار شما :</span>
                                <div className="flex">
                                    <span>{wallet}</span>
                                    <span className="mr-1">{"تومان"}</span>
                                </div>
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





