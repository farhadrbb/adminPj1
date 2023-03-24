import { ArrowLeftOutlined, DeleteOutlined, EditOutlined, LeftOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { message } from 'antd';
import Input from 'antd/es/input/Input';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetAllDataQuery, usePostAllDataMutation } from '../../../redux/api/getAllData';
import { setDistance, setSelectAddress } from '../../../redux/slices/buyBox';
import BtnCustom from '../../btn';
import MapDisplay from '../../googleMap';
import Loading from '../../loading';




const AddressList = ({ mobile }) => {
    const [getLocation, resultLocation] = useLazyGetAllDataQuery()
    const [PostLocation, resultPostLocation] = usePostAllDataMutation()
    const [addressText, setaddressText] = useState('');
    const [distance, setdistance] = useState(0);
    const dispatch = useDispatch()
    const shoab = useSelector(state => state.buyBox.selectShoab)
    const address = useSelector(state => state.buyBox.selectAddress)
    const [messageApi, contextHolder] = message.useMessage()




    const [position, setposition] = useState({
        lat: 35.705413908738436,
        lng: 51.387143908068545,
        zoom: 12,
    });

    const handleSubmitAddress = () => {
        if (!addressText || addressText.length < 10) {
            messageApi.open({
                type: 'error',
                content: 'لطفا آدرس خود را وارد کنید',
            });
            return
        }
        let body = {
            title: "string",
            lat: position.lat,
            lon: position.lng,
            details: addressText
        }
        PostLocation({ url: 'Address/Add', body })
        messageApi.open({
            type: 'success',
            content: 'آدرس با موفقیت ثبت شد',
        });
    }


    const [step, setstep] = useState(1)

    useEffect(() => {
        getLocation('Address/GetAll')
        setstep(1)
    }, [resultPostLocation.data?.data]);
    
    
    
    
    const handleClickAddress = (itm) => {
        dispatch(setSelectAddress(itm))
    }
    
    var rad = function (x) {
        return x * Math.PI / 180;
    };
    
    
    
    var getDistance = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat - p1.lat);
        var dLong = rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        setdistance(d.toFixed())
        return d; // returns the distance in meter
    };
    
    
    
    useEffect(() => {
        if (address && shoab) {
            getDistance({ lat: shoab.lat, lng: shoab.lon }, { lat: address.lat, lng: address.lon })
        }
    }, [shoab, address]);
    
    useEffect(() => {
        if (distance && distance > shoab.coverage+1000) {
            dispatch(setDistance(false))
            messageApi.open({
                type: 'error',
                content: 'آدرس انتخابی در محدوده سرویس نمی باشد',
            });
        } else if (distance && distance < shoab.coverage+1000) {
            dispatch(setDistance(true))
            messageApi.open({
                type: 'success',
                content: 'آدرس انتخابی در محدوده سرویس می باشد ',
            });
        }
    }, [distance]);

    // console.log("shoab",shoab);
    // console.log("address",address);
    console.log("dis",distance);
    
    
    useEffect(() => {
        return () => {
            setdistance(null)
            getLocation('Address/GetAll')
        }
    }, []);
    
    
    
    useEffect(() => {
        if (resultLocation.data?.data?.addresses) {
            dispatch(setSelectAddress(resultLocation.data?.data?.addresses[0]))
        }
    }, [resultLocation.data?.data?.addresses]);
    
    
    
    useEffect(() => {
        if (step === 2) {
            setposition({
                lat: 35.705413908738436,
                lng: 51.387143908068545,
                zoom: 12,
            })
        }
        getLocation('Address/GetAll')
    }, [step]);
    
    
    // let itemsTabs = [
    //     {
    //         label: `لیست آدرس های موجود`,
    //         key: 1,
    //         children:'',
    //     },
    //     {
    //         label: `آدرس جدید`,
    //         key: 2,
    //         children: '',
    //     },
    // ];


    return (
        <>
            {contextHolder}
            <div className={`flex items-center ${step === 2 ? "justify-between" : 'justify-center'}`}>
                <div className="font-bold text-base">انتخاب آدرس</div>
                {step === 2 && (
                    <div className="font-bold cursor-pointer" onClick={() => setstep(1)}><ArrowLeftOutlined className="text-base" /></div>
                )}
            </div>
            {step === 1 && (
                <>
                    <div className="text-cyan-50 flex justify-end items-center cursor-pointer mb-2" onClick={() => setstep(2)}>آدرس جدید <PlusOutlined className="mx-1 mt-1" /></div>

                    <div className={`text-black h-[300px] overflow-y-auto p-1`}>
                        {resultLocation.data?.data?.addresses?.map((itm, ind) => (

                            <div className={`w-full py-4 border flex  justify-between rounded-xl cursor-pointer mt-5 shadow border-gray-300 px-2 ${address?.id === itm?.id ? "bg-cyan-50 text-white" : ''}`} onClick={() => handleClickAddress(itm)}>
                                <div className="text-xs font-bold">
                                    {itm.details}
                                </div>
                                <div className="flex">
                                    <span>
                                        <EditOutlined className="text-orange-500 text-base" />
                                    </span>
                                    <span className="mx-3">
                                        <DeleteOutlined className="text-red-600 text-base" />
                                    </span>

                                </div>
                            </div>
                        ))}
                        {resultLocation.data?.data?.addresses.length === 0 && !resultLocation.isLoading ?(
                            <div className="flex justify-center items-center w-full h-full  text-xs">{"آدرسی وجود ندارد"}</div>
                        ):''}
                        {resultLocation.isLoading &&
                            (<div className="flex justify-center items-center text-gray-500 w-full">
                                <Loading />
                                <div className="text-xs mx-1">در حال بارگزاری...</div>
                            </div>
                            )}

                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <div className="h-[400px] mt-3 overflow-y-auto px-1">
                        <div>
                            <div><Input placeholder="آدرس خود را وارد کنید" value={addressText} onChange={(e) => setaddressText(e.target.value)} /></div>
                            {/* <div className="w-full flex mt-2">
                                <div className="w-[70px] ml-2"><Input placeholder="پلاک" type="number" /></div>
                                <div className="w-[70px]"><Input placeholder="واحد" type="number" /></div>
                            </div> */}

                        </div>
                        <div className="h-[300px] mt-2 mb-2"><MapDisplay setposition={setposition} position={position} /></div>
                        <BtnCustom title="ثبت آدرس" clickFn={() => handleSubmitAddress()} />
                    </div>
                </>
            )}
        </>
    );
}

export default AddressList;