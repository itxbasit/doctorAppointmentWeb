import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MedicationIcon from '@mui/icons-material/Medication';
import axios from 'axios';
const Example = (props) => {
    const { show, onClose } = props;
    const [perData, setPerData] = useState({})
    let id = localStorage.getItem("User_ID")
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
    useEffect(() => {
        if (perData.email) {
            axios.post('http://localhost:9000/serApp', {
                "email": perData.email
            }).then((res) => {
                setPerData(res.data.message)
            }).catch((err) => {
                console.log(err)
            })
        }
    })
    return (
        <>
            <Modal
                style={{
                    opacity: 1,
                    width: "auto",
                    textAlign: "center"
                }}
                size="lg"
                show={show}
                onHide={onClose}
                aria-labelledby="example-modal-sizes-title-lg"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Your Appointments
                    </Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p style={{ fontWeight: "600" }}>Name: {perData.name}</p>
                        <p style={{ fontWeight: "600" }}>Email: {perData.email}</p>
                    </div>
                    <div style={{ display: "flex", fontSize: "10px", justifyContent: "space-between", fontWeight: "700", margin: "10px 0", borderRadius: "5px", backgroundColor: "whitesmoke", padding: "10px 5px" }}>
                        <div>Doctor Category</div>
                        <div>Doctor Name</div>
                        <div>Patient Name</div>
                        <div>Patient Age</div>
                        <div>Appointment Day</div>
                        <div>Appointment Time</div>
                    </div>
                    {
                        perData?.appointmentsDetails?
                        perData?.appointmentsDetails.map((v, i) => {

                            return (
                                <div style={{ display: "flex", fontSize: "10px", justifyContent: "space-between", margin: "10px 0", borderRadius: "5px", backgroundColor: "whitesmoke", padding: "10px 5px" }}>
                                    <div>{v.doctorCategory}</div>
                                    <div>{v.doctorName}</div>
                                    <div>{v.patientName}</div>
                                    <div>{v.patientAge}</div>
                                    <div>{v.day}</div>
                                    <div>{v.timing}</div>
                                </div>
                            )
                        }):
                        <div>No Appointment Found</div>
                    }

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Example;