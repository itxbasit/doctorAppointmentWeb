import axios from 'axios';
import * as React from 'react';
import MedicationIcon from '@mui/icons-material/Medication';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import TodayIcon from '@mui/icons-material/Today';
import ReactStars from 'react-stars'
import { NavLink } from 'react-router-dom';

export default function MediaControlCard() {
  const [data, setData] = React.useState()
  const id = localStorage.getItem("User_ID")
  React.useEffect(() => {
    axios.get('http://localhost:9000/singleDoc', {

    }).then(function (res) {
      setData(res.data.message);
    })
  }, [])
  return (
    <div className="card-side rounded-xl bg-base-100 shadow-xl flex flex-wrap m-10">
  <figure><img className='w-96 object-cover h-100' src={data?.img_url} alt="Movie"/></figure>
  <div className="card-body p-10">
    <h1 className="card-title">
      <MedicationIcon/> {data?.name}</h1>
    <h1 className="card_subtitle1">{data?.category}</h1>
    <p>
      <AccessTimeFilledIcon className='m-3'/>{data?.timing}
    </p>
    {
      

      
      data?.days.map((k,i)=>{
        return(
        <p><TodayIcon className='m-3'/>{k}</p>
        )
      })
    }<ReactStars
          className='ml-6 mr-6'
          count={5}
          size={24}
          value={data?.rating}
          edit={false} />
    <div className="card-actions justify-end">
      {
        id ?
        <NavLink to="/doctorApp/Book" state={{ from: data }}><button className="btn btn-primary">Get Appointment</button></NavLink>:
        <NavLink to="/doctorApp/SignIn"><button className="btn btn-primary">Get Appointment</button></NavLink>
      }
      
    </div>
  </div>
</div>
  );
}