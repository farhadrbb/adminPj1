import { useRoutes, Navigate } from "react-router-dom";

import Store from "./pages/store";


const BasePage = () => {
  let element = useRoutes([
    // {
    //   path: "/home",
    //   children: [
    //     {
    //       index: true,
    //       element: <Home />,
    //     },
    //     // {
    //     //   path: "createAdmin",
    //     //   element: <AdminActions />,
    //     // },
    //     // {
    //     //   path: "updateAdmin/:id",
    //     //   element: <AdminActions />,
    //     // },
    //   ],
    // },
    {
      path: "*",
      children: [
        {
          index: true,
          element: <Store/>,
        },
        // {
        //   path: "createAdmin",
        //   element: <AdminActions />,
        // },
        // {
        //   path: "updateAdmin/:id",
        //   element: <AdminActions />,
        // },
      ],
    },
    // {
    //   path: "/head",
    //   children: [
    //     {
    //       index: true,
    //       element: <Store/>,
    //     },
    //     // {
    //     //   path: "createAdmin",
    //     //   element: <AdminActions />,
    //     // },
    //     // {
    //     //   path: "updateAdmin/:id",
    //     //   element: <AdminActions />,
    //     // },
    //   ],
    // },

 
    // {
    //   path: "*",
    //   element: <Navigate to="/store" replace={true} />,
    // },
  ]);
  return element;
};

export default BasePage;
