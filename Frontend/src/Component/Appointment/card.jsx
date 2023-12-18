import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import MedicationIcon from '@mui/icons-material/Medication';
import TodayIcon from '@mui/icons-material/Today';
import ReactStars from 'react-stars'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Card({ img, title, category, time, days, rating, id }) {
  let userId = localStorage?.getItem('User_ID')
  return (
    <article className="card1">
      <div className="">
        <img style={{ objectFit: "cover" }} src={img} alt="imgae1" />
      </div>
      <div className="card_content1">
        <span className="card_title1 ml-3 mr-3 text-sm" ><MedicationIcon className='mr-3' />{title}</span>
        <span className="card_subtitle1 ml-3 mr-3 font-medium">
          {category}
        </span>
        <p className="card_description1 ml-3 mr-3 mt-2 font-medium">
          <AccessTimeFilledIcon className='ml-3 mr-3' />{time}
        </p>
        <p className="card_description1 ml-3 mr-3 mt-2 font-medium">
          <TodayIcon className='ml-3 mr-3' />{days}
        </p>
        <ReactStars
          className='ml-6 mr-6'
          count={5}
          size={24}
          value={rating}
          edit={false} />
        <div className='m-3'>
        <NavLink to='/doctorApp/dotorInfo'><button className='btn btn-primary ml-3 mr-3' onClick={() => {
            axios.post(`http://localhost:9000/singleDoc?id=${id}`, {
            }).then(function (res) {
              console.log(res)
            })
          }}>Details</button></NavLink>
          {
            userId ?
            null:
            <NavLink to='/doctorApp/dotorInfo'><button className='btn btn-primary' onClick={() => {
              axios.post(`http://localhost:9000/singleDoc?id=${id}`, {
              }).then(function (res) {
                console.log(res)
              })
            }}>Appointment</button></NavLink>
          }
          
        </div>

      </div>
    </article>



  )
}

export default Card