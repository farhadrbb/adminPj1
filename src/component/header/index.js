
import React, { useState } from 'react'
import resturant from '../../assest/image/resturant.png'
import { CloseCircleOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { LeftOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';
import { message } from 'antd';


import BtnCustom from '../btn';
import ModalCustom from '../modalCustom';
// import ModalCustom from './modal';
import { Carousel } from 'antd';
import { Profile } from './profile';
const contentStyle = {
    height: '370px',
    // color: '#fff',
    // lineHeight: '728px',
    // textAlign: 'center',
    // background: '#364d79',
};

let address = [
    {
        shoab: "زعفرانیه",
        address: 'زعفرانیه,نبش خیابان محمدی,پلاک۳'
    },
    {
        shoab: "نیاوران",
        address: 'نیاوران, سه راه یاسر,خیابان باهنر'
    },
    {
        shoab: "تهرانپارس",
        address: 'فلکه سوم تهرانپارس,خیابان ۱۹۶ شرقی ,کوچه محمدی'
    },
    {
        shoab: "تجریش",
        address: 'تجریش,نبش خیابان صالح,پلاک ۵'
    },

]
export const Header = ({ setshowProfile, showProfile }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ModalOpen, setModalOpen] = useState(true);
    const [selectShoab, setSelectShoab] = useState(address[0]);
    const [mobile, setmobile] = useState(null);
    const [stateLogin, setstateLogin] = useState(false);


    const [messageApi, contextHolder] = message.useMessage()



    const handleShoab = (itm) => {
        setSelectShoab(itm)
        setModalOpen(false)
    }
    const hanldeMobile = () => {
        console.log("mobile.length", mobile.length);
        if (!mobile || mobile.length < 11 || mobile.length > 11) {
            messageApi.open({
                type: 'error',
                content: 'شماره موبایل اشتباه است',
            });
            return
        }
        messageApi.open({
            type: 'success',
            content: 'شما وارد شدید',
        });
        setIsModalOpen(false)
        setstateLogin(true)
    }

    const handleExit = () => {
        setstateLogin(false)
        messageApi.open({
            type: 'error',
            content: 'شما خارج شدید',
        });
    }



    return (
        <>
            <div className={`absolute z-50 top-0 right-0 w-[250px]  bg-gray-100 h-full transition-all rounded-tl-[10px] rounded-bl-[10px] shadow-2xl ${showProfile ? "translate-x-0" : 'translate-x-[500px]'}`}>
                <div className='absolute top-2 left-2 text-red-700' onClick={()=>setshowProfile(false)}><CloseCircleOutlined/></div>
                <Profile/>
            </div>
            {showProfile && (<div className={`absolute z-40 top-0 bottom-0 left-0 right-0 bg-black-200 opacity-50`} onClick={() => setshowProfile(false)}></div>)}
            {contextHolder}

            <div className='w-full px-5'>
                <div className='flex px-3 justify-between items-center '>
                    <img src={resturant} alt='resturant' />
                    <div className="flex">
                        <BtnCustom title={!stateLogin ? 'ورود/ ثبت نام' : 'پروفایل'} icon={<UserOutlined />} clickFn={!stateLogin ? (() => setIsModalOpen(true)) : () => setshowProfile(true)} />
                        {stateLogin && <BtnCustom className="bg-transparent" icon={<PoweroffOutlined className="text-red-700 text-lg" />} clickFn={() => handleExit()} />}
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden'>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-200 opacity-70 z-10"></div>
                <div className='absolute z-30 top-32 left-[50%] -translate-x-[50%] flex justify-center flex-col items-center'>
                    <h1 className='font-bold text-[30px] mr-2 mb-2 text-center'>{selectShoab?.shoab}</h1>
                    <p className='mr-2 mb-5 text-sm text-center'>{`${"آدرس:"}${selectShoab?.address}`}</p>
                    <BtnCustom title='شعبه' icon={<DownOutlined />} leftIcon clickFn={() => setModalOpen(true)} />
                </div>

                <Carousel autoplay effect="fade" >
                    <div>
                        <h3 style={contentStyle}><img src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/a2xsu5dm.0xn.jpg" style={{ height: "370px", width: "100%" }} /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/sduaagl1.1ga.jpg" style={{ height: "370px", width: "100%", }} /></h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}><img src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/0cdafr02.5if.jpg" style={{ height: "370px", width: "100%", }} /></h3>

                    </div>
                    <div>
                        <h3 style={contentStyle}><img src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/t2qyovwc.u2v.jpg" style={{ height: "370px", width: "100%", }} /></h3>

                    </div>
                </Carousel>
            </div>
            <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <div className='flex flex-col justify-center items-center'>

                    <p className='font-bold mb-4' >شماره موبایلت رو وارد کن</p>
                    <input value={mobile} placeholder='شماره موبایل (۰۹)' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' onChange={(e) => setmobile(e.target.value)} />

                    <BtnCustom title={"ادامه"} icon={<LeftOutlined className='text-white ' />} className=' w-[250px] h-[48px] ' leftIcon clickFn={() => hanldeMobile()} />
                </div>
            </ModalCustom>
            <ModalCustom isModalOpen={ModalOpen} setIsModalOpen={setModalOpen} title='لطفا شعبه مورد نظر خود را انتخاب کنید'>
                <div className='grid grid-cols-12 gap-y-2 mt-6 border-t pt-3'>
                    {address.map((itm, ind) => {

                        return <div className='col-span-6 items-center flex cursor-pointer hover:text-cyan-50' onClick={() => handleShoab(itm)}>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>{itm.shoab}</p>
                        </div>
                    })}
                </div>
            </ModalCustom>
        </>
    )
}