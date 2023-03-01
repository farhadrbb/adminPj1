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
import { Table } from "antd";
import { Header } from "../../component/header";
import { Footer } from "../../component/footer";
import MapDisplay from "../../component/googleMap";
import ModalCustom from "../../component/modalCustom";
import { useLazyGetAllDataQuery, usePostAllDataMutation } from "../../redux/api/getAllData";
import { useEffect } from "react";
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
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        day: "شنبه",
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
    {
        key: "3",
        day: "شنبه",
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
    {
        key: "4",
        day: "شنبه",
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
    {
        key: "5",
        day: "شنبه",
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
    {
        key: "6",
        day: "شنبه",
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
    {
        key: "7",
        day: "شنبه",
        breakfast: 32,
        lunch: "fsf",
        dinner: "New York No. 1 Lake Park",
    },
];

let itemsTabs = [
    {
        label: `منو`,
        key: 1,
        children: <MenuResturant />,
    },
    {
        label: `اطلاعات`,
        key: 2,
        children: (
            <div className="h-[600px] overflow-y-auto w-full">
                <div className="grid grid-cols-12 gap-x-3">
                    <div className="lg:col-span-6 col-span-12">
                        <Table
                            columns={columns}
                            dataSource={data}
                            size="small"
                            pagination={false}
                            className="shadow-xl"
                        />
                    </div>
                    <div className="lg:col-span-6 col-span-12">
                        {/* <SimpleMap /> */}
                        <div className="w-[500px] h-[500px] "><MapDisplay /></div>
                    </div>
                </div>
            </div>
        ),
    },
];
const Store = () => {
    const [ModalOpen, setModalOpen] = useState(false);
    const [showProfile, setshowProfile] = useState(false);

    const [getAll,resultget] = usePostAllDataMutation()
    useEffect(()=>{ 
        let goodsGroupBody = {
            visible: true,
            branchId: 0
          }
    
          getAll({url:'GoodsGroup/getAll',goodsGroupBody})
        //   goodsGroup({url:'GoodsGroup/getAll',body})
    },[])

    console.log("resultget",resultget);


    return (
        <>
            <div
                className={`w-full h-full relative overflow-x-hidden ${showProfile ? "overflow-y-hidden" : 'overflow-y-auto'}`}
            >
                <Header showProfile={showProfile} setshowProfile={setshowProfile} />
                <div
                    className="sticky right-0 top-40 text-black w-[30px] h-[30px] rounded-lg shadow-xl text-xl bg-white flex justify-center items-center lg:hidden z-50"
                    onClick={() => setModalOpen(true)}
                >
                    <div className="w-[20px] h-[20px] bg-red-500 flex justify-center items-center text-white absolute -left-3 -top-3 text-xs rounded-full">
                        5
                    </div>
                    <ShoppingCartOutlined />
                </div>
                <div className="w-full h-[750px] relative px-3">
                    <div className="grid grid-cols-12 gap-x-4 mx-auto w-[95%] mt-10">
                        <div className="col-span-12 lg:col-span-8 bg-gray-100 rounded-[20px] shadow-lg p-3">
                            <TabsCustom data={itemsTabs} />
                            {/* <TabsCustom itemsTabs={itemsTabs} type={"card"} customTabs={"customTabs"} /> */}
                        </div>
                        <div className="col-span-4 bg-gray-100 p-5 rounded-[20px] shadow-lg text-black hidden lg:block">
                            <div className="mb-3 w-full flex justify-between">
                                <div>سبد خرید</div>
                                <div className="text-red-500">
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
                <div className="bg-gray-100 w-full h-full  rounded-[20px]  p-5 mt-5">
                    <div className="mb-3 w-full flex justify-between">
                        <div className="text-black">سبد خرید</div>
                        <div className="text-red-500">
                            <DeleteOutlined />
                        </div>
                    </div>
                    <BuyBox mobile />
                </div>
            </ModalCustom>




        </>
    );
};

export default Store;
