
import React, { useEffect, useState } from 'react'
import resturant from '../../assest/image/resturant.png'
import { CloseCircleOutlined, MinusOutlined, PlusOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { LeftOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { message } from 'antd';
import image from "../../assest/image/top-view-table-full-delicious-food-composition_23-2149141353.894cfe61f5e56e7f83a0.avif"


import BtnCustom from '../btn';
import ModalCustom from '../modalCustom';
// import ModalCustom from './modal';
import { Carousel } from 'antd';
import { Profile } from './profile';
import { TabsCustom } from '../tabsCustom';
import { useLazyGetAllDataQuery, useLazyGetWalletQuery, usePostAllDataMutation } from '../../redux/api/getAllData';
import Input from 'antd/es/input/Input';
import { useDispatch, useSelector } from 'react-redux';
import AddressList from './addressList';
import Loading from '../loading';
import { deleteBuy, setIsLogin, setName, setSelectShoabFn, setWallet } from '../../redux/slices/buyBox';
import { useLazyAuthQuery } from '../../redux/api/auth';
const contentStyle = {
    height: '500px',
    // color: '#fff',
    // lineHeight: '728px',
    // textAlign: 'center',
    // background: '#364d79',
};

// let address = [
//     {
//         shoab: "زعفرانیه",
//         address: 'زعفرانیه,نبش خیابان محمدی,پلاک۳'
//     },
//     {
//         shoab: "نیاوران",
//         address: 'نیاوران, سه راه یاسر,خیابان باهنر'
//     },
//     {
//         shoab: "تهرانپارس",
//         address: 'فلکه سوم تهرانپارس,خیابان ۱۹۶ شرقی ,کوچه محمدی'
//     },
//     {
//         shoab: "تجریش",
//         address: 'تجریش,نبش خیابان صالح,پلاک ۵'
//     },

// ]
export const Header = ({ setshowProfile, showProfile }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ModalOpen, setModalOpen] = useState(false);
    const [modalLocation, setModalLocation] = useState(false)
    const [changeShoab, setChangeShoab] = useState(false)
    const [intoRegister, setInfoRegister] = useState({});
    // const [stateLogin, setstateLogin] = useState(false);
    const [regiLoginApi, resultRegiLoginApi] = useLazyAuthQuery()
    const [getData, resultData] = useLazyGetAllDataQuery()
    const [getWallet, resultWallet] = useLazyGetWalletQuery()
    const [shoabState, setshoabState] = useState()
    const [messageApi, contextHolder] = message.useMessage()
    const dispatch = useDispatch()
    const shoab = useSelector(state => state.buyBox.selectShoab)
    const count = useSelector(state => state.buyBox.count)
    const stateLogin = useSelector(state => state.buyBox.login)






    const handleChange = (value, key) => {
        setInfoRegister(prev => ({ ...prev, [key]: value }))
    }

    const handleSubmitRegister = () => {
        regiLoginApi({ url: "User/register", body: intoRegister })
    }
    const handleSubmitLogin = () => {
        let body = {
            ...intoRegister
        }
        delete body.firstName
        delete body.name
        regiLoginApi({ url: "User/login", body: body })
    }

    useEffect(() => {
        if (resultRegiLoginApi.isSuccess) {
            if (resultRegiLoginApi.originalArgs.url === "User/login") {
                sessionStorage.setItem("auth", resultRegiLoginApi.data?.data?.token)
                sessionStorage.setItem("name", resultRegiLoginApi.data?.data?.firstname + resultRegiLoginApi.data?.data?.surname)
                dispatch(setName(resultRegiLoginApi.data?.data?.firstname + resultRegiLoginApi.data?.data?.surname))
            }
        }
    }, [resultRegiLoginApi]);

    useEffect(() => {
        const token = sessionStorage.getItem("auth");
        const name = sessionStorage.getItem("name");
        if (token) {
            dispatch(setIsLogin(true))
            dispatch(setName(name))
            getWallet("Wallet/Get")
        }
    }, []);


    useEffect(() => {
        if (resultRegiLoginApi.isSuccess && resultRegiLoginApi.originalArgs.url === "User/login" && !resultRegiLoginApi.isFetching) {
            messageApi.open({
                type: 'success',
                content: 'شما لاگین شدید',
            });
            dispatch(setIsLogin(true))
            setIsModalOpen(false)
        }
        if (resultRegiLoginApi.isSuccess && resultRegiLoginApi.originalArgs.url === "User/register") {
            messageApi.open({
                type: 'success',
                content: 'شما با موفقیت ثبت نام شدید',
            });
        }
        // if (resultRegiLoginApi.data?.errorCode === 403 || (!resultRegiLoginApi.data && resultRegiLoginApi.isSuccess)) {
        //     messageApi.open({
        //         type: 'error',
        //         content: 'عملبات انجام نشد',
        //     });

        // }
        if (resultData.data?.data?.branches?.length > 0) {
            dispatch(setSelectShoabFn(resultData.data?.data?.branches[0]))
        }
    }, [resultRegiLoginApi, resultData]);


    useEffect(() => {
        getData("Branch/GetAll")
    }, []);

    const handleCallApiWallet = async () => {
        const token = await sessionStorage.getItem("auth");

        if (token) {
            setTimeout(() => {
                getWallet("Wallet/Get")
            }, 2000);
        }

    }


    useEffect(() => {
        if (stateLogin) {
            handleCallApiWallet()
        }
    }, [stateLogin]);


    useEffect(() => {
        if (resultWallet.data?.data) {
            dispatch(setWallet(resultWallet.data?.data?.cash))
        }
    }, [resultWallet]);



    let itemsTabs = [
        {
            label: `ورود`,
            key: 1,
            children:
                <div className='flex flex-col '>

                    <p className='font-bold mb-10 w-full flex justify-center ' >لطفا اطلاعات خود را وارد کنید</p>
                    <div className='flex flex-col justify-center items-center h-full'>

                        <input value={intoRegister.mobile} placeholder='شماره موبایل (۰۹)' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => handleChange(e.target.value, "mobile")} />
                        <input value={intoRegister.password} type="password" placeholder='رمز عبور' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => handleChange(e.target.value, "password")} />

                        <BtnCustom title={"ورود"} className=' w-[250px] h-[48px] mt-5' leftIcon clickFn={() => handleSubmitLogin()} />
                    </div>,
                </div>
        },
        {
            label: `ثبت نام`,
            key: 2,
            children:
                <div className='flex flex-col justify-center items-center'>

                    <p className='font-bold mb-4'>لطفا اطلاعات خود را وارد کنید</p>
                    <input value={intoRegister.name} placeholder='نام' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => handleChange(e.target.value, "firstName")} />
                    <input value={intoRegister.sureName} placeholder='نام خانوادگی' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => handleChange(e.target.value, "sureName")} />
                    <input value={intoRegister.mobile} placeholder='شماره موبایل' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => handleChange(e.target.value, "mobile")} />
                    <input value={intoRegister.password} placeholder='رمز عبور' type="password" className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => handleChange(e.target.value, "password")} />

                    <BtnCustom title={"ثبت نام"} className=' w-[250px] h-[48px] ' leftIcon clickFn={() => handleSubmitRegister()} />
                </div>
        },
    ];



    const handleShoab = (itm) => {
        if (shoab.id === itm.id) {
            setModalOpen(false)
            return
        }
        setChangeShoab(true)
        setshoabState(itm)
    }


    const handleExit = () => {
        dispatch(setIsLogin(false))
        messageApi.open({
            type: 'error',
            content: 'شما خارج شدید',
        });
        sessionStorage.removeItem("auth")
    }

    const handleChangeShoab = async () => {
        await sessionStorage.removeItem('buy')
        dispatch(deleteBuy([]))
        dispatch(setSelectShoabFn(shoabState))
        setChangeShoab(false);
        setModalOpen(false)
    }

    useEffect(() => {
        if (resultData.data?.data?.branches.length > 1 && !window.location.href.includes("Authority")) {
            setModalOpen(true)
        }
    }, [resultData.data?.data?.branches]);





    return (
        <>
            <div className={`absolute z-50 top-0 right-0 w-[250px]  bg-gray-100 h-full transition-all shadow-2xl ${showProfile ? "translate-x-0" : 'translate-x-[500px]'}`}>
                <div className='absolute top-2 left-2 text-red-700 cursor-pointer' onClick={() => setshowProfile(false)}><CloseCircleOutlined /></div>
                <Profile />
            </div>
            {showProfile && (<div className={`absolute z-40 top-0 bottom-0 left-0 right-0 bg-black-200 opacity-50`} onClick={() => setshowProfile(false)}></div>)}
            {contextHolder}

            <div className='w-full lg:px-10 h-[80px]'>
                <div className='flex px-3 justify-between items-center h-full'>
                    <img src={resturant} alt='resturant' className="w-[70px] h-[70px]" />
                    <div className="flex">
                        <BtnCustom
                            title={!stateLogin ? 'ورود/ ثبت نام' : ''}
                            className={`${stateLogin && "bg-transparent !px-1 m-0"}`}
                            icon={stateLogin && (<UserOutlined className="text-gray-700 text-lg" />)}
                            clickFn={!stateLogin ? (() => setIsModalOpen(true)) : () => setshowProfile(true)} />
                        {stateLogin && <BtnCustom
                            className="bg-transparent !px-1 !mx-1"
                            icon={<EnvironmentOutlined className="text-gray-700 text-lg" />}
                            clickFn={() => setModalLocation(true)} />}
                        {stateLogin && <BtnCustom
                            className="bg-transparent !px-1 m-0"
                            icon={<PoweroffOutlined className="text-red-700 text-lg" />}
                            clickFn={() => handleExit()} />}
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-200 opacity-30 z-10"></div>
                {resultData.data?.data?.branches.length > 0 && (
                    <>
                        <div className='absolute z-40 md:top-28 top-10 left-[50%] -translate-x-[50%] flex justify-center flex-col items-center w-[320px] h-[200px]'>
                            <h1 className='font-bold text-[30px] mr-2 mb-2 text-center'>{shoab?.name}</h1>
                            <p className='mr-2 mb-5 text-sm text-center'>{`${"آدرس:"}${shoab?.addressDetail}`}</p>
                            {resultData.data?.data?.branches.length > 1 && (
                                <BtnCustom title='شعبه' icon={<DownOutlined />} leftIcon clickFn={() => setModalOpen(true)} />
                            )}
                        </div>
                        <div className='absolute z-30 md:top-28 top-10 left-[50%] -translate-x-[50%] flex justify-center flex-col items-center py-3 px-10 bg-slate-600 opacity-50 rounded-[5px] w-[320px] sm:w-[380px]  h-[200px] border border-gray-400'>
                        </div>
                    </>
                )}
                {resultData.isLoading && (<div className=" absolute z-30 top-32 left-[50%] -translate-x-[50%]  flex-col  flex justify-center items-center text-gray-500 w-full">
                    <Loading />
                    <div className="text-xs mx-1 text-gray-100">در حال بارگزاری...</div>
                </div>)}

                <Carousel autoplay effect="fade" >
                    <div>
                        <h3 className="md:h-[500px] h-[300px]">
                            <img className="bg-contain w-full md:h-[500px] h-[300px]" src="/img/l-intro-1651501665.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 className="md:h-[500px] h-[300px]">
                            <img className="bg-contain w-full md:h-[500px] h-[300px]" src="/img/0.89399200_1551782137_fast1.jpg" />
                        </h3>
                    </div>
                    <div>
                        <h3 className="md:h-[500px] h-[300px]">
                            <img className="bg-contain w-full md:h-[500px] h-[300px]" src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/0cdafr02.5if.jpg" />
                        </h3>

                    </div>
                    <div>
                        <h3 className="md:h-[500px] h-[300px]">
                            <img className="bg-contain w-full md:h-[500px] h-[300px]" src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/t2qyovwc.u2v.jpg" />
                        </h3>

                    </div>
                </Carousel>
            </div>
            <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <TabsCustom data={itemsTabs} login />
            </ModalCustom>
            <ModalCustom isModalOpen={changeShoab} setIsModalOpen={setChangeShoab}>
                <div className="flex flex-col mt-5">
                    <div className>با تغییر شعبه سبد خرید شما پاک خواهد شد آیا ادامه می دهید؟</div>
                    <div className="flex justify-end mt-3">
                        <BtnCustom title="تایید" clickFn={() => handleChangeShoab()} />
                        <BtnCustom title="انصراف" className="bg-red-600" clickFn={() => { setChangeShoab(false); setModalOpen(false) }} />
                    </div>
                </div>
            </ModalCustom>

            <ModalCustom isModalOpen={modalLocation} setIsModalOpen={setModalLocation}>
                <div className="flex flex-col mt-5">

                    <div className="mt-5">
                        <AddressList />
                    </div>
                </div>
            </ModalCustom>

            <ModalCustom isModalOpen={ModalOpen} setIsModalOpen={setModalOpen} title='لطفا شعبه مورد نظر خود را انتخاب کنید'>
                <div className='grid grid-cols-12 gap-y-2 mt-6 border-t pt-3'>
                    {resultData.data?.data?.branches?.map((itm, ind) => {

                        return <div className='col-span-6 items-center flex cursor-pointer hover:text-cyan-50' onClick={() => handleShoab(itm)}>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>{itm.name}</p>
                        </div>
                    })}
                </div>
                {resultData.isLoading && (<div className="flex justify-center items-center text-gray-500 w-full">
                    <Loading />
                    <div className="text-xs mx-1">در حال بارگزاری...</div>
                </div>)}
            </ModalCustom>
        </>
    )
}