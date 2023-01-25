import React from 'react'


import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps, Tooltip } from 'antd';


const StepsCustom = ({step}) => {
    return (
        <>
            <Steps
                direction="vertical"
                current={step - 1}
                items={[
                    {
                        title: <div className="text-xs font-[600] hidden lg:block mt-2">واردکردن شماره موبایل</div>,
                        status: step === 1 ? 'process' : "finish",
                        icon: step === 1 ? <LoadingOutlined /> : <Tooltip title="وارد کردن شماره موبایل"><UserOutlined /></Tooltip>,
                        description: <div className="text-xs text-gray-500 hidden lg:block mt-2">شماره موبایل خود را وارد کنید</div>
                    },
                    {
                        title: <div className="text-xs hidden lg:block mt-2">تایید کد ارسالی</div>,
                        status: step === 2 ? 'process' : step > 2 ? "finish" : 'wait',
                        icon: step === 2 ? <LoadingOutlined /> : <Tooltip title="تایید کد ارسالی"><SolutionOutlined /></Tooltip>,
                    },
                    {
                        title: <div className="text-xs hidden lg:block mt-2">تایید کد سجام</div>,
                        status: step === 3 ? 'process' : step > 3 ? "finish" : 'wait',
                        icon: step === 3 ? <LoadingOutlined /> : <Tooltip title="تایید کد سجام"><SmileOutlined /></Tooltip>,
                    },
                    {
                        title: <div className="text-xs hidden lg:block mt-2">تایید کد سجام</div>,
                        status: step === 4 ? 'process' : "wait",
                        icon: <SmileOutlined />,
                    },
                ]}
            />
        </>
    );
}

export default StepsCustom;