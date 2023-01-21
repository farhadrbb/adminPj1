import React from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import { useSejamCodeMutation, useSendotpCodeMutation, useSendotpMutation } from '../../../redux/api/auth';



const StepThreeLogin = ({step,setstep,mobile}) => {

    const [sejamCode,resultSejamCode] = useSejamCodeMutation()

    const onFinish = (values) => {
        console.log("Success:", values);
        sejamCode(values)
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
                    label="کد سجام"
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="کد ملی"
                    name="nationalCode"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
             
                <Form.Item className="w-full">
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

export default StepThreeLogin;