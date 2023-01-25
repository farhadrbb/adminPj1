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
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";

const StepThreeLogin = ({ step, setstep, mobile }) => {
  const [sejamCode, resultSejamCode] = useLazySejamCodeQuery();

  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    sejamCode(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log("resultSejamCode", resultSejamCode);

  useEffect(() => {
    if (resultSejamCode.isSuccess) {
      navigate("/");
    }
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
          <Input
            placeholder="کد سجام"
            className="h-[40px] rounded-[10px]"
            prefix={<UserOutlined className="site-form-item-icon" />}
            // className='inputCustom border border-cyan-50'
          />
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
          <Input
            placeholder="کد ملی"
            prefix={<UserOutlined className="site-form-item-icon" />}
            // className='inputCustom border border-cyan-50'
            className="h-[40px] rounded-[10px]"
          />
        </Form.Item>

        <Form.Item className="w-full">
          <Button
            type="primary bg-cyan-50"
            htmlType="submit"
            className="w-full"
            disabled={resultSejamCode.isLoading}
          >
            {resultSejamCode.isLoading && <LoadingOutlined />}
            {!resultSejamCode.isLoading && "کد ارسالی را وارد نمایید"}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default StepThreeLogin;
