
const TrCustom = ({data, infoTable}) => {
    return (
        <>
            {data?.map((d, index1) => (
                <tr key={`tr${index1}${d[0]}`} className="border-t h-[60px] border-t-[rgb(64,69,92)] w-full ">
                    {infoTable.map((itm, index2) => {

                        return <td key={`td${index1}${index2}`} className="text-center text-xs xl:text-sm">
                            <div className="flex  justify-center relative">
                                {itm.selector && itm.field
                                    ? itm.selector(d[itm.field])
                                    : itm.selector && !itm.field
                                        ? itm.selector(d)
                                        : d[itm.field]}
                                {index2 == infoTable.length - 2 ? <div
                                    className="absolute top-0 bottom-0 left-0  w-[1px] h-[30px] bg-[#40455C]"></div> : ""}
                            </div>
                        </td>
                    })}
                </tr>
            ))}
        </>
    );
};

export default TrCustom;
