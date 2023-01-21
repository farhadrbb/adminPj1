import React, { useEffect, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useGetDataQuery, useLazyGetDataQuery } from '../../redux/api/crudData';
import Loading from '../loading';
import BodyTable from './body';
import FilterTable from './filter';
import HeadTable from './head';
import PaginateCustom from './paginate';


const Table = ({ infoTable, url, noFilter, filterParam }) => {
    const [getDataShipping, resultDataShipping] = useLazyGetDataQuery();
    const [forcePage, setForcePage] = useState(0);
    const [filterChange, setfilterChange] = useState({});
    const [filter, setFilter] = useState({});



    const handleClickFilter = (clickBtn) => {
        if (clickBtn) {
            setForcePage(0)
        }
        let filterObj = filterParam ? { ...filter, ...filterParam, ...filterChange } : { ...filter, ...filterChange }
        getDataShipping({ url: url, filter: filterObj })
    }


    const handlePageClick = (event) => {
        const page = event.selected + 1;
        setForcePage(event.selected);
        setFilter((prev) => ({ ...prev, page }))
    };

    useEffect(() => {
        handleClickFilter()
    }, [forcePage, filterParam, filter])

    return (
        <>
            <div className='w-full border border-slate-400 rounded-md flex flex-col overflow-x-auto '>
                {!noFilter && (
                    <FilterTable
                        infoTable={infoTable}
                        setFilter={setfilterChange}
                        handleClickFilter={handleClickFilter} />
                )}
                <table className='w-full'>
                    <HeadTable infoTable={infoTable} />
                    {resultDataShipping.isSuccess && resultDataShipping?.data?.data.list?.length > 0 && !resultDataShipping.isFetching && (
                        <BodyTable
                            data={resultDataShipping?.data?.data}
                            infoTable={infoTable} />
                    )}
                </table>
                {resultDataShipping.isLoading || resultDataShipping.isFetching && (
                    <div className='flex justify-center my-2'>
                        <Loading />
                    </div>
                )}
            </div>
            {
                resultDataShipping?.data?.data.list?.length > 0 && (
                    <PaginateCustom
                        data={resultDataShipping}
                        handlePageClick={handlePageClick}
                        forcePage={forcePage}
                        setFilter={setFilter}
                        filter={filter}
                        setForcePage={setForcePage} />

                )
            }
        </>
    );
}

export default Table;


