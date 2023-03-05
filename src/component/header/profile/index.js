import React from "react";
import { LeftOutlined, PlusOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export const Profile = () => {
  const wallet = useSelector(state => state.buyBox.wallet)

  return (
    <>
      <div className="flex flex-col items-center mt-20 w-full">
        <div className="w-[90px] h-[90px] rounded-full border border-gray-400 text-4xl flex justify-center items-center ">
          <UserOutlined className="text-gray-400" />
        </div>
        <div className="mt-10 text-base text-gray-500 border-b">
          فرهاد ربیعی
        </div>
        <div className="flex text-gray-400 mt-5 text-xs">
          <div className="mx-1">کیف پول شما:</div>
          <div className="mx-1">{wallet}</div>
          <div>تومان</div>
        </div>
        <div className="text-red-600 flex">
          <span>افزایش اعتبار</span>
          <span><PlusOutlined /></span>
        </div>
        <div className="border-b mx-auto border-gray-300 mt-10 w-[90%]"></div>
        <div className="text-black mt-10 w-full flex flex-col ">
          <div className="h-[40px] w-full flex justify-between px-3">
            <div>لیست تراکنشها</div>
            <div><LeftOutlined className="text-xs " /></div>
          </div>
          <div className="h-[40px] w-full flex justify-between px-3">
            <div>تنظیمات</div>
            <div><LeftOutlined className="text-xs " /></div>
          </div>
        </div>
      </div>
    </>
  );
};
