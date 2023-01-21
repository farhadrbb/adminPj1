import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import {showConfirmModal} from "../../redux/slices/confirmModalSlice";
import CloseImg from "../../assest/image/closeModal.png";

Modal.setAppElement('#root');

const ConfirmModal = ({children}) => {

    const dispatch = useDispatch();
    const confirmModal = useSelector(state => state.confirmModal.value);


    const toggleModal = () => {
        dispatch(showConfirmModal(!confirmModal))
    }


    return (

        <Modal
            isOpen={confirmModal}
            className="Modal"
            overlayClassName="Overlay"
            shouldCloseOnOverlayClick={false}
            closeTimeoutMS={500}
        >
            <div className={'content'}>
                <div className={'cursor-pointer'} onClick={toggleModal}>
                    {/* <img src={CloseImg} alt={'close'}/> */}
        {children}
                    
                </div>


            </div>
        </Modal>

    );
};

export default ConfirmModal;