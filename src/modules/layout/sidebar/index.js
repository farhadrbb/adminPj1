import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../../../assest/logo.png'
import {
  AdminIcon,
  UsersIcon,
  EventsIcon,
  ContentIcon,
  DastebandiIcon,
  CommenIcon,
  RolesIcon,
  GiftIcon,
  SettingIcon,
  TransactionsIcon,
  ChildSettingIcon,
  ChildSettingGreenIcon,
  CombinedIcon,
  ClosemenuIcon,
} from "../../../assest/icon";
// import {useGetProfileQuery} from "../../../redux/services/admin";
// import {useLazyLogoutAdminQuery} from "../../../redux/services/auth";

const Sidebar = ({ clickMenu, setClickMenu }) => {
  const [click, setClick] = useState();
  // const [clickChild, setClickChild] = useState();
  // const { data } = useGetProfileQuery();
  // const [logoutAdmin, resultLogout] = useLazyLogoutAdminQuery();
  // const roles = data?.data?.permissions
  const location = useLocation()

  // const handleClickChild = (i) => {
  //   setClickChild(i);
  // };

  // useEffect(()=>{
  //   if(resultLogout.isSuccess){
  //     localStorage.removeItem('auth');
  //     window.location.href='/login'
  //   }
  // },[resultLogout])

  // const logout=()=>{
  //   logoutAdmin();
  // };

  // console.log("location",location);

  // const sidebarList = lists.map((list, index) => {
  //   return (
  //     <React.Fragment key={`menu${index}`}>
  //       {roles?.includes(list.slug) && 
  //         <NavLink
  //           to={list.route}

  //           onClick={() => list.child.length > 0 && setClick(index) }
  //           className={({ isActive }) =>
  //             `flex items-center mb-2 pr-[24px] h-[40px] ${
  //               isActive ? " activeMenu" : ""
  //             }`
  //           }
  //         >
  //           <div>{list.icon}</div>
  //           <div className="text-white  pr-[8px] text-[16px] font-[500]">
  //             {list.title}
  //           </div>
  //         </NavLink>
  //        }

  //       {list.child &&
  //         click === index &&
  //         list.child.map((c, i) => (
  //           <NavLink
  //           to={c.route}
  //           key={`childMenu${i}${index}`}
  //           className={({ isActive }) =>
  //           ` ${isActive ? " transition-all " : ""}`
  //         }
  //         >

  //             <div
  //               className={`flex items-center mt-[5px] w-[248px] h-[40px] pr-[50px] `}
  //               // onClick={ () => handleClickChild(i)}
  //             >
  //               <div className=" w-[9px] h-[14px]">
  //                 { location.pathname === c.route ? c.iconClick : c.icon}
  //               </div>
  //               <div className="text-white mr-[8px] text-[14px]">{c.title}</div>
  //             </div>
  //           </NavLink>
  //         ))}
  //     </React.Fragment>
  //   );
  // });
  return (
    <>
      <div
        className={`h-full bg-slate-200  flex flex-col text-white justify-between transition-all absolute xl:static top-0 right-0 z-[20] ${clickMenu
          ? "min-w-[250px] max-w-[250px] visible opacity-100"
          : "min-w-0 max-w-0 xl:min-w-[250px] xl:max-w-[250px] invisible opacity-0 xl:visible xl:opacity-100"
          }`}
        style={{ borderRadius:"25px 0 0 25px" }}
      >
        <div
          className="absolute top-[20px] left-4 text-[20px] xl:hidden cursor-pointer"
          onClick={() => setClickMenu(false)}
        >
          <ClosemenuIcon />
        </div>
        <div>
          <div className=" mr-[24px] mt-[30px] mb-[30px]">
            {/* <img
              src={"/assest/icon/logo.png"}
              className="w-[95px] h-[50px] "
              alt={"profileImg"}
            /> */}
          </div>
          {/* <div className="flex flex-col">{sidebarList}</div> */}
          <div className="text-black mt-[70px]">
            {/* <div className="pr-3 mt-2">farhad</div>
            <div className="pr-3 mt-2">farhad</div>
            <div className="pr-3 mt-2">farhad</div> */}
            {lists.map((list, ind) => (
              <>
                <NavLink
                  to={list.route}

                  // onClick={() => list.child.length > 0 && setClick(index)}
                  className={({ isActive }) =>
                    `flex items-center mb-2 pr-[24px] h-[40px] text-slate-500 ${isActive ? " activeMenu" : ""
                    }`
                  }
                >
                  <div>{list.icon}</div>
                  <div className="pr-[8px] text-[16px] font-[500] text-slate-700">
                    {list.title}
                  </div>
                </NavLink>
              </>
            ))}
          </div>
          {/* <div>farhad</div> */}
        </div>
        {/* <div className="flex justify-between mb-[27px]">
          <div className="flex">
            <img src={Rectangle2214} className="pr-[20px]" alt={"avatarIcon"} />
            <div className="flex flex-col pr-[10px] items-center justify-center">
              <h1 className="text-[14px]">{data?.data?.adminInfo?.fullName}</h1>
              <p className="text-[10px]">{data?.data?.adminInfo?.username}</p>
            </div>
          </div>
          <div className="pl-[15px] cursor-pointer" onClick={logout}>
            <CombinedIcon />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;

const lists = [
  {
    title: "ادمین ها",
    icon: <AdminIcon />,
    route: "/home",
    slug: "admins",
  },
  {
    title: "کاربران",
    icon: <UsersIcon />,
    route: "/person",
    slug: "users",
  },
  {
    title: "ایونت ها",
    icon: <EventsIcon />,
    route: "/events",
    slug: "events",
  },
  {
    title: "محتوا",
    icon: <ContentIcon />,
    route: "/content",
    slug: "content",
  },
  {
    title: "دسته بندی",
    icon: <DastebandiIcon />,
    route: "/categories",
    slug: "categories",
  },
  {
    title: "کامنت ها",
    icon: <CommenIcon />,
    route: "/forbidenwords",
    slug: "comments",
    child: [
      {
        title: "کلمات ممنوعه",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,
        route: "/forbidenwords",
      },
      {
        title: "کامنت ها",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,
        route: "/allcoments",
      },
    ],
  },
  {
    title: "نقش ها",
    icon: <RolesIcon />,
    route: "/Roles",
    slug: "roles",
  },
  {
    title: "کد هدیه",
    icon: <GiftIcon />,
    route: "/giftcode",
    slug: "giftCode",
  },
  {
    title: "تنظیمات",
    icon: <SettingIcon />,
    route: "/slider",
    slug: "settings",
    child: [
      {
        title: "اسلایدر",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,
        route: "/slider",
      },
      {
        title: "بنر",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,

        route: "/banner",
      },
      {
        title: "هدر",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,

        route: "/header",
      },
      {
        title: "محتوای صفحه اصلی",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,

        route: "/mainpageContent",
      },
      {
        title: "فوتر",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,

        route: "/footer",
      },
      {
        title: "بنر اطلاعیه",
        icon: <ChildSettingIcon />,
        iconClick: <ChildSettingGreenIcon />,

        route: "/notificationBanner",
      },
    ],
  },
  {
    title: "تراکنش ها",
    icon: <TransactionsIcon />,
    route: "/transactions",
    slug: "finance",
  },
];
