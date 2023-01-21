import {useState} from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Layout = ({children}) => {
    const [clickMenu, setClickMenu] = useState(false);

    return (
        <>
            <div className="w-full h-full flex relative">
                {clickMenu && (
                    <div className="absolute inset-0 bg-black-200 opacity-50 z-[9] xl:hidden"></div>
                )}
                <Sidebar clickMenu={clickMenu} setClickMenu={setClickMenu}/>
                <div className="flex flex-col items-center w-full h-full overflow-auto mt-5">
                    <Header setClickMenu={setClickMenu}/>
                    {/* <Content/> */}
                    <div className="pt-10 h-full text-white  w-[97%] flex justify-center">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
