
import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Image, Input } from "antd";
import { useSendotpMutation } from '../../../redux/api/auth';
import { useLazyGetCaptchaApiQuery } from '../../../redux/api/getCaptcha';




const StepOneLogin = ({ setstep, step, setmobile }) => {

    const [setOtp, resultOtp] = useSendotpMutation()
    const [getCaptcha, resultCaptcha] = useLazyGetCaptchaApiQuery()
    

    useEffect(() => {
        getCaptcha("getcaptcha")
    }, [getCaptcha]);


    const onFinish = (values) => {
        setmobile(values.mobile)
        setOtp(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    useEffect(() => {
        if (resultOtp.isSuccess) {
            setstep(2)
        }
    }, [resultOtp]);



    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="justify-center flex flex-col w-full"
                layout="vertical"
            >
                <div className='grid grid-cols-12 '>
                    <div className='col-span-12'>
                        <Form.Item
                            // label="شماره موبایل"
                            className='mb-10'
                            name="mobile"
                            rules={[
                                {
                                    required: true,
                                    message: "شماره موبایل را وارد کنید",
                                },
                                // {
                                //     pattern: ^(\+98|0)?9\d{9}$,
                                //     message: "شماره موبایل اشتباه است",
                                // },
                            ]}
                        >

                            <Input placeholder="شماره موبایل" className='inputCustom border-0 !border-b border-cyan-50  '/>
                        </Form.Item>

                        <Form.Item className="w-full mb-2">
                            <div className='flex justify-center items-center rounded-md w-full h-[100px] overflow-hidden'>
                                <img src={`data:image/png;base64,${resultCaptcha.data?.data?.captchBase64Data}`} className="w-full h-full" />

                                {/* <Image
                                    width={250}
                                    height={100}
                                    src=""
                                /> */}
                            </div>
                        </Form.Item>
                        <Form.Item
                            // label="شماره موبایل"
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: "متن داخل عکس را وارد کنید",
                                },
                                // {
                                //     pattern: ^(\+98|0)?9\d{9}$,
                                //     message: "شماره موبایل اشتباه است",
                                // },
                            ]}
                        >

                            <Input placeholder="کد امنیتی" className='inputCustom border border-cyan-50'/>
                        </Form.Item>

                        <Form.Item className="w-full mt-20">
                            <Button
                                type="primary bg-cyan-50"
                                htmlType="submit"
                                className="w-full"
                            >
                                ورود
                            </Button>
                        </Form.Item>
                    </div>
                </div>

            </Form>
        </>
    );
}

export default StepOneLogin;