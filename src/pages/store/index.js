import React from 'react';
import MenuResturant from './menuResturant';
import TabsCustom from './tabs';



let itemsTabs = [
    {
        label: `منو`,
        key: 1,
        children: <MenuResturant />,
    },
    {
        label: `اطلاعات`,
        key: 2,
        children: <div className="h-[600px] overflow-y-auto">info</div>,
    }
]
const Store = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-x-4 mx-auto w-[90%] mt-10">
                <div className="col-span-12 lg:col-span-8 bg-gray-100 rounded-[20px] shadow-lg p-3">
                    <TabsCustom itemsTabs={itemsTabs} type={"card"} />
                    {/* <TabsCustom itemsTabs={itemsTabs} /> */}
                </div>
                <div className="col-span-4 bg-gray-100 p-5 rounded-[20px] shadow-lg text-black hidden lg:block">
                    <div className="mb-3">سبد خرید</div>
                    <div className="w-full h-[80px] border-b flex flex-col justify-center border-gray-300 border-t p-2">
                        <div className="text-lg">پیتزا یونایی</div>
                        <div className="mt-2 text-xs">
                            <span>262.000</span>
                            <span>تومان</span>
                        </div>
                    </div>
                    <div className="w-full h-[80px] border-b flex flex-col justify-center border-gray-300  p-2">
                        <div className="text-lg">پیتزا سبزیجات</div>
                        <div className="mt-2 text-xs">
                            <span>262.000</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Store;