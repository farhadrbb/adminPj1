import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, Eye, EyeSlash } from "../../assest/icon/index";
import image from "../../assest/login.jpg";
import logo from "../../assest/logo.png";
// import {useLoginAdminMutation} from "../../redux/services/auth";
import { useNavigate } from "react-router-dom";
import useForm from "../../utils/customHook/useForm";
import validate from "./validate";
import { generateId } from "../../utils/commonFn";
import { HandleFetch } from "../../component/handleFetch";
import { useLazyGetDataQuery } from "../../redux/api/crudData";
import { Button, Checkbox, Form, Input } from "antd";
import StepOneLogin from "./stepOne";
import RouteLogin from "./routeLogin";
import StepTwoLogin from "./steoTwo";
import StepThreeLogin from "./stepThree";

const Login = () => {
  const [loginPerson, response] = useLazyGetDataQuery();
  //   const [seePassword, setSeePassword] = useState(false);
  //   const navigate = useNavigate();

  const [step, setstep] = useState(1);
  const [otpCode, setotpCode] = useState("2");
  const [mobile, setmobile] = useState("0015451771");

  // useEffect(() => {
  //     if (response.isSuccess){
  //         localStorage.setItem('auth',response?.data?.data?.token)
  //         navigate('/')
  //     }
  // }, [response])

  //   const login = () => {
  //     let deviceId = localStorage.getItem("deviceId");
  //     if (!deviceId) {
  //       localStorage.setItem("deviceId", generateId());
  //       deviceId = localStorage.getItem("deviceId");
  //     }
  //     // loginPerson({username: values.username, password: values.password, deviceId});
  //   };

  //   const { values, errors, handleChange, handleSubmit } = useForm(
  //     login,
  //     validate
  //   );

  console.log("step", step);

  return (
    <div className="grid place-items-center h-screen">
      <div className="flex justify-center items-center md:w-[768px] w-[80%] lg:w-[1024px] h-[650px] rounded-md ">
        <div className="flex justify-center items-center flex-col md:w-[50%] w-full h-full rounded-r-lg bg-slate-200 p-3 relative">
          <div className="text-2xl absolute top-5 left-2 text-slate-500 border-2 border-black rounded-lg w-[40px] h-[40px] flex justify-center items-center" onClick={()=> step > 1 && setstep(step-1)}><ArrowLeftIcon/></div>
          <img src={logo} alt="logo" className={"mb-8 mt-2"} />

          <div className="flex flex-col items-center w-full">
            <h1 className="font-[700] text-2xl mb-11 text-slate-500">احراز هویت غیر حضوری</h1>
            <RouteLogin step={step}>
              <StepOneLogin setstep={setstep} step={step} setmobile={setmobile}/>
              <StepTwoLogin setstep={setstep} step={step} mobile={mobile}/>
              <StepThreeLogin setstep={setstep} step={step}/>
            </RouteLogin>
          </div>
        </div>

        <img
          src={image}
          alt="forest image"
          className="w-[50%] h-full rounded-l-lg overflow-hidden hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Login;
