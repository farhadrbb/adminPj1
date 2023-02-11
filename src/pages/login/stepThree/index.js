import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import {
  useLazySejamCodeQuery,
  useSendotpCodeMutation,
  useSendotpMutation,
} from "../../../redux/api/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LoadingOutlined, LockOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useLazyGetCaptchaApiQuery} from "../../../redux/api/getCaptcha";
import { useSelector } from "react-redux";

const StepThreeLogin = ({ step, setstep, mobile,getUser,nationalCode,resultGetUserProfile }) => {
  const [getCaptcha, resultCaptcha] = useLazyGetCaptchaApiQuery()
  const data = useSelector((state)=>state.authSlice)
  // const [sejamCode,resultSejamCode ] = useLazySejamCodeQuery();
  useEffect(() => {
    console.log("dataaaaaaa",data);
  }, [data]);


  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    getUser({...values,mobile,nationalCode});
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // console.log("resultSejamCode", resultSejamCode);

  useEffect(() => {
    if (resultGetUserProfile.isSuccess) {
      setstep(4)
    }
  }, [resultGetUserProfile]);
  useEffect(() => {
    getCaptcha("getcaptcha")
  }, [getCaptcha]);

  return (
    <>
      <h3 style={{color:"black"}}>در این مرحله کافیست فقط مدارک خودتان را بارگذاری کنید و قرارداد ها را تایید کنید.بعد از تایید ثبت نام شما توسط کارگزاری پیامک حاوی نام کاربری و کلمه عبور برای شما ارسال خواهد شد.</h3>
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
          <Input
            placeholder="کد سجام"
            className="h-[45px] rounded-[10px]"
            prefix={<UserOutlined className="site-form-item-icon !text-[20px] text-cyan-50" />}
            // className='inputCustom border border-cyan-50'
          />
        </Form.Item>
        <Form.Item className="w-full mb-2">
          <div className='flex justify-center items-center rounded-md w-full h-[100px] overflow-hidden'>
            <img src={`data:image/png;base64,${resultCaptcha.data?.data?.captchBase64Data}`} className="w-full h-full" />
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

          <Input placeholder="کد امنیتی"
                 className="h-[45px] rounded-[10px] shadow-md "
                 prefix={<LockOutlined className="site-form-item-icon !text-[20px] text-cyan-50" />}
          />
        </Form.Item>

        <Form.Item className="w-full">
          <Button
            type="primary bg-cyan-50"
            htmlType="submit"
            className="w-full"
            disabled={resultGetUserProfile.isLoading}
          >
            {resultGetUserProfile.isLoading && <LoadingOutlined />}
            {!resultGetUserProfile.isLoading && "کد ارسالی را وارد نمایید"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default StepThreeLogin;
