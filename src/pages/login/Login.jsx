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
import { Button, Checkbox, Form, Input, Steps } from "antd";
import StepOneLogin from "./stepOne";
import RouteLogin from "./routeLogin";
import StepTwoLogin from "./steoTwo";
import StepThreeLogin from "./stepThree";
import { useLazyGetCaptchaApiQuery } from "../../redux/api/getCaptcha";

import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import StepsCustom from "../../component/steps";
// import { Steps } from 'antd';

const Login = () => {
  const [step, setstep] = useState(1);
  const [mobile, setmobile] = useState("0015451771");




  return (
    <div className="flex  items-center grid-flow-row h-screen relative">
      <div className="h-full flex items-center  rounded-l-[15px]  relative lg:w-[250px] w-[70px] overflow-hidden px-1" style={{ zIndex: 1000 ,backgroundColor:"rgba(255, 255, 255, 0.761)"}}>
       <StepsCustom step={step}/>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex justify-center items-center  w-[98%] xl:w-[950px] h-[650px] rounded-md">

          <div className="flex justify-center items-center flex-col md:w-[75%] w-[95%] h-full lg:rounded-r-[20px] lg:rounded-none rounded-[20px] bg-slate-200 p-3 relative">
            {step > 1 && (
              <div
                className="text-2xl absolute top-5 left-2 text-slate-500  rounded-lg w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
                onClick={() => step > 1 && setstep(step - 1)}>
                <ArrowLeftIcon />
              </div>
            )}
            {/* <img src={logo} alt="logo" className={"mb-8 mt-2"} /> */}

            <div className="flex flex-col items-center w-[75%] md:w-[80%]">
              <h1 className="font-[700] text-xl mb-11 text-slate-700">احراز هویت غیر حضوری</h1>
              <RouteLogin step={step}>
                <StepOneLogin setstep={setstep} step={step} setmobile={setmobile} />
                <StepTwoLogin setstep={setstep} step={step} mobile={mobile}/>
                <StepThreeLogin setstep={setstep} step={step} />
              </RouteLogin>
            </div>
          </div>

          <img
            src={image}
            alt="forest image"
            className="w-[70%] h-full rounded-l-[20px] overflow-hidden hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
