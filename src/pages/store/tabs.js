import { Radio, Tabs } from 'antd';
import { useState } from 'react';
const TabsCustom = (props) => {
  console.log("props",props.customTabs)
  return (
    <div className="w-full">
      <Tabs
        defaultActiveKey="1"
        className={props.customTabs === "customTabs" ? "customTabs" :''}
        
        centered={props.center? props.center : false}
        type={props.type ? props.type : null}
        size={"large"}
        items={props.itemsTabs ? props.itemsTabs :[] }
      />
    </div>
  );
};
export default TabsCustom;