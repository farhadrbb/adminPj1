
import React, { useState } from 'react'
import resturant from '../../assest/image/resturant.png'
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { LeftOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { EnvironmentOutlined } from '@ant-design/icons';


import BtnCustom from '../btn';
import ModalCustom from '../modalCustom';
// import ModalCustom from './modal';
import { Carousel } from 'antd';
const contentStyle = {
    height: '370px',
    // color: '#fff',
    // lineHeight: '728px',
    // textAlign: 'center',
    // background: '#364d79',
};
export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className='w-full px-5'>
                <div className='flex px-3 justify-between items-center '>
                    <img src={resturant} alt='resturant' />
                    <BtnCustom title={'ورود/ ثبت نام'} icon={<UserOutlined />} clickFn={() => setIsModalOpen(true)} />
                </div>
            </div>
            <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <div className='flex flex-col justify-center items-center'>

                    <p className='font-bold mb-4' >شماره موبایلت رو وارد کن</p>
                    <input placeholder='شماره موبایل (۰۹)' className='border-b  mb-6 focus:border-none focus:outline-none focus:border-b w-[250px] h-[45px] placeholder:text-center' />

                    <BtnCustom title={"ادامه"} icon={<LeftOutlined className='text-white ' />} className=' w-[250px] h-[48px] ' leftIcon />
                </div>
            </ModalCustom>
            <div className='relative rounded-xl overflow-hidden'>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-200 opacity-70 z-10"></div>
                <div className='absolute z-30 top-32 left-[50%] -translate-x-[50%] flex justify-center flex-col items-center'>
                    <h1 className='font-bold text-[30px] mr-2 mb-2 text-center'>شعبه نیاوران</h1>
                    <p className='mr-2 mb-5 text-sm text-center'>آدرس: نیاوران, سه راه یاسر,خیابان باهنر</p>
                    <BtnCustom title='شعبه' icon={<DownOutlined />} leftIcon clickFn={() => setModalOpen(true)} />
                </div>
                <ModalCustom isModalOpen={ModalOpen} setIsModalOpen={setModalOpen} title='لطفا شعبه مورد نظر خود را انتخاب کنید'>
                    <div className='grid grid-cols-12 gap-y-2 mt-6 border-t pt-3'>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                        <div className='col-span-6 items-center flex'>
                            <EnvironmentOutlined />
                            <p className='mb-1 mr-1'>زعفرانیه</p>
                        </div>
                    </div>
                </ModalCustom>
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
        </>
    )
}