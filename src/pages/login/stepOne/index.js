
import React from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import { useSendotpMutation } from '../../../redux/api/auth';




const StepOneLogin = ({setstep,step,setmobile}) => {

    const [setOtp, resultOtp] = useSendotpMutation()
    console.log("resultOtp", resultOtp);

    const onFinish = (values) => {
        console.log("Success:", values);
        setOtp(values.mobile)
        setmobile(values.mobile)
        setstep(2)
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
                        label="شماره موبایل"
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
                        <Input placeholder="input placeholder" />
                    </Form.Item>

                    <Form.Item className="w-full">
                        <Button
                            type="primary bg-cyan-50"
                            htmlType="submit"
                            className="w-full"
                        >
                            ورود
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
}

export default StepOneLogin;