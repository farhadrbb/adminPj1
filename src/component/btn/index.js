import React from 'react'




const BtnCustom = ({ clickFn, icon, title }) => {
    return (
        <>
            <div className='bg-cyan-50 flex items-center justify-center rounded h-[32px] px-4 cursor-pointer mx-2' onClick={clickFn}>
                {icon && (icon)}
                {title && (<span className='text-sm text-white  mx-1 whitespace-nowrap'>{title}</span>)}
            </div>
        </>
    );
}

export default BtnCustom;