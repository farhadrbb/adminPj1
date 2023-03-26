import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToast } from '../../redux/slices/buyBox'


const Toast = () => {
    const toast = useSelector(state => state.buyBox.toast)
    const dispatch = useDispatch()

    console.log("toast", toast);
    useEffect(() => {
        setTimeout(() => {
            dispatch(setToast(null))
        }, 3000);
    }, [toast])


    const handleType = () => {
        switch (toast?.type) {
            case 'error':
                return 'bg-red-500'
            case 'success':
                return 'bg-cyan-50'
            case 'warning':
                return 'bg-orange-500'
            default:
                return '';
        }
    }
    return (
        <>
            <div className={`fixed bottom-14 right-3 z-50 transition-all  ${toast ? "translate-x-0" : 'translate-x-[700px]'}`}>
                <div className={`w-[300px] h-[50px] rounded-md flex items-center relative px-2 text-xs ${toast && handleType()}`}>
                    <div className='absolute top-1 left-3 text-lg' onClick={()=>dispatch(setToast(null))}>x</div>
                    <div>{toast?.title}</div>
                </div>
            </div>
        </>
    )
}

export default Toast