import React, {useEffect, useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';


const getBase64 = (file) =>
new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});

const UplaodWithLoading= () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([

    ]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        console.log("prewwwwwww",file)
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || (file.preview));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleChange = ({ fileList: newFileList }) =>{
        console.log('newwwwwwwwww',newFileList)
      let newFile=  newFileList?.map((itm)=>{
            itm["status"]="done"
          return itm
        })
        setFileList(newFile);



    }
    const beforeUpload=(file)=>{
        console.log("fileeeeeeee",file)
    }
    useEffect(() => {
        console.log("fileeeeee",fileList)
    }, [fileList]);




    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>
            <Upload
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={beforeUpload}
            >

                {fileList.length <= 2 ? uploadButton : null}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
};

export default UplaodWithLoading;