import { ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';




const BuyBoxMobile = ({setModalOpen}) => {

    const count = useSelector(state => state.buyBox.count)
    const sumPrice = useSelector(state => state.buyBox.sumPrice)

    const handleClickBuyBox = ()=>{
        let el = document.getElementById('scroll')
        el.scrollTo(0,0)
        setModalOpen(true)
    }

    return (
        <>
            <div
                className="fixed bottom-0 left-0 text-black w-full h-[45px]  shadow-xl cursor-pointer  bg-white flex justify-between  items-center px-5 lg:hidden z-50"
                onClick={() => handleClickBuyBox()}
                style={{ boxShadow: '0 0 10px gray' }}
            >
                <div className="flex items-center">
                    <ShoppingCartOutlined className="text-xl text-gray-600" />
                    <div className="text-xs text-gray-600 ml-2 ">سبد خرید:</div>
                    <div className="flex justify-center items-center   rounded-full mt-1">
                        {count}
                    </div>
                </div>
                <div className="w-[120px] h-[30px] bg-cyan-50 flex justify-center items-center rounded text-xs text-white ">
                    <div className="mt-[2px]">{sumPrice}</div>
                    <div className="mx-1">تومان</div>
                </div>
            </div>
        </>
    );
}

export default BuyBoxMobile;