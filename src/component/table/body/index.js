import React from 'react'




const BodyTable = ({ infoTable, data }) => {
    return (
        <>
            <tbody >
                {data?.list.map((itm, ind) => (

                    <tr className={`${ind === data.length - 1 ? '' : 'border-b text-slate-600'}`} key={ind}>
                        {infoTable.map((td, indTd) => (
                            <td className={`text-sm font-[400] h-[70px] ${indTd === 0 ? "w-[50px]" : 'w-[100px]'}`} key={indTd} >
                                <div className='flex justify-center '>
                                    {/* {indTd === 0 && ((ind + 1) * data.currentPage)} */}
                                    {/* {data.currentPage !== 1
                                        ? data.currentPage * data.pageSize -
                                        data.pageSize +
                                        (ind + 1)
                                        : ind + 1} */}
                                    {indTd === 0 && (
                                        data.currentPage !== 1
                                            ? data.currentPage * data.pageSize - data.pageSize + (ind + 1)
                                            : ind + 1
                                    )}

                                    {td.selector && td.field ? td.selector(itm[td?.field]) : td.selector && !td.field ? td.selector(itm) : itm[td?.field]}
                                    {/* {td.} */}
                                </div>
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </>
    );
}

export default BodyTable;