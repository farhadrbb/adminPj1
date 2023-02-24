import React from 'react'




const BtnCustom = ({ clickFn, icon, title,className ,leftIcon}) => {
    return (
        <>
            <div className={`${className || ''} bg-cyan-50 flex items-center justify-center rounded h-[32px] px-4 cursor-pointer mx-1`} onClick={clickFn}>

                {icon && !leftIcon ? <span className=' mx-1' style={{marginTop:1}}>{icon}</span> : null}
                {title && (<span className='text-xs text-white  mx-1 whitespace-nowrap '>{title}</span>)}
                {icon && leftIcon ? <span className='mx-1 ' style={{marginTop:1}}>{icon}</span> : null}
            </div>
        </>
    );
}

export default BtnCustom;