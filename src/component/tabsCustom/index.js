import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectGroupMenu } from "../../redux/slices/buyBox";

export const TabsCustom = ({ data, type, center, menu, childMenu }) => {
  const [state, setState] = useState(0);
  const dispatch = useDispatch()


  const clickTab = (ind, itm) => {
    setState(ind);
    if (menu) {
      dispatch(setSelectGroupMenu(itm))
    }
  };

  const handleType = () => {
    if (type === "border-b") {
      return "border-b border-current text-cyan-500"
    } else {
      return "border border-b-0 border-current text-cyan-500"
    }
  }

  useEffect(() => {
    if (menu) {
      dispatch(setSelectGroupMenu(data ? data[0] : null))
    }
  }, [data]);

  return (
    <>
      <div className="w-full h-full flex flex-col ">
        <div className={`w-full  overflow-x-auto sticky -top-[2px]  pb-2 ${center ? "flex sm:justify-center" : ''} ${menu ? 'bg-gray-100' :''}`}>
          <ul className="flex border-b border-gray-100 text-sm font-medium ">
            {data?.map((itm, ind) => (
              <li
                className={`-mb-px mx-1 whitespace-nowrap  cursor-pointer rounded-t-[5px] transition-all px-5 py-2 ${state === ind
                  ? handleType()
                  : "border-gray-300 hover:text-cyan-500 text-gray-400"
                  }`}
                onClick={() => clickTab(ind, itm)}
              >
                {menu ? itm.groupName : itm.label}
              </li>
            ))}

          </ul>
        </div>
        {menu && (
          <>
            <div className="w-full text-black">{childMenu}</div>
          </>
        )}
        {data?.map((itm, ind) => (
          <>
            {ind === state && !menu ? (
              <div className="w-full text-black h-[400px] overflow-y-auto">{itm.children}</div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};
