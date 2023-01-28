import { Button, Steps } from "antd";
import React, { useState } from "react";
import UploadImage from "../../component/uploadImage";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import BtnCustom from "../../component/btn";

const UploadPage = () => {
  const [image1, setimage1] = useState();
  const [image2, setimage2] = useState();
  const [image3, setimage3] = useState();
  const [stepUpload, setstepUpload] = useState(1);

  useEffect(() => {
    if (image1) {
      setstepUpload(2);
    }
    if (image2) {
      setstepUpload(3);
    }
  }, [image1]);
  return (
    <>
      <div className="w-full h-full justify-center items-center">
        <div className="text-lg text-black flex justify-center mt-2 mb-5">
          آپلود تصاویر
        </div>
        <div className="w-full hidden sm:block">
          <Steps
            size="small"
            direction="horizontal"
            current={stepUpload - 1}
            items={[
              {
                title: <div className="text-xs">روی کارت ملی</div>,
              },
              {
                title: <div className="text-xs">پشت کارت ملی</div>,
              },
              {
                title: <div className="text-xs">شناسنامه</div>,
              },
            ]}
          />
        </div>

        <div className="w-full h-full  mx-auto">
          <div className="grid grid-cols-12 w-full h-full p-2 xl:gap-x-2">
            <div className="col-span-12 xl:col-span-6 flex justify-center ">
              <div className="flex items-center justify-center w-full">
                <UploadImage setimage={setimage1} image={image1} />
                <div className="my-1 text-xs text-black pr-2 w-[100%]">
                  تصویر رنگی روی اصل کارت ملی هوشمند یا رسید پیشخوان
                </div>
              </div>
            </div>
              <div className=" col-span-12 xl:col-span-6 flex justify-center">
                <div className="flex items-center justify-center w-full">
                  <UploadImage setimage={setimage2} image={image2} />
                  <div className="my-1 text-xs text-black pr-2 w-[100%]">
                    تصویر رنگی پشت اصل کارت ملی یا رسید پیشخوان{" "}
                  </div>
                </div>
              </div>
              <div className=" col-span-12 xl:col-span-6 flex justify-center">
                <div className="flex items-center justify-center w-full">
                  <UploadImage setimage={setimage3} image={image3} />
                  <div className="my-1 text-xs text-black pr-2 w-[100%]">
                    تصویر رنگی پشت اصل کارت ملی یا رسید پیشخوان{" "}
                  </div>
                </div>
              </div>
            {/* <div className="lg:col-span-6 col-span-12  flex justify-center">
                            <div className="w-[300px] h-[300px]">
                                <div className="my-1 text-xs text-black pr-2">تصویر رنگی صفحه اول اصل شناسنامه (همراه شماره سریال) </div>
                                <UploadImage />
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12 flex justify-center">
                            <div className="w-[300px] h-[300px]">
                                <div className="my-1 text-xs text-black pr-2">تصویر رنگی صفحه توضیحات اصل شناسنامه (همراه شماره سریال) </div>
                                <UploadImage />
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="flex justify-center ">
          <BtnCustom title={"ثبت اطلاعات"} className="bg-cyan-50 w-[50%]" icon={<LoadingOutlined/>}/>
        </div>
      </div>
    </>
  );
};

export default UploadPage;
