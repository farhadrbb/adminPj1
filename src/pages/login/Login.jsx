import React, { useEffect, useState } from "react";
import { ArrowLeftIcon, Eye, EyeSlash } from "../../assest/icon/index";
import StepOneLogin from "./stepOne";
import RouteLogin from "./routeLogin";
import StepTwoLogin from "./steoTwo";
import StepThreeLogin from "./stepThree";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

import StepsCustom from "../../component/steps";
import UploadPage from "../uploadPage";

const Login = () => {
  const [step, setstep] = useState(1);
  const [mobile, setmobile] = useState("0015451771");

  return (
    <div className="flex  items-center grid-flow-row h-screen relative">
      <div
        className="h-full flex items-center  rounded-l-[15px] relative lg:w-[650px] w-[70px] overflow-hidden px-1 bg-slate-300"
        style={{ zIndex: 1000 }}
      >
        <StepsCustom step={step} />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center text-lg mb-2">
          سامانه افتتاح حساب غیرحضوری کارگزاری نگاه نوین
        </div>
        <div className="flex justify-center items-center  w-[98%] xl:w-[1000px] h-[650px] rounded-md">
          <div className="flex justify-center items-center flex-col md:w-[75%] w-[95%] h-full  rounded-[20px] bg-slate-200 p-3 relative">
            {step > 1 && (
              <div
                className="text-2xl absolute top-5 left-2 text-slate-500  rounded-lg w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
                onClick={() => step > 1 && setstep(step - 1)}
              >
                <ArrowLeftIcon />
              </div>
            )}
            {/* <img src={logo} alt="logo" className={"mb-8 mt-2"} /> */}

            <div className="flex flex-col items-center w-[85%]">
              <h1 className="font-[700] text-xl mb-11 text-slate-700">
                احراز هویت غیر حضوری
              </h1>
              <h6 className="text-sm text-slate-700 mb-2">
               {step === 1 ? " لطفا شماره موبایل ثبت شده در سجام را برای دریافت کد تایید وارد کنید":''}
              </h6>
              <RouteLogin step={step}>
                <UploadPage/>
                <StepOneLogin
                  setstep={setstep}
                  step={step}
                  setmobile={setmobile}
                />
                <StepTwoLogin setstep={setstep} step={step} mobile={mobile} />
                <StepThreeLogin setstep={setstep} step={step} />
              </RouteLogin>
            </div>
          </div>

          {/* <img
            src={image}
            alt="forest image"
            className="w-[70%] h-full rounded-l-[20px] overflow-hidden hidden lg:block"
          /> */}
        </div>
      </div>
      <div
        className="h-full  rounded-r-[15px] text-xs flex flex-col items-center  relative lg:w-[600px] hidden lg:flex overflow-hidden px-1 bg-slate-300"
        style={{ zIndex: 1000 }}
      >
        <div className="w-[100px] h-[100px] bg-red-100 mt-20"></div>
        {/* <StepsCustom step={step}/> */}
        <ul className="text-black mt-5 pr-2">
          <li className="mt-4 flex">
            <div className="text-xl ml-2 ">
              {" "}
              <SafetyOutlined className="text-blue-500"/>
            </div>
            <div>
              {" "}
              سایت کارگزاری نگاه نوین با استفاده از پروتکل امن SSL به مشتریان
              خود ارائه خدمت نموده و با آدرس https://usereg.nnovin.ir شروع می
              شود. F
            </div>
          </li>
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-blue-500"/>
            </div>
            لطفا پیش از ورود هرگونه اطلاعات، آدرس موجود در بخش مرورگر وب خود را
            با آدرس فوق مقایسه نمایید و درصورت مشاهده هر نوع مغایرت احتمالی، از
            ادامه کار منصرف شده و موضوع را با ما در میان بگذارید.
          </li>
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-blue-500"/>
            </div>
            برای حفاظت از اطلاعات حساب کاربری خود، حتی المقدور از صفحه کلید
            مجازی استفاده نمایید.
          </li>
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-blue-500"/>
            </div>
            هرگز اطلاعات حساب کاربری (نام کاربری و رمز عبور) خود را در اختیار
            دیگران قرار ندهید. پس از اتمام کار با سامانه، حتما بر روی دکمه خروج
            از سامانه کلیک کنید
          </li>
        </ul>
        <div className="mt-10 text-gray-600">
          سامانه افتتاح حساب غیرحضوری کارگزاری نگاه نوین
        </div>
        <div className="mt-5 p-3 pr-4 text-black text-sm text-center">
          کاربر گرامی، درصورت نیاز به هرگونه راهنمایی و آموزش با شماره تلفن های
          زیر تماس حاصل فرمایید 41562313-021 41562316-021
        </div>
      </div>
    </div>
  );
};

export default Login;
