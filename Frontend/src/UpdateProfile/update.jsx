import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message, Upload } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Placeholder } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import Image from './images';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Update = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    const update = {...values, "url": imageUrl ? imageUrl : null}
    console.log(update)
    axios.post("http://localhost:9000/changePass",
      update
    ).then(function (res) {
      Swal.fire({
        title: "Good job!",
        text: "Profile Update Sucessfully",
        icon: "success"
      });
      navigate('/')
    }).catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
        footer: 'Something went wrong!'
      });
    })

  };
  const onFinishFailed = (errorInfo) => {

  };
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const hundleSubmit = (e) =>{
    e.preventDefault();
    props.onSubmit(imageUrl);
  }
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
          borderRadius: "50%"
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div style={{ textAlign: "center", backgroundColor: "whitesmoke", width: "23.1rem", margin: "40px auto", padding: "2rem 0", borderRadius: "12px" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Update Profile</h1>
      <hr style={{ margin: "1rem 1.2rem" }} />
      
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        value={imageUrl}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
              height: "100%",
              borderRadius: "50%",
              objectFit: "contain"
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <Form
        name="basic"
        style={{
          alignItems: "center",
          textAlign: "center"
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"

          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },

          ]}
        >
          <Input style={{ width: "20rem" }} placeholder='Your Email' type='email' />
        </Form.Item>

        <Form.Item
          name="old_password"
          rules={[
            {
              required: true,
              message: 'Please input your old password!',
            },
          ]}
        >
          <Input.Password style={{ width: "20rem" }} placeholder='Your Old Password' />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              pattern: /(?=[A-Za-z0-9@#$%^&+.!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+.!=])(?=.{8,}).*$/,
              message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character'
            },
          ]}
        >
          <Input.Password style={{ width: "20rem" }} placeholder='Your New Password' />
        </Form.Item>
        <Form.Item
        >
          <Button htmlType="submit">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};
export default Update;