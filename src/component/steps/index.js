import React from 'react'


import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined,SafetyOutlined } from '@ant-design/icons';
import { Steps, Tooltip } from 'antd';


const StepsCustom = ({ step }) => {
    return (
        <>
            <Steps
                direction="vertical"
                className='login'
                current={step - 1}
                items={[
                    {
                        title: <div className="text-sm font-[700] hidden lg:block mt-2">واردکردن شماره موبایل</div>,
                        status: step === 1 ? 'process' : "finish",
                        icon: step === 1 ? <LoadingOutlined className="!text-[25px] md:text-[30px]"/> : <Tooltip title="وارد کردن شماره موبایل"><UserOutlined className="!text-[25px] md:text-[30px]"/></Tooltip>,
                        description: <div className="text-xs text-gray-900 hidden lg:block mt-2 w-[250px]  rounded-md p-1">ثبت نام شما شامل ۳ مرحله زیر است. پس از وارد کردن موبایل و کد ملی خود به یکی از این ۳ مرحله هدایت می‌شوید.</div>
                    },
                    {
                        title: <div className="text-xs font-[700] hidden lg:block mt-2">تایید کد ارسالی</div>,
                        status: step === 2 ? 'process' : step > 2 ? "finish" : 'wait',
                        icon: step === 2 ? <LoadingOutlined className="!text-[25px] md:text-[30px]"/> : <Tooltip title="تایید کد ارسالی"><SolutionOutlined className="!text-[25px] md:text-[30px]"/></Tooltip>,
                        description: <div className="text-xs text-gray-900 hidden lg:block mt-2 w-[250px]">در سامانه سجام ثبت نام کنید و با دریافت کد پیگیری ۱۰ رقمی از تکمیل شدن ثبت نام خود مطمئن شوید.</div>
                    },
                    {
                        title: <div className="text-xs font-[700] hidden lg:block mt-2">تایید کد سجام</div>,
                        status: step === 3 ? 'process' : step > 3 ? "finish" : 'wait',
                        icon: step === 3 ? <LoadingOutlined className="!text-[25px] md:text-[30px]"/> : <Tooltip title="تایید کد سجام"><SafetyOutlined  className="!text-[25px] md:text-[30px]"/></Tooltip>,
                        description: <div className="text-xs text-gray-900 hidden lg:block mt-2 w-[250px]">در سامانه سجام ثبت نام کنید و با دریافت کد پیگیری ۱۰ رقمی از تکمیل شدن ثبت نام خود مطمئن شوید.</div>
                    },
                    {
                        title: <div className="text-xs font-[700] hidden lg:block mt-2">تایید کد سجام</div>,
                        status: step === 4 ? 'process' : "wait",
                        icon: <SmileOutlined />,
                        description: <div className="text-xs text-gray-900 hidden lg:block mt-2 w-[250px]">در سامانه سجام ثبت نام کنید و با دریافت کد پیگیری ۱۰ رقمی از تکمیل شدن ثبت نام خود مطمئن شوید.</div>
                    },
                ]}
            />
        </>
    );
}

export default StepsCustom;