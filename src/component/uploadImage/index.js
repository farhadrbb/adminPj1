import { PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useGetCustomerFileMutation } from "../../redux/api/auth";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const 
UploadImage = ({ image, setimage }) => {
  const [uploadFile, resultUploadFile] = useGetCustomerFileMutation();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const formData = new FormData();
  const beforeUpload = (file) => {
    console.log("isLt2M", file);
    formData.append("file", file);
    formData.append("fileType", "CustomerProperty");
    formData.append("EtbRequestId_fk", "12345");
    formData.append("isDeleted", true);

    uploadFile(formData);
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 0.5;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  useEffect(() => {
    console.log("reaultttttt", resultUploadFile);
  }, [resultUploadFile]);

  const handleChange = (info) => {
    console.log("info", info);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    } else {
      info["file"]["status"] = "done";
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
        setimage(info.file.originFileObj);
      });
    }
    // if (info.file.status === 'done') {
    // Get this url from response in real world.

    // }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader bg-slate-200 rounded-[10px]"
      showUploadList={false}
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: "100%",
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};
export default UploadImage;
