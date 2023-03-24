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
import { useLocation, useNavigate } from "react-router-dom";
import BuyBoxMobile from "./buyBoxMobile";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalLocation, setModalLocation] = useState(false)
    const [cartModal, setcartModal] = useState(false);
    const [showProfile, setshowProfile] = useState(false);
    const [getAllPost, resultgetAllPost] = usePostAllDataMutation()
    const [payStatus, resultPayStatus] = usePostDataPayMutation()
    const shoab = useSelector(state => state.buyBox.selectShoab)
    const count = useSelector(state => state.buyBox.count)
    const navigate = useNavigate()

    const dispatch = useDispatch()



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
                            {/* <div className="h-[300px] mt-2 mb-2"><MapDisplay setposition={setposition} position={position} /></div> */}
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
        localStorage.removeItem('buy')
        dispatch(deleteBuy([]))
        setcartModal(false)
        handleCallApi()
    }

    const apiCallPayCheck = () => {
        let Authority = window.location.href.split("Authority")[1].split("=")[1].split('&')[0]
        let status = window.location.href.split("=")[2]
        let body = {
            Authority,
            status
        }
        payStatus({ url: 'PayCash/Verify', body })
        navigate('/')
    }

    useEffect(() => {
        handleCallApi()
    }, [shoab]);



    useEffect(() => {

        const token = localStorage.getItem("auth");
        const name = localStorage.getItem("name");
        if (token) {
            if (window.location.href.includes("Authority") && window.location.href.includes("Status")) {
                apiCallPayCheck()
            }
            return
        }
    }, []);

    useEffect(() => {
        if (shoab?.id) {
            let body = {
                visible: true,
                branchId: shoab.id
            }
            getAllPost({ url: "GoodsGroup/getAll", body })
        }
    }, [shoab]);





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
                <Header
                    showProfile={showProfile}
                    setshowProfile={setshowProfile}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    setModalLocation={setModalLocation}
                    modalLocation={modalLocation}
                />
                <BuyBoxMobile setModalOpen={setModalOpen} />
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
                            <BuyBox
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                                setModalLocation={setModalLocation}
                                modalLocation={modalLocation}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>






            <ModalCustom isModalOpen={ModalOpen} setIsModalOpen={setModalOpen}>
                <div className="bg-gray-100 w-full h-full  rounded-[5px]  p-5 mt-5">
                    {count > 0 && (
                        <div className="mb-3 w-full flex justify-between">
                            <div className="text-black">سبد خرید</div>
                            <div className="text-red-500" onClick={() => setcartModal(true)}>
                                <DeleteOutlined />
                            </div>
                        </div>
                    )}
                    <BuyBox
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        setModalLocation={setModalLocation}
                        modalLocation={modalLocation}
                        mobile
                    />
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
