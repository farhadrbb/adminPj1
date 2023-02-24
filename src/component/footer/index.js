import React from 'react'
import { InstagramOutlined } from '@ant-design/icons';
import { WhatsAppOutlined } from '@ant-design/icons';
import telegram from '../../assest/image/telegram.png'
export const Footer =()=>{
    return(
        <div className='flex items-center justify-center h-[60px] '>
<InstagramOutlined className='text-[black]   text-[30px]' />
<WhatsAppOutlined className='text-[black] mx-3 text-[30px]' />
<img src={telegram} className='w-[33px] h-[33px]'/>
        </div>
    )
}