import React from 'react'
import { InstagramOutlined } from '@ant-design/icons';
import { WhatsAppOutlined,TwitterOutlined } from '@ant-design/icons';
import telegram from '../../assest/image/telegram.png'
export const Footer = () => {
    return (
        <div className='flex items-center justify-center h-[80px] '>
            <InstagramOutlined className='text-cyan-50 text-[30px]' />
            <WhatsAppOutlined className='text-cyan-50 mx-3 text-[30px]' />
            {/* <img src={telegram} className='w-[33px] h-[33px]' /> */}
            <TwitterOutlined className='text-cyan-50  text-[30px]'/>
        </div>
    )
}