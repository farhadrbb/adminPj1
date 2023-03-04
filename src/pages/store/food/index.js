import React, { useEffect, useState } from 'react';
import ff from "../../../assest/image/top-view-table-full-delicious-food-composition_23-2149141353.avif"
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setBuy } from '../../../redux/slices/buyBox';
import { useLazyGetAllDataQuery, usePostAllDataMutation } from '../../../redux/api/getAllData';
import Loading from '../../../component/loading';



const FoodInfo = () => {
    const [getPostAllData, resultGetPostAllData] = usePostAllDataMutation()
    const [stateData, setstateData] = useState([]);
    const buy = useSelector(state => state.buyBox.value)
    const select = useSelector(state => state.buyBox.selectMenu)
    const dispatch = useDispatch()

    const save = async (buy)=>{
         await sessionStorage.setItem('buy',JSON.stringify(buy))
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


    useEffect(() => {
        if (select) {
            let body = {
                visible: true,
                groupId: select?.id
            }
            getPostAllData({ url: 'Goods/getAll', body })
        }
    }, [select]);


    useEffect(() => {
        if (resultGetPostAllData.data?.data?.goods) {
            let local = JSON.parse(sessionStorage.getItem('buy')) ? JSON.parse(sessionStorage.getItem('buy')) : []
            console.log("local",local);
            dispatch(setBuy([...local,...resultGetPostAllData.data?.data?.goods]))
            setstateData(resultGetPostAllData.data?.data?.goods)
        }
    }, [resultGetPostAllData.data?.data]);

    const handleCount = (itm) => {
        let count = buy.filter((item, ind) => itm.goodsName === item.goodsName)
        if (count[0]?.count) {
            return count[0]?.count
        }else {
            return 0
        }
    }


    return (
        <>
            <div className="grid grid-cols-12 gap-y-10 gap-x-4 px-2">
                {stateData?.map((itm, ind) => (
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
                        <div className="w-[220px] h-[320px] border shadow-lg rounded-xl">
                            <div className="w-full h-[150px]">
                                <img src={ff} className="w-full h-full rounded-xl" />
                            </div>
                            <div className="w-full flex justify-between mt-5 px-2">
                                <span className="font-bold text-base">
                                    {itm?.goodsName}
                                </span>

                            </div>
                            <div className="w-full flex justify-end mt-1 px-3">
                                <span className="font-bold">
                                    {itm?.goodsPrice}
                                </span>
                            </div>
                            <div className="w-full flex  mt-2 px-2">
                                <span className="font-bold text-xs text-gray-500">
                                    {itm?.goodsDescription}
                                </span>
                            </div>
                            <div className="w-full flex justify-end mt-5 pl-5">
                                <span className="font-bold text-base mx-1 cursor-pointer hover:text-red-400" onClick={() => handleBuy(itm, "minus")}>
                                    <MinusOutlined />
                                </span>
                                <span className="font-bold text-base mx-3">
                                    {/* {itm?.count ? itm.count : 0} */}
                                    {handleCount(itm)}
                                </span>
                                <span className="font-bold text-base mx-1 cursor-pointer hover:text-green-400" onClick={() => handleBuy(itm, "plus")}>
                                    <PlusOutlined />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {resultGetPostAllData.isLoading && (<div className="flex justify-center items-center text-gray-500 w-full">
                <Loading />
                <div className="text-xs mx-1">در حال بارگزاری...</div>
            </div>)}
        </>
    );
}

export default FoodInfo;