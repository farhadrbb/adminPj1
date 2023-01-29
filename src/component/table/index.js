import React, { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { useGetDataQuery, useLazyGetDataQuery } from "../../redux/api/crudData";
import Loading from "../loading";
import BodyTable from "./body";
import FilterTable from "./filter";
import HeadTable from "./head";
import PaginateCustom from "./paginate";

const Table = ({ infoTable, url, noFilter, filterParam,actionBtn }) => {
    const [getDataShipping, resultDataShipping] = useLazyGetDataQuery();
    const [forcePage, setForcePage] = useState(0);
    const [filterChange, setfilterChange] = useState({});
    const [filter, setFilter] = useState({});
    const [refresh, setrefresh] = useState(false);

    console.log("resultDataShipping", resultDataShipping);

    const apiCall = () => {
        let filterObj = filterParam ? { ...filter, ...filterParam } : { ...filter };
        getDataShipping({ url: url, filter: filterObj });
        setrefresh(false);
    };

    const handleClickFilter = () => {
        setForcePage(0);
        setFilter((prev) => ({ ...prev, page: 0, ...filterChange }));
    };

    const handleDeleteFilter = () => {
        setForcePage(0);
        setfilterChange({});
        setFilter({});
        setrefresh(true);
    };

    const handlePageClick = (event) => {
        const page = event.selected + 1;
        setForcePage(event.selected);
        setFilter((prev) => ({ ...prev, page }));
    };

    // useEffect(() => {
    //     handleClickFilter();
    // }, [forcePage, filterParam, filter]);

    useEffect(() => {
        apiCall();
        if (refresh) {
            apiCall();
        }
    }, [forcePage, filterParam, filter, url, refresh]);

    return (
        <>
            <div className="w-full border rounded-[10px] flex flex-col overflow-x-auto bg-slate-100">
                {!noFilter && (
                    <FilterTable
                        infoTable={infoTable}
                        setFilter={setfilterChange}
                        handleClickFilter={handleClickFilter}
                        handleDeleteFilter={handleDeleteFilter}
                        refresh={refresh}
                        resultData={resultDataShipping}
                        actionBtn={actionBtn}
                    />
                )}
                <table className="w-full">
                    <HeadTable infoTable={infoTable} />
                    {resultDataShipping.isSuccess &&
                        resultDataShipping?.data?.data.list?.length > 0 &&
                        !resultDataShipping.isFetching && (
                            <BodyTable
                                data={resultDataShipping?.data?.data}
                                infoTable={infoTable}
                            />
                        )}
                </table>
                {resultDataShipping.isLoading && (
                    <div className="flex justify-center my-2">
                        <Loading />
                    </div>
                )}
            </div>
            {resultDataShipping?.data?.data.list?.length > 0 && (
                <PaginateCustom
                    data={resultDataShipping}
                    handlePageClick={handlePageClick}
                    forcePage={forcePage}
                    setFilter={setFilter}
                    filter={filter}
                    setForcePage={setForcePage}
                    refresh={refresh}
                />
            )}
        </>
    );
};

export default Table;
