import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { Placeholder } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

const SignIn = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios.post("http://localhost:9000/signIn",
      values
    ).then(function (res) {
      localStorage.setItem("User_ID", res.data.message._id)
      Swal.fire({
        title: "Good job!",
        text: "Successfully Login",
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
  return (
    <div style={{ textAlign: "center", backgroundColor: "whitesmoke", width: "23.1rem", margin: "40px auto", padding: "2rem 0", borderRadius: "12px" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Sign In</h1>
      <hr style={{ margin: "1rem 1.2rem" }} />
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
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password style={{ width: "20rem" }} placeholder='Your Password' />
        </Form.Item>
        <Form.Item
        >
          <Button htmlType="submit">
            Sign In
          </Button>
          <NavLink to="/doctorApp/SignUp"><Button style={{ margin: "0 1rem" }}>
            Sign Up
          </Button></NavLink>
        </Form.Item>
      </Form>
    </div>
  )
};
export default SignIn;