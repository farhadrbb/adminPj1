import React from "react";

const Spinner = () => {
    return (
        <div className="flex w-full h-full items-center justify-center  flex-col">
            <div className="w-10 h-10 border-l-2 border-white rounded-full animate-spin mb-2"></div>
        </div>
    );
};

export default Spinner;
