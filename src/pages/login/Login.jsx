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

import StepsCustom from "./steps";
import UploadPage from "../uploadPage";
import logo from "../../assest/logo.png";
import {
  useGetUserProfileMutation,
  useLazySejamCodeQuery,
} from "../../redux/api/auth";

const Login = () => {
  const [step, setstep] = useState(1);
  const [mobile, setmobile] = useState("");
  const [nationalCode, setnationalCode] = useState("");

  const [getUser, resultGetUserProfile] = useGetUserProfileMutation();

  console.log("resultGetUserProfile", resultGetUserProfile);

  return (
    <div className="flex  items-center grid-flow-row h-screen relative lg:p-3 p-1">
      <StepsCustom step={step} />
      <div className="w-full flex p-[20px] py-[10px] flex-col justify-center items-center">
        <div className="flex justify-center items-center  w-[100%]  rounded-md">
          <divresultSejamCode
            className={`flex  items-center flex-col md:w-[100%] w-[100%] h-full  rounded-[20px] bg-slate-100 p-3 relative ${
              step === 3 ? "pt-10" : "justify-center"
            }`}
          >
            {step > 1 && (
              <div
                className="text-2xl absolute top-5 left-2 text-slate-500  rounded-lg w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
                onClick={() => step > 1 && setstep(step - 1)}
              >
                <ArrowLeftIcon />
              </div>
            )}
            {/* <img src={logo} alt="logo" className={"mb-8 mt-2"} /> */}

            <div className="flex flex-col justify-center items-center w-[90%] h-full">
              <div className="flex text-black justify-center text-sm sm:text-lg mb-2">
                سامانه افتتاح حساب غیرحضوری کارگزاری نگاه نوین
              </div>
              <div className="mb-3">
                <img src={logo} />
              </div>
              <h1 className="font-[700] text-lg mb-5 text-slate-700">
                احراز هویت غیر حضوری
              </h1>
              {/* <h6 className="text-sm text-slate-700 mb-2">
                {step === 1
                  ? " لطفا شماره موبایل ثبت شده در سجام را برای دریافت کد تایید وارد کنید"
                  : ""}
              </h6> */}
              <RouteLogin step={step}>
                <StepOneLogin
                  setstep={setstep}
                  step={step}
                  setmobile={setmobile}
                />
                <StepTwoLogin
                  setstep={setstep}
                  step={step}
                  mobile={mobile}
                  setnationalCode={setnationalCode}
                />
                <StepThreeLogin
                  setstep={setstep}
                  step={step}
                  getUser={getUser}
                  resultGetUserProfile={resultGetUserProfile}
                  nationalCode={nationalCode}
                />
                <UploadPage resultGetUserProfile={resultGetUserProfile} />
              </RouteLogin>
            </div>
          </divresultSejamCode>

          {/* <img
            src={image}
            alt="forest image"
            className="w-[70%] h-full rounded-l-[20px] overflow-hidden hidden lg:block"
          /> */}
        </div>
      </div>
      <div
        className="  rounded-[15px] text-xs  flex-col items-center   relative lg:min-w-[300px] w-[300px] xl:min-w-[320px] xl:w-[300px] hidden lg:flex overflow-hidden px-2  bg-slate-100"
        style={{ zIndex: 1000, overflow: "auto", height: "100%" }}
      >
        <div className="w-[100px] h-[100px] bg-cyan-50 mt-20 grid place-content-center rounded-full">
          <UserOutlined className="text-[40px]" />
        </div>
        {/* <StepsCustom step={step}/> */}
        <ul className="text-black mt-5 pr-1">
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-red-50" />
            </div>
            <div className="text-center">
              {" "}
              سایت کارگزاری نگاه نوین با استفاده از پروتکل امن SSL به مشتریان
              خود ارائه خدمت نموده و با آدرس https://usereg.nnovin.ir شروع می
              شود.
            </div>
          </li>
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-red-50" />
            </div>
            <div className="text-center">
              لطفا پیش از ورود هرگونه اطلاعات، آدرس موجود در بخش مرورگر وب خود
              را با آدرس فوق مقایسه نمایید و درصورت مشاهده هر نوع مغایرت
              احتمالی، از ادامه کار منصرف شده و موضوع را با ما در میان بگذارید.
            </div>
          </li>
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-red-50" />
            </div>
            <div className="text-center text-xs">
              برای حفاظت از اطلاعات حساب کاربری خود، حتی المقدور از صفحه کلید
              مجازی استفاده نمایید.
            </div>
          </li>
          <li className="mt-4 flex">
            <div className="text-xl ml-2">
              {" "}
              <SafetyOutlined className="text-red-50" />
            </div>
            <div className="text-center">
              هرگز اطلاعات حساب کاربری (نام کاربری و رمز عبور) خود را در اختیار
              دیگران قرار ندهید. پس از اتمام کار با سامانه، حتما بر روی دکمه
              خروج از سامانه کلیک کنید
            </div>
          </li>
        </ul>
        <div className="mt-10 text-gray-600 text-center">
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
