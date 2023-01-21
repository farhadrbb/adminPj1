import React from 'react'

const HeadTable = ({ infoTable }) => {
    return (
        <>
            <thead className='bg-slate-300'>
                <tr>
                    {infoTable.map((itm, ind) => (
                        <th key={ind} className={`text-slate-600 h-[70px] lg:text-sm font-[400]  text-xs relative ${ind === 0 ? "w-[50px]" : 'w-[100px]'}`}>
                            <div>{itm.head}</div>
                            {ind != 0 && (
                                <div className='min-w-[1px] max-w-[1px] rounded bg-slate-300 h-[20px] absolute top-[50%] translate-y-[-50%] bottom-0 right-[1px]'></div>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    );
}

export default HeadTable;