import React, { useState } from "react";
import DataPick from "../data";
import Input from "../input";
import Status from "../status";

const FilterTable = ({ infoTable, filerState }) => {

    const [filterList, setFilterList] = useState({});
    const [selectedItem, setSelectedItem] = useState(options[2]);


    const handleFilter = () => {
        filerState({ ...filterList, isActive: selectedItem.value })
    }

    const handleChange = (value, name) => {
        setFilterList(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const changingFilter = (d2) => {
        switch (d2.filter) {
            case "date":
                return (
                    <div className="flex flex-col">
                        <div className="my-1">
                            <DataPick />
                        </div>
                        <div>
                            <DataPick />
                        </div>
                    </div>
                );
            case "status":

                return <Status options={d2.options || options} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            case "search":
                return <Input name={d2.field} handleChange={handleChange} />;
            case "range":
                return <div className="flex flex-col">
                    <div className="my-1">
                        <Input name={d2.fieldFilter[0]} handleChange={handleChange} />
                    </div>
                    <div>
                        <Input name={d2.fieldFilter[1]} handleChange={handleChange} />
                    </div>
                </div>;
            default:
                return
        }
    };
    const input1 = infoTable.map((d2, ind) => {
        return (
            <td className="py-[10px]" key={`tdFilter${ind}`}>
                {ind === infoTable.length - 1 ? (
                    <div className="w-full flex items-center justify-center relative">
                        <button className="btn-searching" onClick={() => handleFilter()}>
                            جستجو و فیلتر
                        </button>
                        <div className="absolute top-0 bottom-0 right-[-2px]  w-[1px] h-[30px] bg-[#40455C]"></div>
                    </div>
                ) : (<div className="flex justify-center w-full">{changingFilter(d2)}</div>)}
            </td>
        );
    });
    return (
        <>
            <tr className="h-[80px]">
                {input1}
                {/*<td className="py-[10px]">*/}
                {/*  <div className="relative flex justify-center w-full">*/}
                {/*    <div className="line"></div>*/}
                {/*    <button className="btn-searching">*/}
                {/*      جستجو و فیلتر*/}
                {/*    </button>*/}
                {/*  </div>*/}
                {/*</td>*/}
            </tr>
        </>
    );
};

export default FilterTable;

// const data2 = [
//   {
//     component: <Input type={"user"} />,
//   },
//   {
//     component: <Input />,
//   },
//   {
//     component: <Input />,
//   },
//   {
//     component: <Input />,
//   },
//   {
//     component: (
//       <div className="flex flex-col">
//         <div className="my-1"><DataPick /></div>
//         <DataPick />
//       </div>
//     ),
//   },
//   {
//     component: <Input />,
//   },
// ];

const options = [
    {
        label: "فعال",
        value: true,
    },
    {
        label: "غیر فعال",
        value: false,
    },
    {
        label: "همه",
        value: "",
    },
];

