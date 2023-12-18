import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Placeholder } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'



const SignUp = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {

        delete values.confirm
        axios.post('http://localhost:9000/signUp', values)
            .then((res) => {
                Swal.fire({
                    title: "Good job!",
                    text: "User Added Sucessfully",
                    icon: "success"
                  });
                navigate('/doctorApp/SignIn')
            })
            .catch((err) => {
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
        <div style={{ textAlign: "center", backgroundColor: "whitesmoke", width: "23.1rem", margin: "20px auto", padding: "2rem 0", borderRadius: "12px" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Sign Up</h1>
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
                    name="name"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },

                    ]}
                >
                    <Input style={{ width: "20rem" }} placeholder='Full Name' type='text' />
                </Form.Item>
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
                            pattern: /(?=[A-Za-z0-9@#$%^&+.!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+.!=])(?=.{8,}).*$/,
                            message: 'Password must contain at least one lowercase letter, uppercase letter, number, and special character',
                        },
                    ]}
                >
                    <Input.Password style={{ width: "20rem" }} placeholder='Your Password' />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password style={{ width: "20rem" }} placeholder='Confirm your Password' />
                </Form.Item>
                <Form.Item
                >
                    <Button htmlType="submit">
                        Sign Up
                    </Button>
                    <NavLink to="/doctorApp/SignIn"><Button style={{ margin: "0 1rem" }}>
                        Sign In
                    </Button></NavLink>
                </Form.Item>
            </Form>
        </div>
    )
};
export default SignUp;