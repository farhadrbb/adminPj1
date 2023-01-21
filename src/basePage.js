import { useRoutes, Navigate } from "react-router-dom";

import Home from "./pages/home";


const BasePage = () => {
  let element = useRoutes([
    {
      path: "/home",
      children: [
        {
          index: true,
          element: <Home />,
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

 
    {
      path: "/",
      element: <Navigate to="/home" replace={true} />,
    },
  ]);
  return element;
};

export default BasePage;
