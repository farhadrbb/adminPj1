import { Carousel } from 'antd';
import React from 'react';



const SliderShow = () => {
    return (
        <>
            <Carousel autoplay effect="fade" >
                <div>
                    <h3 className="md:h-[500px] h-[300px]">
                        <img className="bg-contain w-full md:h-[500px] h-[300px]" src="/img/l-intro-1651501665.jpg" />
                    </h3>
                </div>
                <div>
                    <h3 className="md:h-[500px] h-[300px]">
                        <img className="bg-contain w-full md:h-[500px] h-[300px]" src="/img/0.89399200_1551782137_fast1.jpg" />
                    </h3>
                </div>
                <div>
                    <h3 className="md:h-[500px] h-[300px]">
                        <img className="bg-contain w-full md:h-[500px] h-[300px]" src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/0cdafr02.5if.jpg" />
                    </h3>

                </div>
                <div>
                    <h3 className="md:h-[500px] h-[300px]">
                        <img className="bg-contain w-full md:h-[500px] h-[300px]" src="https://static.delino.com/Image/Subscriber/meykhosh/Sliders/t2qyovwc.u2v.jpg" />
                    </h3>

                </div>
            </Carousel>
        </>
    );
}

export default SliderShow;