import { Radio, Tabs } from 'antd';
import { useState } from 'react';
const TabsCustom = (props) => {
  const [size, setSize] = useState('small');
  return (
    <div className="w-full">
      <Tabs
        defaultActiveKey="1"
        
        centered={props.center? props.center : false}
        type={props.type ? props.type : null}
        size={"large"}
        items={props.itemsTabs ? props.itemsTabs :[] }
      />
    </div>
  );
};
export default TabsCustom;