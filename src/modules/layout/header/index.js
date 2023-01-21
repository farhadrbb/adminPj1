import React from "react";
import { useLocation } from "react-router-dom";
import { OpenmenuIcon } from "../../../assest/icon";

const Header = ({ setClickMenu }) => {
    const location = useLocation()
    // console.log(location,"pathnam")
    const ChangingTitle = () => {
        switch (location.pathname) {

            case "/admins":
                return "ادمین ها"
            case "/createAdmin":
                return "لیست ادمین ها / ایجاد"
            case "/person":
                return "کاربران"
            case "/events":
                return "رویداد ها"
            case "/content":
                return "محتوا"
            case "/content/createContent":
                return "لیست محتوا / ایجاد / مشخصات"
            case "/categories":
                return "دسته بندی"
            case "/comments":
                return "کامنت ها"
            case "/Roles":
                return "نقش ها"
            case "/giftcode":
                return "کد هدیه"
            case "/transactions":
                return "تراکنش ها"
            case "/setting":
                return "تنظیمات"
            case '/slider':
                return "تنظیمات / بنر اصلی"
            case '/slider/updateSlider':
                return "تنظیمات / بنر اصلی"
            case '/banner':
                return "تنظیمات / بنر"
            case '/header':
                return 'تنظیمات/هدر'
            case '/mainpageContent':
                return 'تنظیمات/محتوای صفحه اصلی'
            case '/footer':
                return 'تنظیمات / فوتر'
            case '/notificationBanner':
                return 'تنظیمات / بنر اطلاعیه'
            case '/forbidenwords':
                return 'کلمات ممنوعه'
            case '/allcoments':
                return 'کامنت ها'
            default:
                return
        }

    }
    return (
        <>
            <div className=" min-h-[50px] max-h-[50px] bg-slate-200 shadow-2xl text-[14px] w-[97%] flex items-center px-3  mx-auto "
                style={{ boxShadow: '0 0 10px lightgray',borderRadius:10 }}
            >
                <div className=" xl:hidden text-[20px] text-slate-500 cursor-pointer" onClick={() => setClickMenu(true)}><OpenmenuIcon /></div>
                <h1 className="text-slate-600 mr-3">{ChangingTitle()}</h1>
            </div>
        </>
    )
}

export default Header
