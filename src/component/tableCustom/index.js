import React, {useEffect, useState} from "react";
import TableHead from "./head";
import TrCustom from "./tr";
import FilterTable from "./filter";
import HeaderTable from "./header";
import {PaginationBackIcon, PaginationNextIcon} from "../../assest/icon";
import ReactPaginate from "react-paginate";
import {useParams} from "react-router-dom";


const TableCustom = ({data, infoTable, getList, header, button,customData,totalPage}) => {

    const [forcePage, setForcePage] = useState(0);
    const [filterApi, setFilterApi] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getList({id,...filterApi});
        setForcePage(0);
    }, [filterApi])

    const handlePageClick = (event) => {
        const offset = event.selected + 1;
        setForcePage(event.selected);
        getList({id,offset, ...filterApi});
    };

    return (
        <>
            <div
                className="border border-black-250 overflow-x-auto overflow-y-hidden mx-auto flex flex-col rounded-md mt-[10px] ">
                <HeaderTable header={header} button={button} customData={customData}/>
                <table className="table-fixed">
                    <tbody>
                        <TableHead infoTable={infoTable} />
                        <FilterTable infoTable={infoTable} filerState={setFilterApi}/>
                        <TrCustom data={data} infoTable={infoTable}/>
                    </tbody>
                </table>

            </div>
            {
                data?.length > 0 &&
                <ReactPaginate
                    nextLabel={<PaginationNextIcon/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={totalPage || 1}
                    forcePage={forcePage}
                    previousLabel={<PaginationBackIcon/>}
                    renderOnZeroPageCount={null}
                    activeClassName={"activePage"}
                    className="pagination"
                    previousClassName="page-link"

                />
            }


        </>
    );

};

export default TableCustom;




