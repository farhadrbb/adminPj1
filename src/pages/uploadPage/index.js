import { Button, Col, Form, Input, Row, Steps } from "antd";
import React, { useState } from "react";
import UploadImage from "../../component/uploadImage";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import BtnCustom from "../../component/btn";
import UplaodWithLoading from "./UploadImageWithLoading";
import { useGetCustomerFileMutation } from "../../redux/api/auth";
import { json } from "react-router-dom";

const UploadPage = ({resultGetUserProfile}) => {
  const [form]=Form.useForm()
  const [image1, setimage1] = useState();
  const [image2, setimage2] = useState();
  const [image3, setimage3] = useState();
  const [stepUpload, setstepUpload] = useState(1);
  const [uploadFile, resultUploadFile] = useGetCustomerFileMutation();
  const [userResult, setuseResult] = useState();

  console.log("resultGetUserProfile",resultGetUserProfile);

  useEffect(() => {
    if (image1) {
    }
  }, [image1]);
  useEffect(() => {
    if (image1) {
      setstepUpload(2);
    }
    if (image2) {
      setstepUpload(3);
    }
  }, [image2]);
  useEffect(() => {
    console.log("imgggggggg2222", image2);
    if (image1) {
      setstepUpload(2);
    }
    if (image2) {
      setstepUpload(3);
    }
  }, [image3]);
  // useEffect(() => {
  //   console.log("resuleeeeerrrrr",JSON.parse(resultGetUserProfile?.data?.data?.userProfile));
  //   setuseResult(resultGetUserProfile?.data?.data?.userProfile?.privatePerson)
  // form.setFieldsValue({firstName:userResult?.firstName,lastName:userResult?.lastName,nationalCode:userResult?.nationalCode,mobile:userResult?.nationalCode})
  // }, [resultGetUserProfile]);
  return (
    <>
      <div className="w-full h-full justify-center items-center overflow-y-auto p-3">
        <div className="text-lg text-black flex justify-center mt-2 mb-5">
          آپلود تصاویر
        </div>
        <div className="w-full hidden sm:block">
          {/*<Steps*/}
          {/*  size="small"*/}
          {/*  direction="horizontal"*/}
          {/*  current={stepUpload - 1}*/}
          {/*  items={[*/}
          {/*    {*/}
          {/*      title: <div className="text-xs">روی کارت ملی</div>,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      title: <div className="text-xs">پشت کارت ملی</div>,*/}
          {/*    },*/}
          {/*    {*/}
          {/*      title: <div className="text-xs">شناسنامه</div>,*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*/>*/}
        </div>

        <div className="w-full h-full  mx-auto">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            className="justify-center flex flex-col w-full"
            layout="vertical"
          >
            <Row>
              <Col span={12}>
                <Form.Item
                  // label="کد سجام"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="نام"
                    className="h-[45px] rounded-[10px]"
                    prefix={
                      <UserOutlined className="site-form-item-icon !text-[20px] text-cyan-50" />
                    }
                    // className='inputCustom border border-cyan-50'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  // label="کد سجام"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="نام خانوادگی"
                    className="h-[45px] rounded-[10px]"
                    prefix={
                      <UserOutlined className="site-form-item-icon !text-[20px] text-cyan-50" />
                    }
                    // className='inputCustom border border-cyan-50'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  // label="کد سجام"
                  name="nationalCode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="کد ملی"
                    className="h-[45px] rounded-[10px]"
                    prefix={
                      <UserOutlined className="site-form-item-icon !text-[20px] text-cyan-50" />
                    }
                    // className='inputCustom border border-cyan-50'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  // label="کد سجام"
                  name="mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    placeholder="موبایل"
                    className="h-[45px] rounded-[10px]"
                    prefix={
                      <UserOutlined className="site-form-item-icon !text-[20px] text-cyan-50" />
                    }
                    // className='inputCustom border border-cyan-50'
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className="grid grid-cols-12 w-full h-full p-2 xl:gap-x-2 mb-10">
            {/*<div className="col-span-12 xl:col-span-6 flex justify-center ">*/}
            {/*  <div className="flex items-center justify-center w-full">*/}
            {/*    <UplaodWithLoading setimage={setimage1} image={image1} />*/}
            {/*    <div className="my-1 text-xs text-black pr-2 w-[100%]">*/}
            {/*      تصویر رنگی روی اصل کارت ملی هوشمند یا رسید پیشخوان*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="col-span-12 xl:col-span-6 flex justify-center ">
              <div className="flex items-center justify-center w-full">
                <UploadImage
                  uploadFile={uploadFile}
                  setimage={setimage1}
                  image={image1}
                />
                <div className="my-1 text-xs text-black pr-2 w-[100%]">
                  تصویر رنگی روی اصل کارت ملی هوشمند یا رسید پیشخوان
                </div>
              </div>
            </div>
            <div className=" col-span-12 xl:col-span-6 flex justify-center">
              <div className="flex items-center justify-center w-full">
                <UploadImage setimage={setimage2} image={image2} />
                <div className="my-1 text-xs text-black pr-2 w-[100%]">
                  تصویر رنگی پشت اصل کارت ملی یا رسید پیشخوان{" "}
                </div>
              </div>
            </div>
            <div className=" col-span-12 xl:col-span-6 flex justify-center">
              <div className="flex items-center justify-center w-full">
                <UploadImage setimage={setimage3} image={image3} />
                <div className="my-1 text-xs text-black pr-2 w-[100%]">
                  تصویر رنگی پشت اصل کارت ملی یا رسید پیشخوان{" "}
                </div>
              </div>
            </div>
            {/* <div className="lg:col-span-6 col-span-12  flex justify-center">
                            <div className="w-[300px] h-[300px]">
                                <div className="my-1 text-xs text-black pr-2">تصویر رنگی صفحه اول اصل شناسنامه (همراه شماره سریال) </div>
                                <UploadImage />
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-12 flex justify-center">
                            <div className="w-[300px] h-[300px]">
                                <div className="my-1 text-xs text-black pr-2">تصویر رنگی صفحه توضیحات اصل شناسنامه (همراه شماره سریال) </div>
                                <UploadImage />
                            </div>
                        </div> */}
          </div>
        </div>
        <div className="flex justify-center ">
          <BtnCustom
            title={"ثبت اطلاعات"}
            className="bg-cyan-50 w-[50%]"
            icon={<LoadingOutlined />}
          />
        </div>
      </div>
    </>
  );
};

