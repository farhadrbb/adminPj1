import React from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import { useLazySejamCodeQuery, useSendotpCodeMutation, useSendotpMutation } from '../../../redux/api/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const StepThreeLogin = ({step,setstep,mobile}) => {

    const [sejamCode,resultSejamCode] = useLazySejamCodeQuery()
    
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log("Success:", values);
        sejamCode(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    useEffect(() => {
        if(resultSejamCode.isSuccess)
        navigate("/")
    }, [resultSejamCode]);
    
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
                    // label="کد سجام"
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input placeholder='کد سجام'/>
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
                    <Input placeholder='کد ملی'/>
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