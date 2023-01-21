import React from 'react';




const RouteLogin = ({children,step}) => {
    return ( 
        <>
        <div className="flex flex-col items-center w-full">
            {children[step-1]}
        </div>
        </>
     );
}
 
export default RouteLogin;