export default UploadPage;
// {
//   "data": {
//       "mobile": 989126151435,
//       "email": null,
//       "uniqueIdentifier": "0520586573",
//       "type": "IranianPrivatePerson",
//       "status": "Sejami",
//       "privatePerson": {
//           "firstName": "حسام",
//           "lastName": "اسکندری",
//           "fatherName": "حمیدرضا",
//           "gender": "Male",
//           "seriShChar": "ا",
//           "seriSh": "69",
//           "serial": "317688",
//           "shNumber": "0520586573",
//           "birthDate": "1993-03-14T00:00:00",
//           "placeOfIssue": "اراک",
//           "placeOfBirth": "اراک",
//           "signatureFile": null,
//           "profileId": 0,
//           "bornCountryId": 0,
//           "evidenceCountryId": 0,
//           "evidenceType": null,
//           "evidenceExpirationDate": "0001-01-01T00:00:00",
//           "evidenceNumber": null,
//           "passportNumber": null,
//           "citizenCountryId": 0,
//           "specialNumber": null,
//           "licenseNumber": null,
//           "licenseIssueDate": "0001-01-01T00:00:00",
//           "licenseExpirationDate": "0001-01-01T00:00:00",
//           "imageId": 0,
//           "imageFile": null,
//           "signatureFileId": 0,
//           "description": null,
//           "locked": false,
//           "isConfirmed": false,
//           "id": 0,
//           "isDeleted": false,
//           "creationDate": "0001-01-01T00:00:00",
//           "modifiedDate": "0001-01-01T00:00:00"
//       },
//       "legalPerson": null,
//       "addresses": [
//           {
//               "profileId": 0,
//               "postalCode": "1651767154",
//               "countryId": 0,
//               "provinceId": 0,
//               "cityId": 0,
//               "city": {
//                   "name": "تهران",
//                   "provinceId": 0,
//                   "prefix": null,
//                   "sections": null,
//                   "addresses": null,
//                   "authenticationOfficeses": null,
//                   "id": 2229,
//                   "isDeleted": false,
//                   "creationDate": "0001-01-01T00:00:00",
//                   "modifiedDate": "0001-01-01T00:00:00"
//               },
//               "sectionId": 0,
//               "section": null,
//               "cityPrefix": "021",
//               "remnantAddress": "جانبازان شرقی",
//               "alley": "احمدی یا 138",
//               "plaque": "36",
//               "tel": "77885883",
//               "countryPrefix": "98",
//               "mobile": null,
//               "emergencyTel": null,
//               "emergencyTelCityPrefix": null,
//               "emergencyTelCountryPrefix": null,
//               "faxPrefix": null,
//               "fax": null,
//               "website": null,
//               "email": null,
//               "isConfirmPostalCode": false,
//               "profileOwner": null,
//               "id": 0,
//               "isDeleted": false,
//               "creationDate": "0001-01-01T00:00:00",
//               "modifiedDate": "0001-01-01T00:00:00",
//               "country": {
//                   "id": 1,
//                   "name": "ایران"
//               },
//               "province": {
//                   "name": "تهران",
//                   "countryId": 0,
//                   "cities": null,
//                   "addresses": null,
//                   "authenticationOfficeses": null,
//                   "id": 151,
//                   "isDeleted": false,
//                   "creationDate": "0001-01-01T00:00:00",
//                   "modifiedDate": "0001-01-01T00:00:00"
//               }
//           }
//       ],
//       "tradingCodes": [
//           {
//               "profileId": 0,
//               "type": "StockExchange",
//               "firstPart": "اسکـ25155",
//               "secondPart": "",
//               "thirdPart": "",
//               "locked": false,
//               "isConfirmed": false,
//               "id": 0,
//               "isDeleted": false,
//               "creationDate": "0001-01-01T00:00:00",
//               "modifiedDate": "0001-01-01T00:00:00",
//               "code": "اسکـ25155"
//           }
//       ],
//       "agent": null,
//       "accounts": [
//           {
//               "profileId": 0,
//               "accountNumber": "1182305325810",
//               "type": "SavingAccount",
//               "sheba": "IR560150000001182305325810",
//               "bankId": 0,
//               "bank": {
//                   "name": "بانک سپه",
//                   "bic": null,
//                   "id": 123110,
//                   "isDeleted": false,
//                   "creationDate": "0001-01-01T00:00:00",
//                   "modifiedDate": "0001-01-01T00:00:00"
//               },
//               "branchCode": "1821",
//               "branchName": "ایت",
//               "branchCityId": 0,
//               "branchCity": {
//                   "name": "تهران",
//                   "provinceId": 0,
//                   "prefix": null,
//                   "sections": null,
//                   "addresses": null,
//                   "authenticationOfficeses": null,
//                   "id": 2229,
//                   "isDeleted": false,
//                   "creationDate": "0001-01-01T00:00:00",
//                   "modifiedDate": "0001-01-01T00:00:00"
//               },
//               "isDefault": false,
//               "locked": false,
//               "isConfirmed": false,
//               "id": 0,
//               "isDeleted": false,
//               "creationDate": "0001-01-01T00:00:00",
//               "modifiedDate": "0001-01-01T00:00:00"
//           },
//           {
//               "profileId": 0,
//               "accountNumber": "5130999162",
//               "type": "SavingAccount",
//               "sheba": "IR850120010000005130999162",
//               "bankId": 0,
//               "bank": {
//                   "name": "بانک ملت",
//                   "bic": null,
//                   "id": 130,
//                   "isDeleted": false,
//                   "creationDate": "0001-01-01T00:00:00",
//                   "modifiedDate": "0001-01-01T00:00:00"
//               },
//               "branchCode": "6867",
//               "branchName": "تهران شرق",
//               "branchCityId": 0,
//               "branchCity": {
//                   "name": "تهران",
//                   "provinceId": 0,
//                   "prefix": null,
//                   "sections": null,
//                   "addresses": null,
//                   "authenticationOfficeses": null,
//                   "id": 2229,
//                   "isDeleted": false,
//                   "creationDate": "0001-01-01T00:00:00",
//                   "modifiedDate": "0001-01-01T00:00:00"
//               },
//               "isDefault": true,
//               "locked": false,
//               "isConfirmed": false,
//               "id": 0,
//               "isDeleted": false,
//               "creationDate": "0001-01-01T00:00:00",
//               "modifiedDate": "0001-01-01T00:00:00"
//           }
//       ],
//       "jobInfo": {
//           "profileId": 0,
//           "jobId": 0,
//           "jobDescription": null,
//           "employmentDate": null,
//           "companyName": null,
//           "companyAddress": "جانبازان شرقیاحمدی یا 13836",
//           "companyPostalCode": "1651767154",
//           "companyEmail": "hesames58@gmail.com",
//           "companyWebSite": null,
//           "companyCityPrefix": "021",
//           "companyPhone": "77885883",
//           "position": null,
//           "companyFaxPrefix": null,
//           "companyFax": null,
//           "job": {
//               "title": "بیکار",
//               "id": 109174,
//               "isDeleted": false,
//               "creationDate": "0001-01-01T00:00:00",
//               "modifiedDate": "0001-01-01T00:00:00"
//           },
//           "id": 0,
//           "isDeleted": false,
//           "creationDate": "0001-01-01T00:00:00",
//           "modifiedDate": "0001-01-01T00:00:00"
//       },
//       "financialInfo": {
//           "profileId": 0,
//           "assetsValue": null,
//           "inComingAverage": null,
//           "sExchangeTransaction": null,
//           "cExchangeTransaction": null,
//           "outExchangeTransaction": null,
//           "transactionLevel": "One",
//           "tradingKnowledgeLevel": "Medium",
//           "companyPurpose": null,
//           "referenceRateCompany": null,
//           "rateDate": null,
//           "rate": null,
//           "financialBrokers": [],
//           "id": 0,
//           "isDeleted": false,
//           "creationDate": "0001-01-01T00:00:00",
//           "modifiedDate": "0001-01-01T00:00:00"
//       },
//       "legalPersonShareholders": [],
//       "legalPersonStakeholders": []
//   },
//   "meta": null,
//   "error": null
// }