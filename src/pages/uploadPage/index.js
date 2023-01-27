import React from 'react';
import UploadImage from '../../component/uploadImage';




const UploadPage = () => {
    return (
        <>
            <div className="w-full h-full justify-center items-center">
                <div className="text-xl text-black flex justify-center mt-5">آپلود تصاویر</div>
                <div className="w-[90%] h-full mt-10 mx-auto">
                    <div className="grid grid-cols-12 w-full h-full  p-10">
                        <div className="lg:col-span-6 col-span-12 flex justify-center">
                            <div >
                                <div className="my-1 text-xs text-black pr-2 mb-1 w-[120px]">تصویر رنگی روی اصل کارت ملی هوشمند یا رسید پیشخوان</div>
                                <UploadImage />
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12  flex justify-center">
                            <div>
                                <div className="my-1 text-xs text-black pr-2 w-[120px]">تصویر رنگی پشت اصل کارت ملی یا رسید پیشخوان </div>
                                <UploadImage />
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12  flex justify-center">
                            <div>
                                <div className="my-1 text-xs text-black pr-2 w-[120px]">تصویر رنگی پشت اصل کارت ملی یا رسید پیشخوان </div>
                                <UploadImage />
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

            </div>
        </>
    );
}

export default UploadPage;