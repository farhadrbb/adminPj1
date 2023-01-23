import React, { useEffect, useState } from 'react'
import Table from '../../component/table';
// import { EyeIcon } from "../../../assets/icon";
import { useNavigate } from "react-router-dom";
import Login from '../login/Login';
// import { useBreadCrumb } from '../../../cusomHook/useBreadCrumb';
// import { convertDateMiladiToShamsi, convertEnglishNumberToPersian } from '../../../utils/commonFn';


// import { useLazyGetAllRolesQuery } from "../../redux/services/role";


const Home = () => {

    const navigate = useNavigate();
    // const [getRoles, result] = useLazyGetAllRolesQuery();


    // useEffect(() => {
    //     setBreadCrumb({
    //         textHead: "لیست درخواست ها",
    //         // textContent: ["ss", "ff"],
    //         // backBtn: () => handleClickBack(),
    //         // status: <div className="btn-status-breadCrump border-blue bg-blue-100 text-blue">در حال بررسی</div>
    //     })
    // }, []);

    let infoTable = [
        {
            head: "ردیف",
            field: "value",
        },
        {
            head: "شماره درخواست",
            field: "requestNo",
            filter: "search",
            selector: (data) => (<div>{data?.slice(0, 10)}</div>)
            // error: {
            //     required: true,
            //     pattern: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
            //     message: "شماره موبایل اشتباه است"
            // }
        },
        {
            head: "تاریخ درخواست",
            field: "requestDate",
            filterField: ["from", "to"],
            filter: "dateFromTo",
            // selector: (data) => convertEnglishNumberToPersian(convertDateMiladiToShamsi(data))
        },
        {
            head: "نوع رویه ",
            field: "declarerComment",
            selector: (data) => (<div>{data?.slice(0, 10)}</div>)
        },

        {
            head: "گمرگ",
            field: "procedure",
        },
        {
            head: "نام متقاضی ",
            field: "applierName",
        },
        {
            head: "شناسه / کدملی صاحب کالا ",
            field: "applierNationalNo",
        },
        {
            head: "وضعیت",
            // field: "throughTransportState",
            selector: (data) => <div className={`py-[1px] px-2 border rounded ${data?.state === 1 ? "bg-[#DCE5FC] border-[#0468DB] text-[#0468DB]" : data?.state === 2 ? "bg-green-100 border-green-500 text-green-500" : "bg-red-100 border-red-500 text-red-500"}`}>{data?.throughTransportState}</div>
        },
        {
            head: "عملیات",
            field: "requestNo",
            selector: (data) => <div className='cursor-pointer' onClick={() => navigate(`/cartable/shipping/${data}`)}>
                {/* <EyeIcon /> */}
            </div>
        },
    ];

    const handleClickBack = () => {
        console.log("back");
    }

    return (
        <div className='w-full '>
            <Table
                infoTable={infoTable}
                url="FindAll"
            // filterParam={filterParam}
            // noFilter
            />
        </div>
    );
}

export default Home;