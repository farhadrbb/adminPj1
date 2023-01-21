import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import Loading from "../loading";

const _LazyLoad = ({
                       offset,
                       setOffset,
                       loading,
                       totalPage,
                   }) => {

    const {ref, inView} = useInView({
        threshold: 1,
    });

    useEffect(() => {
        if (inView && offset < totalPage) {
            setOffset(offset + 1)
        }
    }, [inView]);

    return (
        <div ref={ref} className="w-full flex py-2 items-center justify-center">
            {loading && <Loading/>}
        </div>
    );
};

_LazyLoad.defaultProps = {
    loading: false,
    totalPage: 0,
};

export default _LazyLoad;
