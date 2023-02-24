import { Button, Modal } from 'antd';
import { useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
// import BtnCustom from '../../btn';
import { Children } from 'react';

const ModalCustom = ({ setIsModalOpen, isModalOpen, children ,title}) => {
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>

            <Modal open={isModalOpen} onOk={handleOk} footer={false} onCancel={handleCancel} title={title? title :''}>
                {children}
            </Modal>
        </>
    );
};
export default ModalCustom;