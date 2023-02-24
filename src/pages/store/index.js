import React, { useState } from 'react';
import MenuResturant from './menuResturant';
import TabsCustom from './tabs';

import {
    DeleteOutlined, ShoppingCartOutlined, CloseOutlined
} from '@ant-design/icons';
import BuyBox from './buyBox';
import Map from 'react-map-gl';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { Table } from 'antd';
const position = [51.505, -0.09]


const columns = [
    {
        title: 'ردیف',
        dataIndex: 'day',
    },
    {
        title: 'صبحونه',
        dataIndex: 'breakfast',
    },
    {
        title: 'ناهار',
        dataIndex: 'lunch',
    },
    {
        title: 'شام',
        dataIndex: 'dinner',
    },
];
const data = [
    {
        key: '1',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
    },
    {
        key: '3',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
    },
    {
        key: '4',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
    },
    {
        key: '5',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
    },
    {
        key: '6',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
    },
    {
        key: '7',
        day: 'شنبه',
        breakfast: 32,
        lunch: 'fsf',
        dinner: 'New York No. 1 Lake Park',
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
        children: <div className="h-[600px] overflow-y-auto w-full">

            <div className="grid grid-cols-12 ">
                <div className="lg:col-span-6 col-span-12">
                    <Table columns={columns} dataSource={data} size="small" pagination={false} className="shadow-xl" />
                </div>
                <div className="lg:col-span-6 col-span-12"></div>
            </div>
            {/* <Map
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3.5
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            /> */}
            {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height:400}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>, */}
        </div>
    }
]
const Store = () => {
    const [openBuyBox, setopenBuyBox] = useState(false);
    return (
        <>
            <div className="w-full h-full relative px-3">
                <div className="absolute right-0 top-40 text-black w-[30px] h-[30px] rounded-lg shadow-xl text-xl bg-white flex justify-center items-center lg:hidden" onClick={() => setopenBuyBox(true)}>
                    <div className="w-[20px] h-[20px] bg-red-500 flex justify-center items-center text-white absolute -left-3 -top-3 text-xs rounded-full">5</div>
                    <ShoppingCartOutlined />
                </div>
                <div className={`absolute -top-11 left-0  h-full bg-gray-100 z-10 p-2 pt-10 transition-all ${!openBuyBox ? "invisible opacity-0 w-0" : "visible opacity-1 !w-full"}`}>
                    <div className="absolute top-4 cursor-pointer left-2 text-black " onClick={() => setopenBuyBox(false)}><CloseOutlined /></div>
                    <div className="bg-gray-200 rounded-[20px] p-5">
                        <div className="mb-3 w-full flex justify-between">
                            <div className="text-black">سبد خرید</div>
                            <div className="text-red-500"><DeleteOutlined /></div>
                        </div>
                        <BuyBox />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-x-4 mx-auto w-[90%] mt-10">
                    <div className="col-span-12 lg:col-span-8 bg-gray-100 rounded-[20px] shadow-lg p-3">
                        <TabsCustom itemsTabs={itemsTabs} type={"card"} customTabs={"customTabs"} />
                        {/* <TabsCustom itemsTabs={itemsTabs} /> */}
                    </div>
                    <div className="col-span-4 bg-gray-100 p-5 rounded-[20px] shadow-lg text-black hidden lg:block">
                        <div className="mb-3 w-full flex justify-between">
                            <div>سبد خرید</div>
                            <div className="text-red-500"><DeleteOutlined /></div>
                        </div>
                        <BuyBox />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;