import React, { useState } from "react";
import { CreditCardOutlined, LeftOutlined, PlusOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Input, message } from "antd";
import ModalCustom from "../../modalCustom";
import { useLazyGetLinkPayQuery } from "../../../redux/api/getAllData";
import BtnCustom from "../../btn";
import { useEffect } from "react";

export const Profile = () => {
  const wallet = useSelector(state => state.buyBox.wallet)
  const [payModal, setPayModal] = useState(false)
  const [inputSharzh, setinputSharzh] = useState()
  const [messageApi, contextHolder] = message.useMessage()
  const [getLinkPay, resultGetLinkPay] = useLazyGetLinkPayQuery()




  const handleCLickCallApiPay = () => {
    if (inputSharzh > 0) {
      getLinkPay(`PayCash/Payment?Amount=${inputSharzh}`)
      setPayModal(false)
    } else {
      messageApi.open({
        type: 'error',
        content: 'مبلغ را وارد کنید',
      });
      return
    }
  }

  useEffect(() => {
    if (resultGetLinkPay.error?.data) {
        window.location.replace(resultGetLinkPay.error?.data)
    }
}, [resultGetLinkPay])


  return (
    <>
      {contextHolder}
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
        <div className="text-red-600 flex mt-2 text-xs" onClick={() => setPayModal(true)}>
          <span>افزایش اعتبار</span>
          {/* <span><PlusOutlined /></span> */}
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

      <ModalCustom isModalOpen={payModal} setIsModalOpen={setPayModal}>
        <div className='text-base font-bold'>{"شارژ کیف پول"}</div>
        <div className='mt-5 flex flex-col'>
          <Input className='mx-2'
            type='number' v
            alue={inputSharzh}
            onChange={(e) => setinputSharzh(e.target.value)}
            prefix={<CreditCardOutlined />} />
        </div>
        <div className='flex w-full justify-end mt-3'>
          <BtnCustom title={"تایید"} clickFn={() => handleCLickCallApiPay()} />
          <BtnCustom title={"لغو"} className="bg-red-600" clickFn={() => setPayModal(false)} />
        </div>
      </ModalCustom>
    </>
  );
};
