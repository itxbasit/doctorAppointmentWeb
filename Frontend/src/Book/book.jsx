
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { Placeholder } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useLocation} from "react-router-dom"
import generateTimeSlots from './time';
import generateDatesForDaysOfWeek from './day'

const Book = () => {
    let location = useLocation();
    const data = location.state.from
    const index = data.timing.indexOf("-");
    let startTime = data.timing.slice(0, index-1)
    let endTime = data.timing.slice(index+2)
    let timeArray = generateTimeSlots(startTime,endTime)
    let dayArray = generateDatesForDaysOfWeek(data.days)
    const { Option } = Select;
    const navigate = useNavigate();
    let id = localStorage?.getItem('User_ID')
    const [perData, setPerData] = useState({})
    useEffect(() => {
        if (id) {
            axios.post('http://localhost:9000/Search', {
                "id": id
            }).then((res) => {
                setPerData(res.data.message)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [])
    const onSearch = (value) => {
        
      };
    const onFinish = (values) => {
        values.email = perData.email;
        values.name = perData.name;
        values["doctorName"] = data?.name;
        values["doctorCategory"] = data?.category
        const appointData = {
            email: values.email,
            name: values.name,
            appointmentsDetails: {
                doctorName: values.doctorName,
                doctorCategory: values.doctorCategory,
                patientName: values.patientName,
                patientAge: values.patientAge,
                day: values.day,
                timing: values.timing
            }
        }
        axios.post('http://localhost:9000/Appointment',{
            appointData
        }).then((res)=> {
            Swal.fire({
                title: "Good job!",
                text: "Appointment Sucessful",
                icon: "success"
              });
            navigate('/doctorApp/appointment')
        }).catch((err)=>{
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
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Fill the Form</h1>
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
                >
                    <Input values={perData.name} style={{ width: "20rem" }} placeholder={perData.name} type='email' readOnly />
                </Form.Item>
                <Form.Item
                    name="email"
                >
                    <Input values={perData.email} style={{ width: "20rem" }} placeholder={perData.email} type='email' readOnly />
                </Form.Item>
                <Form.Item
                    name="patientName"

                    rules={[
                        {
                            required: true,
                            message: 'Please input patient name!',
                        },

                    ]}
                >
                    <Input style={{ width: "20rem" }} placeholder='Patient Name' type='text' />
                </Form.Item>

                <Form.Item
                    name="patientAge"

                    rules={[
                        {
                            required: true,
                            message: 'Please input patient age!',
                        },

                    ]}
                >
                    <Input style={{ width: "20rem" }} placeholder='Patient Age' type='number' />
                </Form.Item>
                <Form.Item
                    name="day"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select an option and decide a day"
                        allowClear
                        style={{width: "20rem", textAlign: "start"}}
                        onSearch={onSearch}
                    >
                        {
                            dayArray?.map((v,i)=>{
                                return(
                                    <Option value={`${v.day} ${v.date}`}>{v.day} {v.date}</Option>
                                )
                                
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                    name="timing"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Select an option and decide a timing"
                        allowClear
                        style={{width: "20rem", textAlign: "start"}}
                        onSearch={onSearch}
                    >
                        {
                            timeArray?.map((v,i)=>{
                                return(
                                <Option value={v}>{v}</Option>
                                )
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item
                >
                    <Button htmlType="submit">
                        Confirm Appointment
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};
export default Book;