import {useState} from "react";

export default function TabNav({tabs}) {

    const [openTab, setOpenTab] = useState(tabs[0].name);
    const [openContent, setOpenContent] = useState(tabs[0].content);

    const selectTab = (name, content) => {
        setOpenTab(name);
        setOpenContent(content)
    };

    return (

        <div className="flex flex-col">
            <ul className="flex space-x-2 space-x-reverse w-fit z-10">
                {tabs.map((tab, index) => (
                    <li key={`headTab${index}`} onClick={() => selectTab(tab.name, tab.content)}
                        className={`inline-block px-4 pt-3 pb-2 cursor-pointer rounded-tr rounded-tl bg-black-150  ${tab.name === openTab ? "bg-transparent border-x border-t border-cyan-50":
                            "after:block after:top-[12px] after:relative after:w-0 hover:after:bg-cyan-50 hover:after:w-full"}`}>
                        {tab.name}
                    </li>
                ))}
            </ul>
            <div className="px-5 pt-8 pb-5">
                {openContent}
            </div>
        </div>

    );
}


