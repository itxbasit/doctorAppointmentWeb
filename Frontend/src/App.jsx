import { useState } from 'react'
import Home from './Component/Home/Home';
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appointment from './Component/Appointment/appointment';
import PageLayout from './Component/PageLayout';
import SingleDoc from './Component/SingleDoctor/SingleDoc';
import React from 'react';
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from './PDF/pdf';
import SignIn from './Component/User Sign/SignIn';
import SignUp from './Component/User Sign/SignUp';
import Book from './Book/book';
import Update from './UpdateProfile/update';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/doctorApp/appointment' element={<Appointment />} />
      <Route path='/doctorApp/dotorInfo' element={<SingleDoc />} />
      <Route path='/doctorApp/SignIn' element={<SignIn />} />
      <Route path='/doctorApp/SignUp' element={<SignUp />} />
      <Route path='/doctorApp/Book' element={<Book />} />
      <Route path='/doctorApp/ProfileUpdate' element={<Update />} />
    </Route >


  ))

  return (
    // <Modal />
    // <div className='App'>
    //   <PDFDownloadLink document={<MyDocument/>} fileName='FORM'>
    //     {({loading}) => (loading ? <button>Loading Document....</button>: 'Download')}
    //   </PDFDownloadLink>
    // </div>
    <RouterProvider router={router} />
  )
}

export default App
