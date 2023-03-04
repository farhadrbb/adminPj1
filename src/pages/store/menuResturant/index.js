import React from 'react';
import FoodInfo from '../food';
// import TabsCustom from '../tabs';
import { TabsCustom } from '../../../component/tabsCustom';



// let itemsTabs = [
//     {
//         label: `پیتزا `,
//         key: 1,
//         children: <div className="h-[600px] overflow-y-auto overflow-x-hidden"><FoodInfo /></div>,
//     },
//     {
//         label: `پیش غذا `,
//         key: 2,
//         children: <div>ff</div>,
//     },
//     {
//         label: `نوشیدنی`,
//         key: 3,
//         children: <div>ff</div>,
//     },
//     {
//         label: `سیب زمینی `,
//         key: 4,
//         children: <div>ff</div>,
//     },
//     {
//         label: `پیتزا `,
//         key: 5,
//         children: <div>ff</div>,
//     },
//     {
//         label: `پیتزا `,
//         key: 6,
//         children: <div>ff</div>,
//     },
//     {
//         label: `پیتزا `,
//         key: 7,
//         children: <div>ff</div>,
//     },
//     {
//         label: `پاستا`,
//         key: 8,
//         children: <div>info</div>,
//     }
// ]

const MenuResturant = ({ resultgetAllPost }) => {

    


    return (
        <>
            <div>
                <TabsCustom data={resultgetAllPost.data?.data?.goodsGroups} 
                center={true} 
                type={"border-b"} 
                menu 
                childMenu={<FoodInfo/>}/>
            </div>
        </>
    );
}

export default MenuResturant;