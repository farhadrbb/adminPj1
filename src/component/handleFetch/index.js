import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/slices/toastSlice';
import Loading from '../loading';


export const HandleFetch = ({ data, notif,loadingTitle }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (data.isSuccess && notif?.flag) {
            dispatch(
                showToast({
                    toastList: [
                        {
                            borderColor: "border-green",
                            description: notif.success ? notif.success : "عملیات با موفقیت انجام شد",
                            icon: "success",
                            title: "عملیات موفق",
                        },
                    ],
                })
            );
        }
        if (data.isError && notif?.flag) {
            dispatch(
                showToast({
                    toastList: [
                        {
                            borderColor: "border-red",
                            description: data?.error?.data?.message || "خطا در ارسال اطلاعات",
                            icon: "error",
                            title: "عملیات ناموفق",
                        },
                    ],
                })
            );
        }
    }, [data.isSuccess, data.isError]);
    return (
        <>
            <div className={`${data.isLoading && data.loading ? 'visible opacity-100 transition-all' : "invisible opacity-0 transition-all h-0 w-0"} flex items-center justify-center`}>
                {loadingTitle && (<span>{loadingTitle}</span>)}
                <Loading />
            </div>
          
        </>
    )
}