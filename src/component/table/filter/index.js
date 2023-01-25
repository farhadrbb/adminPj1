import InputCustom from "../../inputCustom";

import DatePickerCustom from "../../datePicker";
import { FilterIcon } from "../../../assest/icon";
import BtnCustom from "../../btn";
import { useState } from "react";
import { useEffect } from "react";

const FilterTable = ({
  setFilter,
  infoTable,
  handleClickFilter,
  handleDeleteFilter,
  refresh,
  resultData,
  actionBtn,
}) => {
  const [showFilter, setshowFilter] = useState(false);
  const [showBtns, setshowBtns] = useState(false);

  const [btnChangeText, setbtnChangeText] = useState(false);

  const handleFilterInput = (itm) => {
    switch (itm.filter) {
      case "search":
        return (
          <InputCustom
            placeholder={"جستجو..."}
            field={itm.filterField ? itm.filterField : itm.field}
            setChange={setFilter}
            refresh={refresh}
          />
        );
      case "date":
        return (
          <div className="mx-2">
            <DatePickerCustom
              setChange={setFilter}
              placeholder="تاریخ"
              itm={itm.field}
            />
          </div>
        );
      case "dateFromTo":
        return (
          <>
            <div className="mx-2">
              <DatePickerCustom
                setChange={setFilter}
                placeholder="از تاریخ"
                itm={itm.filterField[0]}
              />
            </div>
            <div>
              <DatePickerCustom
                setChange={setFilter}
                placeholder="تا تاریخ"
                itm={itm.filterField[1]}
              />
            </div>
          </>
        );
      default:
        return;
    }
  };


  

  const handleBtnsAction = (itm) => {
    return (
      <BtnCustom
        clickFn={() => itm.fn()}
        //   icon={<FilterIcon />}
        title={itm.title}
        className={`text-slate-100 transition-all`}
      />
    );
  };











  const handleCheckInput = () => {
    let { page, pageSize, ...itm } = resultData?.originalArgs?.filter;
    Object.values(itm).map((value) => {
      if (value) {
        setbtnChangeText(true);
      }
    });
    if (Object.values(itm).length <= 0) {
      setbtnChangeText(false);
    }
  };

  const handleClickOptions = (flag) => {
    if (flag === "action") {
      setshowFilter(false);
      setshowBtns(!showBtns);
    }
    if (flag === "filter") {
      setshowBtns(false);
      setshowFilter(!showFilter);
    }
  };

  useEffect(() => {
    if (resultData?.originalArgs?.filter) {
      handleCheckInput();
    }
  }, [resultData?.originalArgs]);

  return (
    <>
      <div className="flex w-full justify-end p-3">
        {actionBtn && (
          <BtnCustom
            //   icon={<FilterIcon />}
            //   clickFn={() => handleClickFilter(true)}
            clickFn={() => handleClickOptions("action")}
            title={"ابزار"}
            className={"text-slate-100"}
          />
        )}
        <BtnCustom
          clickFn={() => handleClickOptions("filter")}
          icon={<FilterIcon color={"gray"} />}
          className={"text-slate-100 bg-transparent"}
        />
      </div>
      <div
        className={`${
          showFilter || showBtns
            ? "visible opacity-100 h-[150px] py-3 "
            : "invisible opacity-0 h-0"
        }  transition-all duration-300 ease-in-out  px-3 w-[98%] mx-auto  rounded-[10px] flex flex-col relative  border border-slate-300 mb-3`}
      >
        <div className="flex flex-wrap">
          {showFilter && (
            <>
              {infoTable.map((itm) => {
                return <>{handleFilterInput(itm)}</>;
              })}
            </>
          )}
          {showBtns && (
            <>
              {actionBtn?.map((itm) => {
                return <>{handleBtnsAction(itm)}</>;
              })}
            </>
          )}
        </div>
        <div
          className={`${
            showFilter ? "visible opacity-100" : "invisible opacity-0 h-0"
          } flex justify-end mt-5 w-full absolute bottom-2 left-2`}
        >
          <BtnCustom
            clickFn={() => handleClickFilter(true)}
            //   icon={<FilterIcon />}
            title={"اعمال فیلتر"}
            className={`text-slate-100 transition-all`}
          />
        </div>
      </div>
    </>
  );
};

export default FilterTable;
