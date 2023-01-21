import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { ArrowLeftPaginatetIcon, ArrowRightPaginatetIcon } from '../../../assest/icon';



const PaginateCustom = ({ data, handlePageClick, forcePage, setFilter, filter, setForcePage }) => {
    const [flagCountPage, setflagCountPage] = useState(false);
    const [pageSizeState, setpageSizeState] = useState(10);

    const handlePageSize = (num) => {
        setpageSizeState(num)
        if (filter?.page > 0) {
            setFilter((prev) => ({ ...prev, pageSize: num, page: 0 }))
            setForcePage(0)
        } else {

            setFilter((prev) => ({ ...prev, pageSize: num }))
        }
    }

    let page = data?.data?.data?.currentPage
    let size = data?.data?.data?.pageSize 
    let total = data?.data?.data?.totalCount

    return (
        <>
            <div className='flex mt-3 items-center' >

                <ReactPaginate
                    nextLabel={<div><ArrowLeftPaginatetIcon/></div>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={data?.data?.data?.totalPages || 1}
                    forcePage={forcePage}
                    previousLabel={<div><ArrowRightPaginatetIcon/></div>}
                    renderOnZeroPageCount={null}
                    activeClassName={"activePage"}
                    className="pagination"
                    previousClassName="page-link"

                />

                <div className='mr-5 flex items-center text-xs ' >
                    <div className='text-gray-500'>نمایش</div>
                    <div className='text-black mx-1'>
                        {(page + (page * size)) - page < total ? (page + (page * size)) - page : total}
                        {"-"}
                        {page != 1 ?
                            (page + (page * size) - size) - page + 1
                            : page}
                    </div>
                    <div className='text-gray-500'>عنوان از</div>
                    <div className='text-black mx-1'>{total}</div>
                </div>
                <div className='flex text-xs mr-5 items-center relative'>
                    <div className='flex items-center cursor-pointer' onClick={() => setflagCountPage(!flagCountPage)} >
                        <div className='text-gray-500'>تعداد نمایش:</div>
                        <div className='mr-1 '>{pageSizeState}</div>
                        <div className={`${flagCountPage && "-rotate-90"} mr-2 text-gray-500 transition-all`}><ArrowLeftPaginatetIcon/></div>
                    </div>
                    {flagCountPage && (
                        <>
                            <ul className='m-0 p-0 absolute top-7 bg-white lef-0 !shadow-2xl border rounded-md w-full flex flex-col items-center' onMouseLeave={() => setflagCountPage(false)}>
                                {number.map((num, ind) => (
                                    <li className='hover:bg-gray-300 w-full flex justify-center py-1 items-center cursor-pointer' onClick={() => handlePageSize(num)} >{num}</li>
                                ))}

                            </ul>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default PaginateCustom;

let number = [
    10,
    15,
    20,
]