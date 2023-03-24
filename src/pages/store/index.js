import React, { useState } from "react";
import MenuResturant from "./menuResturant";
// import TabsCustom from './tabs';
import { TabsCustom } from "../../component/tabsCustom";

import {
    DeleteOutlined,
    ShoppingCartOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import BuyBox from "./buyBox";
import { message, Table } from "antd";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import MapDisplay from "../../component/googleMap";
import ModalCustom from "../../component/modalCustom";
import { useLazyGetAllDataQuery, usePostAllDataMutation, usePostDataPayMutation } from "../../redux/api/getAllData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBuy, setBuy } from "../../redux/slices/buyBox";
import BtnCustom from "../../component/btn";
import { useLocation } from "react-router-dom";
// import SimpleMap from "../../component/googleMap";
// import SimpleMap from "../../component/googleMap";

const columns = [
    {
        title: "ردیف",
        dataIndex: "day",
    },
    {
        title: "صبحونه",
        dataIndex: "breakfast",
    },
    {
        title: "ناهار",
        dataIndex: "lunch",
    },
    {
        title: "شام",
        dataIndex: "dinner",
    },
];
const data = [
    {
        key: "1",
        day: "شنبه",
        breakfast: "7:30 , 10",
        lunch: "12 , 2",
        dinner: "6 , 12",
    },
    {
        key: "2",
        day: "یک شنبه",
        breakfast: "7 , 10",
        lunch: "12 , 2",
        dinner: "6 , 12",
    },
    {
        key: "3",
        day: "دو شنبه",
        breakfast: "8 , 10",
        lunch: "12 , 2",
        dinner: "6 , 12",
    },
    {
        key: "4",
        day: "سه شنبه",
        breakfast: "7:30 , 10",
        lunch: "1 , 3",
        dinner: "6 , 12",
    },
    {
        key: "5",
        day: "چهار شنبه",
        breakfast: "7:30 , 10",
        lunch: "12 , 4",
        dinner: "6 , 12",
    },
    {
        key: "6",
        day: "پنج شنبه",
        breakfast: "7:30 , 10",
        lunch: "12, 4",
        dinner: "6 , 12",
    },
    {
        key: "7",
        day: "جمعه",
        breakfast: "9 , 10",
        lunch: "1 , 3",
        dinner: "6 , 12",
    },
];


const Store = () => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [cartModal, setcartModal] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const [cartModal, setcartModal] = useState(false);
    const [getAllPost, resultgetAllPost] = usePostAllDataMutation()
    const [payStatus, resultPayStatus] = usePostDataPayMutation()
    const shoab = useSelector(state => state.buyBox.selectShoab)
    const count = useSelector(state => state.buyBox.count)
    const dispatch = useDispatch()
    const location = useLocation()


    const [position, setposition] = useState({
        lat: 35.705413908738436,
        lng: 51.387143908068545,
        zoom: 12,
    });










    const handleDeleteBuy = () => {
        sessionStorage.removeItem('buy')
        dispatch(deleteBuy([]))
        setcartModal(false)
    }


    useEffect(() => {
        if (shoab?.id) {
            let body = {
                visible: true,
                branchId: shoab.id
            }
            getAllPost({ url: "GoodsGroup/getAll", body })
        }
    }, [shoab]);








    let itemsTabs = [
        {
            label: `منو`,
            key: 1,
            children: <MenuResturant resultgetAllPost={resultgetAllPost} />,
        },
        {
            label: `اطلاعات`,
            key: 2,
            children: (
                <div className="h-[400px] overflow-y-auto w-full">
                    <div className="grid grid-cols-12 gap-x-3">
                        <div className=" col-span-12">
                            {/* <Table
                                columns={columns}
                                dataSource={data}
                                size="small"
                                pagination={false}
                                className="shadow-xl"
                            /> */}
                            <div className="h-[300px] mt-2 mb-2"><MapDisplay setposition={setposition} position={position} /></div>
                        </div>
                
                    </div>
                </div>
            ),
        },
    ];



    const handleCallApi = () => {
        if (shoab?.id) {
            let body = {
                visible: true,
                branchId: shoab.id
            }
            getAllPost({ url: "GoodsGroup/getAll", body })
        }
    }

    const handleDeleteBuy = () => {
        sessionStorage.removeItem('buy')
        dispatch(deleteBuy([]))
        setcartModal(false)
        handleCallApi()
    }


    useEffect(() => {
        handleCallApi()
    }, [shoab]);


    useEffect(() => {
        // if (window.location.host.includes("http://hamiweb.atabaifekri.ir")) {
            if (window.location.href.includes("Authority") && window.location.href.includes("Status")) {
                // let url = "http://hamiweb.atabaifekri.ir/?Authority=000000000000000000000000000001061366&Status=OK"
                let Authority = window.location.href.split("Authority")[1].split("=")[1].split('&')[0]
                let status = window.location.href.split("=")[2]

                console.log("Authority",Authority);
                console.log("status",status);
                let body = {
                    Authority,
                    status
                }
                payStatus({ url: 'PayCash/Verify', body })
            }
        // }
    }, []);


    console.log("window.location",window.location);



    useEffect(() => {
        if (resultPayStatus.isError) {
            message.open({
                type: 'error',
                content: 'پرداخت با موفقیت انجام نشد'
            })
        }
        if (resultPayStatus.isSuccess) {
            message.open({
                type: 'success',
                content: 'پرداخت با موفقیت انجام شد'
            })
        }
    }, [resultPayStatus]);









    return (
        <>
            <div
                className={`w-full h-full relative overflow-x-hidden ${showProfile ? "overflow-y-hidden" : 'overflow-y-auto'}`}
            >
                <Header showProfile={showProfile} setshowProfile={setshowProfile} />
                <div
                    className="sticky right-0 top-40 text-black w-[30px] h-[30px] rounded-lg shadow-xl cursor-pointer text-xl bg-white flex justify-center items-center lg:hidden z-50"
                    onClick={() => setModalOpen(true)}
                >
                    <div className="w-[20px] h-[20px] bg-red-500 flex justify-center items-center text-white absolute -left-3 -top-3 text-xs rounded-full">
                        {count}
                    </div>
                    <ShoppingCartOutlined />
                </div>
                {/* <div className="absolute top-[580px] -right-[40px] w-[120px] h-[120px]">
                    <img src="/img/pngwing.com.png" className="w-full h-full opacity-70" />
                </div>
                <div className="absolute md:top-[880px] top-[500px] -left-[160px] w-[250px] h-[250px]">
                    <img src="/img/pngwing.com (3).png" className="w-full h-full opacity-70" />
                </div> */}
                <div className="w-full h-[500px] md:h-[540px] relative xl:px-10">
                    <div className="grid grid-cols-12 gap-x-4 mx-auto w-[95%] mt-10">
                        <div className="col-span-12 lg:col-span-8 bg-gray-100 rounded-[5px] shadow-lg p-3">
                            <TabsCustom data={itemsTabs} />
                        </div>
                        <div className="col-span-4 bg-gray-100 p-5 rounded-[5px] shadow-lg text-black hidden lg:block relative overflow-hidden">
                            <div className="mb-3 w-full flex justify-between">
                                <div>سبد خرید</div>
                                <div className="text-red-500 cursor-pointer" onClick={() => setcartModal(true)}>
                                    <DeleteOutlined />
                                </div>
                            </div>
                            <BuyBox />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>






            <ModalCustom isModalOpen={ModalOpen} setIsModalOpen={setModalOpen}>
                <div className="bg-gray-100 w-full h-full  rounded-[5px]  p-5 mt-5">
                    <div className="mb-3 w-full flex justify-between">
                        <div className="text-black">سبد خرید</div>
                        <div className="text-red-500" onClick={() => setcartModal(true)}>
                            <DeleteOutlined />
                        </div>
                    </div>
                    <BuyBox mobile />
                </div>
            </ModalCustom>



            <ModalCustom isModalOpen={cartModal} setIsModalOpen={setcartModal}>
                <div className="flex flex-col mt-5">
                    <div className>آیا از حذف  سبد خرید مطمئن هستید؟</div>
                    <div className="flex justify-end mt-3">
                        <BtnCustom title="تایید" clickFn={() => handleDeleteBuy()} />
                        <BtnCustom title="انصراف" className="bg-red-600" clickFn={() => setcartModal(false)} />
                    </div>
                </div>
            </ModalCustom>




        </>
    );
};

export default Store;
