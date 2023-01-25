import React from "react";
import { Button, Checkbox, Form, Image, Input } from "antd";
import {
  useSendotpCodeMutation,
  useSendotpMutation,
} from "../../../redux/api/auth";
import { useLazyGetCaptchaApiQuery } from "../../../redux/api/getCaptcha";
import { useEffect } from "react";

import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Timer from "../../../component/timer";

const StepTwoLogin = ({ step, setstep, mobile }) => {
  const [sendotpCode, resultSendOtpCode] = useSendotpCodeMutation();
  const [getCaptcha, resultCaptcha] = useLazyGetCaptchaApiQuery();
  const [setOtp, resultOtp] = useSendotpMutation();

  useEffect(() => {
    getCaptcha("getcaptcha");
  }, [getCaptcha]);

  const onFinish = (values) => {
    console.log("Success:", values);
    sendotpCode({ ...values, mobile });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (resultSendOtpCode.isSuccess) {
      setstep(3);
    }
  }, [resultSendOtpCode]);

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
          className="mb-0"
          name="otp"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="کد ارسالی"
            className="h-[40px] rounded-[10px]"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <div className="w-full justify-center flex mb-10 mt-1">
          <Timer
            initialSeconds={10}
            handleClickAgain={() => setOtp({ mobile })}
          />
        </div>

        <Form.Item
          // label="کد ملی"
          className="mb-10"
          name="nationalCode"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            placeholder="کد ملی"
            className="h-[40px] rounded-[10px]"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item className="w-full mb-2">
          <div className="flex justify-center items-center rounded-md w-ful h-[100px] overflow-hidden">
            <img
              src={`data:image/png;base64,${resultCaptcha.data?.data?.captchBase64Data}`}
              className="w-full h-full"
            />

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
          <Input
            placeholder="کد امنیتی"
            // className='inputCustom border border-cyan-50'
            className="h-[40px] rounded-[10px]"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
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
};

export default StepTwoLogin;
