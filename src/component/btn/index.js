import React from 'react'
import Loading from '../loading';




const BtnCustom = ({ clickFn, icon, title, className, leftIcon, loading }) => {
    return (
        <>
            <div className={`${className || ''} bg-cyan-50 flex items-center justify-center rounded h-[32px] px-4 cursor-pointer mx-1`} onClick={clickFn}>
                {loading && <Loading />}
                {icon && !leftIcon && !loading ? <span className=' mx-1' style={{ marginTop: 1 }}>{icon}</span> : null}
                {title && !loading ? (<span className='text-xs text-white  mx-1 whitespace-nowrap '>{title}</span>) : ''}
                {icon && leftIcon && !loading ? <span className='mx-1 ' style={{ marginTop: 1 }}>{icon}</span> : null}
            </div>
        </>
    );
}

export default BtnCustom;