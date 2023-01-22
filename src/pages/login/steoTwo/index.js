import React from 'react';
import { Button, Checkbox, Form, Image, Input } from "antd";
import { useSendotpCodeMutation, useSendotpMutation } from '../../../redux/api/auth';
import { useLazyGetCaptchaApiQuery } from '../../../redux/api/getCaptcha';
import { useEffect } from 'react';



const StepTwoLogin = ({ step, setstep, mobile }) => {

    const [sendotpCode, resultSendOtpCode] = useSendotpCodeMutation()
    const [getCaptcha, resultCaptcha] = useLazyGetCaptchaApiQuery()

    useEffect(() => {
        getCaptcha("getcaptcha")
    }, [getCaptcha]);

    const onFinish = (values) => {
        console.log("Success:", values);
        sendotpCode({ ...values, mobile })
        setstep(3)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

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
                <Form.Item
                    // label="کد ارسالی"
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input placeholder='کد ارسالی' />
                </Form.Item>
                <Form.Item
                    // label="کد ملی"
                    name="nationalCode"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input placeholder='کد ملی' />
                </Form.Item>

                <Form.Item className="w-full">
                    <div className='flex justify-center items-center rounded-md w-[250px] h-[100px] overflow-hidden'>
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

                    <Input placeholder="کد امنیتی" />
                </Form.Item>

                <Form.Item className="w-full mt-20">
                    <Button
                        type="primary bg-cyan-50"
                        htmlType="submit"
                        className="w-full"
                    >
                        کد ارسالی را وارد نمایید
                    </Button>
                </Form.Item>

            </Form>
        </>
    );
}

export default StepTwoLogin;