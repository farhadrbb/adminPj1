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


    useEffect(() => {
        setstateData([])

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
            let local = JSON.parse(localStorage.getItem('buy')) ? JSON.parse(localStorage.getItem('buy')) : []
            dispatch(setBuy([...local, ...resultGetPostAllData.data?.data?.goods]))
            setstateData(resultGetPostAllData.data?.data?.goods)
        }
    }, [resultGetPostAllData.data?.data]);

    const handleCount = (itm) => {
        let count = buy.filter((item, ind) => itm.goodsName === item.goodsName)
        if (count[0]?.count) {
            return count[0]?.count
        } else {
            return 0
        }
    }



    return (
        <>
            <div className="grid grid-cols-12 gap-y-10 gap-x-4 px-2">
                {stateData?.map((itm, ind) => (
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4  flex justify-center">
                        <div className="w-[220px] h-[320px] border shadow-xl rounded-sm">
                            <div className="w-full h-[150px]">
                                <img src={ff} className="w-full h-full rounded-sm" />
                            </div>
                            <div className="w-full flex justify-between mt-5 px-2">
                                <span className="font-bold text-base">
                                    {itm?.goodsName}
                                </span>

                            </div>
                            <div className="w-full flex justify-end mt-1 px-3 text-xs">
                                <span>
                                    {itm?.goodsPrice}
                                    {"تومان"}
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
            {stateData?.length === 0 && !resultGetPostAllData.isLoading ? (
                <div className="w-full h-full flex justify-center items-center mt-28 text-xs">اطلاعاتی برای نمایش وجود ندارد</div>
            ) : ''}
            {resultGetPostAllData.isLoading && (
                <div className="flex justify-center items-center w-full h-full mt-28">
                    <div className="flex justify-center items-center text-gray-500">
                        <Loading />
                        <div className="text-xs mx-1 ">در حال بارگزاری...</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default FoodInfo;