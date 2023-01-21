
const TableHead = ({ infoTable }) => {
  return (
    <>
      <tr className="h-[60px] bg-[#1F2330] border-b border-b-[#40455C] w-full">
        {infoTable.map((itm, index) => (
          <th className="text-[14px] xl:text-[16px]" key={`head${index}`}>
            <div className="flex  justify-center relative">
              {itm.head}
              {index === infoTable.length - 1 ? (
                ""
              ) : (
                <div className="absolute top-0 bottom-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div>
              )}
            </div>
          </th>
        ))}
        {/* <th className="text-[14px] xl:text-[16px]"><div className="flex relative justify-center ">نام کاربری
                    <div className="absolute top-0 botton-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div></div></th>
                <th className="text-[14px] xl:text-[16px]"><div className="flex relative justify-center ">نقش
                    <div className="absolute top-0 botton-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div></div></th>
                <th className="text-[14px] xl:text-[16px]"><div className="flex relative justify-center ">شماره همراه
                    <div className="absolute top-0 botton-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div></div></th>
                <th className="text-[14px] xl:text-[16px]"><div className="flex relative justify-center ">آخرین ورود
                    <div className="absolute top-0 botton-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div></div></th>
                <th className="text-[14px] xl:text-[16px]"><div className="flex relative justify-center ">وضعیت
                    <div className="absolute top-0 botton-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div></div></th> */}
        {/*<th className="text-[14px] xl:text-[16px]"><div className="flex relative justify-center ">Action</div></th>*/}
      </tr>
    </>
  );
};

export default TableHead;
