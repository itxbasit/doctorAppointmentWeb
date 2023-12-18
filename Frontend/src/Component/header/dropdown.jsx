import axios from 'axios';
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';
import Example from '../../AppointmentsDetails/modal';
import { NavLink, useNavigate } from 'react-router-dom';

function BasicExample() {
  const navigate = useNavigate();
    let id = localStorage?.getItem('User_ID')
    const [data, setData] = useState({})
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    useEffect(()=>{
        if(id){
            axios.post('http://localhost:9000/Search',{
                "id":id
            }).then((res)=>{
                setData(res.data.message)
            }).catch((err)=>{
                console.log(err)
            })
        }
    }, [])
    const logout = ()=>{
        localStorage.removeItem("User_ID")
        Swal.fire({
            title: "Thank You!",
            text: "Successfully Sign out",
            icon: "success"
          });
          navigate('/') 
    }
    console.log(data)
  return (
    <Dropdown style={{background: "none", border: "none"}}>
      <Example show={show} onClose={handleClose}/>
      <div style={{display: 'flex'}}>
      <Dropdown.Toggle style={{fontSize: "14px", fontWeight: "600", color: "#015fea", marginTop: "14px", background: "none", border: "none",textTransform: "none"}} variant="secondary" id="dropdown-basic">
        {data.email}
      </Dropdown.Toggle>
        {
          data.url ?
          <img style={{width: "40px", height: "40px", marginTop: "17px",  borderRadius: "50%", display: "flex"}}src={data.url} alt="profile" />
          :null
        }
      </div>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleShow}>Appointment Details</Dropdown.Item>
        <NavLink style={{marginLeft: "15px"}} to="/doctorApp/ProfileUpdate">Update Profile</NavLink>
        <Dropdown.Item onClick={()=> logout()}>Sign out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;